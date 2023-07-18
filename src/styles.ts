import styled from 'styled-components';

//masquer les colonnes quand on les deplacent

type DragPreviewContainerProps = {
    isHidden?: boolean
    //Empêcher l'aperçu de la colonne de se cacher
    isPreview?: boolean
}

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
transform: ${(props) =>
    props.isPreview ? "rotate(5deg)" : undefined};
  opacity: ${(props) => (props.isHidden ? 0.3 : 1)};   
`

//Créez un composant AppContainer. AppContainer - cela nous aidera à organiser les colonnes horizontalement.  ça va pour envelopper l'ensemble de l'application.
export const AppContainer = styled.div` 
align-items: flex-start; 
background-color: #3179ba; 
display: flex; 
flex-direction: row; 
height: 100 % ;
padding: 20px ; 
width : 100 % ;
`
//Créez un composant ColumnContainer.c'est une représentation visuelle d'une colonne. Il aura un fond gris et des coins arrondis. •
export const ColumnContainer = styled(DragPreviewContainer)` 
background-color: #ebecf0;
height: 300px;
min-height: 40px;
margin-right: 20px;
border-radus: 3px;
padding: 8px 8px;
flex-grow : 0;
`

//ColumnTitle : Nous l'utiliserons pour envelopper le titre de notre colonne 
export const ColumnTitle = styled.div`
padding: 6px 16px 12px; 
font-weight : bold;
`

//créez un nouveau composant stylé appelé CardContainer. N'oubliez pas de l'exporter.
export const CardContainer = styled(DragPreviewContainer)` 
background-color: #fff;
cursor: pointer;
margin-bottom: 0,5rem; 
padding: 0,5rem 1rem ;
max-width: 300px;
border-radus: 3px;
box-shadow : #091e4240 0px 1px 0px 0px;
`
//définissez un type pour AddItemButtonProps: bouton de creation d'une liste ou taches
type AddItemButtonProps = {
    dark ? : boolean
}

//Définissez maintenant le composant de style AddNewItemButton :
export const AddItemButton = styled.button<AddItemButtonProps>` 
background-color: #ffffff3d; 
border-radius: 3px; 
border: none; 
color: ${(props) => (props.dark ? "#000" : "#fff")}; 
cursor: pointer; 
max-width: 300px ;
padding: 10px 12px; 
text-align: left; 
transition: background 85ms ease-in; 
width: 100%;
&:hover {
     background-color: #ffffff52;
    }
`

//Définissez un NewItemFormContainer pour le formulaire utlisee pour creer un nouveau element

export const NewItemFormContainer = styled.div`
max-width: 300px; 
display: flex; 
flex-direction: column;
width: 100% ;
align-items : flex-start ;
`

//Créez un composant NewItemButton

export const NewItemButton = styled.button` 
background-color: #5aac44;
border-radius: 3 px; 
border:none; 
box-shadow: none; 
color: #fff ;
padding: 6px 12px; 
text-align: centrer ;
`

//notre bouton soit vert et ait de jolis coins arrondis.
export const NewItemInput = styled.input`
border-radius: 3px;
border: none; 
box-shadow: #091e4240 0px 1px 0px 0px; 
margin-bottom: 0,5rem;
padding: 0,5rem 1rem; 
width: 100%;
`

//Implémenter l'aperçu de glissement personnalisé
export const CustomDragLayerContainer = styled.div`
height: 100%;
left: 0;
pointer-events: none;
position: fixed;
top: 0;
width: 100%;
z-index: 100;
`

// //Nous allons créer un composant stylé qui obtiendra les coordonnées de l'élément glissé à partir de reactdnd et générera les styles avec l' attribut transform pour déplacer l'aperçu.
// type DragPreviewWrapperProps = {
//     position:{
//         x: number
//         y: number
//     }
// }

// //Définissez maintenant le composant stylé
// export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
// ({ position: { x,y}} =>({
//     style:{
//         transform:
//     }
// })

// })
// )