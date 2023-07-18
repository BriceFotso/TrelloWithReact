//creation du composant NewItemForm et Importez le hook useState et les composants stylisés

import { useState } from "react"
//import { text } from "stream/consumers";
import{ 
    NewItemFormContainer,
    NewItemButton,
    NewItemInput
} from "./styles"

import { useFocus } from "./utils/useFocus";

//Définissez le type NewItemFormProps
type NewItemFormProps = {
    onAdd(text: string): void  // onAdd est un rappel transmis via AddNewItemProps
}

// Définissez maintenant le composant NewItemForm
export const NewItemForm = ({ onAdd } : NewItemFormProps) => { 
    const [text, setText] = useState("")
    const inputRef = useFocus()
    //soumettre l'entree
    const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>
        ) => {
            if (event.key === "Enter") {
                onAdd(text)
            }
        }
return(
    <NewItemFormContainer>
        <NewItemInput
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleAddText}
        />
        <NewItemButton onClick={() => onAdd(text)}>
            Create
        </NewItemButton>
    </NewItemFormContainer>
    )
}


