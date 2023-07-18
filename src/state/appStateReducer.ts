//fonction de reduction

import { Action } from "./actions";
//import { AppStateProvider } from "./AppStateContext";

//Déplacez la définition de type AppState de AppStateContext vers ce nouveau fichier appStateReducer :

import { nanoid } from "nanoid";

//t importez la fonction findItemByIndex :
import { findItemIndexById,moveItem } from "../utils/arrayUtils"

//Stockons l'élément déplacé dans notre état d'application
import { DragItem } from "../DragItem";

export type Task ={
    id:string
    text:string
}

export type List ={
    id: string
    text: string
    tasks: Task[]
}

export type AppState ={
    lists: List[]
    draggedItem: DragItem | null
}

//Exportez également la liste et les types de tâches 
//Définissez et exportez le appStateReducer :
export const appStateReducer =(
    draft: AppState,
    action: Action
): AppState | void => {
    switch(action.type) {
        case "ADD_LIST":{
         draft.lists.push({
            id: nanoid(),
            text: action.payload,
            tasks:[]
    })
    break
    }
    //Définissez le gestionnaire ADD_TASK :
    case "ADD_TASK":{
        const {text, listId} = action.payload
        const targetListIndex = findItemIndexById(draft.lists, listId)

        draft.lists[targetListIndex].tasks.push({
            id: nanoid(),
            text
        })
        break
    }
    // definissez le gestion de deplacement MOVE_LIST
    case "MOVE_LIST":{
        const { draggedId, hoverId } = action.payload
        const dragIndex = findItemIndexById(draft.lists, draggedId)
        const hoverIndex = findItemIndexById(draft.lists, hoverId)
        draft.lists = moveItem(draft.lists, dragIndex ,hoverIndex)
        break
    }
    //nous définissons le champ draggedItem de notre état brouillon sur tout ce que nous obtenons de action.payload.
    // action SET_DRAG_ITEM pourenregistrer l'élément dans l'état de l'application
    case "SET_DRAGGED_ITEM":{
        draft.draggedItem = action.payload
        break
    }

}
}
