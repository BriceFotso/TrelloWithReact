//Définissons d'abord une structure de données pour notre application et rendons-la disponible à tous les composants via l'API Context de React.
import { createContext, useContext, Dispatch, FC } from "react"
//Nous utiliserons le createContext pour définir le AppStateContext, useContext pour définir un
//crochet d'assistance pour accéder plus facilement aux données de contexte, et le type FC pour
//définir le AppStateProvider afin qu'il accepte les enfants.

//maintenant notre réducteur nous permet d'ajouter des listes et des tâches, implémentons cela dans l'interface utili
import { 
    appStateReducer,
    AppState,
    List,
    Task
 } from "./appStateReducer";
 import { Action } from "./actions";
 import { useImmerReducer } from "use-immer";

 //Ajoutez le champ draggedItem aux AppStateContextProps
import { DragItem } from "../DragItem";
//...


//Définissez les types pour l'état de l'application
// type Task = {
//     id: string
//     text: string
// }
// type List = {
//     id: string
//     text: string
//     tasks: Task[]
// }
// export type AppState = {
//     lists: List[]
// }

//J'ai décidé d'utiliser les termes Tâche/Liste pour les types de données et Colonne/Carte pour les composants de
//l'interface utilisateur. De cette façon, il devrait y avoir moins d'ambiguïté. Donc, s'il y a une mention d'une tâche -
//nous parlons des données, et si nous mentionnons une carte , il s'agit certainement d'un composant. 

//Nous définissons le type de cet objet sur AppState.
const appData : AppState = { 
    lists: [
        {
            id : "0",
            text : "To Do",
            tasks : [{ id: "c0", text:"Generate app acaffolt" }] 
        },
        {
            id : "1",
            text : "In Progress",
            tasks : [{ id: "c2", text:"Learn TypeScript" }] 
        },
        {
            id : "2",
            text : "Done",
            tasks : [{ id: "c3", text:"Begin to use static typing" }] 
        },
        
    ],
    
    draggedItem: null,
        //...
    
}

//Définissez le type de la valeur de contexte et le contexte lui-même
type AppStateContextProps = { 
    draggedItem: DragItem | null
    lists: List[]
    getTasksByListId: (id :string) => Task[]
    dispatch: Dispatch<Action>
}
const AppStateContext = createContext<AppStateContextProps> ( 
    {} as AppStateContextProps
)

type AppStateProviderProps = {
    children: React.ReactNode
    // initialState: AppState
  }
  

export const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => 
{
     const [state,dispatch] = useImmerReducer(appStateReducer, appData)
     const { draggedItem, lists } = state

     const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }
    return ( 
        <AppStateContext.Provider value={{draggedItem, lists, getTasksByListId, dispatch}}>
        {children}
       </AppStateContext.Provider>
    )
}

export const useAppState = () => {
    return useContext(AppStateContext)
  }