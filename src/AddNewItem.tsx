import { useState } from "react";
import { AddItemButton } from "./styles";
import { NewItemForm } from "./NewItemForm";

//Ce composant acceptera un type d'élément et certains accessoires de texte pour ses boutons. Définissez untype pour ses accessoires :
type AddNewItemProps = {
    onAdd(text: string): void //fonction de rappel qui sera appelée lorsque nous cliquerons sur le bouton Créer
    toggleButtonText: string // texte que nous rendrons lorsque ce composant est un bouton. 
    dark ?: boolean //un drapeau que nous allons passer au composant stylé.

}

//Définissez le composant AddNewItem 
export const AddNewItem = (props : AddNewItemProps) => { 
    const [showForm, setShowForm] = useState(false) 
    const { onAdd, toggleButtonText, dark } = props

    if (showForm) {
        //Nous montrons ici le formulaire de création d'élément
     return(
        <NewItemForm
        onAdd={(texte) =>{
            onAdd(texte)
            setShowForm(false)
        }}
        />
     )
    }

    return(
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}> 
        {toggleButtonText}
        </AddItemButton>
    )
}