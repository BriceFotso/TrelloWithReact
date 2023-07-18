//Lorsque nous commençons à faire glisser un élément, nous fournissons des informations à ce sujet à react-dnd.
//Nous allons passer un objet qui décrira l'élément que nous sommes en train de faire glisser. Cet objet va
//avoir un champ de type qui pour l'instant sera COLONNE. Nous transmettrons également l' identifiant et le
//texte de la colonne que nous obtiendrons du composant Column

export type ColumnDragItem = {
    id: string
    text: string
    type:"COLUMN"
}

export type DragItem = ColumnDragItem
