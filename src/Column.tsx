//creation du composant column

import { ColumnContainer, ColumnTitle} from "./styles"

//Rendez maintenant le composant Card à l'intérieur du composant Column
import { Card } from "./Card";

//Ajout de nouvelles tâches
import { AddNewItem } from "./AddNewItem"

//Importez le hook useAppState 
import { useAppState } from "./state/AppStateContext";

//importez le createur d'action addTask
import { moveList, addTask } from "./state/actions";

//Implémentons le glissement pour le composant Column
import { useRef } from "react";
import { useItemDrag } from "./utils/useItemDrag";

import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";

//masquer la colonne deplace
import { isHidden } from "./utils/isHidden"

//
type ColumnProps ={
    text: string;
    id: string;
    isPreview?: boolean;
}






export const Column = ({ text,id, isPreview }: ColumnProps) => { 
    //Tout d'abord, nous aurons besoin de savoir ce que nous faisons glisser, alors récupérons le draggedItem de l'état :
    const { draggedItem, getTasksByListId, dispatch} = useAppState()
    const tasks = getTasksByListId(id)
    const ref = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: "COLUMN",
        hover: throttle(200, () => {
            if(!draggedItem){
                return
            }
            if (draggedItem.type === "COLUMN"){
                if(draggedItem.id === id){
                    return
                }
                dispatch(moveList(draggedItem.id, id))
            }
        })
    })
    //Nous utiliserons le crochet useItemDrag pour savoir quand l'utilisateur a commencé à faire glisser la colonne.
    const { drag } = useItemDrag({ type: "COLUMN", id, text })
    drag(drop(ref))

    return (
    <ColumnContainer 
    isPreview={isPreview}
    ref={ref}
    isHidden={isHidden(draggedItem, "COLUMN", id)}
    >
        <ColumnTitle>{text}</ColumnTitle>
        {tasks.map((task) => (
            <Card text={task.text} key={task.id} id={task.id} />
        ))}
        <AddNewItem 
            toggleButtonText="+ Add another card"
            onAdd={(text) => dispatch(addTask(text,id))}
            dark
        />
    </ColumnContainer>
    )
}


