//Définir le crochet useItemDrag
//Ce crochet renverra une méthode de glissement qui accepte la référence d'un élément déplaçable.
//En interne, ce crochet utilise useDrag de react -dnd. Nous lui passons un objet options .
//Chaque fois que nous commençons à faire glisser l'élément, le hook enverra une action SET_DRAG_ITEM pour
//enregistrer l'élément dans l'état de l'application. Lorsque nous arrêtons de faire glisser, il envoie à nouveau cette
//action avec null comme charge utile.
import { useDrag } from "react-dnd";
import { useAppState } from "../state/AppStateContext";
import { DragItem } from "../DragItem";
import { setDraggedItem } from "../state/actions";

export const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState()
    const [, drag] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDraggedItem(item))
            return item
        },
        end: () => dispatch(setDraggedItem(null))
    })
    return {drag}
}
