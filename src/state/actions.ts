import { DragItem } from "../DragItem";

//Nous allons commencer par ajouter deux actions : ADD_TASK et ADD_LIST

export type Action = 
| {
    type: "ADD_LIST" //contient le titre de la liste.
    payload: string
  } 
| {
    type : "ADD_TASK" //- text est le texte de la tâche et listId est la référence à la liste à laquelle elle appartient
    payload: {text: string; listId: string}
}
|{
  type : "MOVE_LIST" //deplacer les blocks = glisser-deposer
  payload:{
    draggedId: string
    hoverId: string
  } 
}
|{
  type: "SET_DRAGGED_ITEM"
  payload: DragItem | null
}


// //Nous pourrions également définir les types dans l'union en utilisant la syntaxe d'interface
// interface AddListAction{
//     type: "ADD_LIST"
//     payload: string
// }
// interface AddTaskAction{
//     type: "ADD_TASK"
//     payload: "{text: string; listId: string}"
// }

// type Action = AddListAction | AddTaskAction

//définissons maintenant les créateurs d'action. T
export const addTask = (text: string, listId: string): Action => ({
    type: "ADD_TASK",
    payload: {
      text,
      listId
    }
  })

export const addList = (text : string): Action => ({
    type: "ADD_LIST",
    payload: text
})

export const moveList = (
  draggedId: string,
  hoverId: string
  ): Action => ({
    type: "MOVE_LIST",
    payload: {
      draggedId,
      hoverId
  }
})

export const setDraggedItem = (
  draggedItem: DragItem | null

): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem
})

