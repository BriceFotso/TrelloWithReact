//Ajoutons une méthode d'assistance pour calculer si nous devons masquer la colonne

import { DragItem } from "../DragItem";

export const isHidden = (

    draggedItem: DragItem | null,
    itemType: string,
    id: string,
    isPreview?: boolean
): boolean => {
    return Boolean(
        !isPreview &&
        draggedItem &&
            draggedItem.type === itemType &&
            draggedItem.id === id
    )
}