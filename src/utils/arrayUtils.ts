//Nous allons définir une fonction qui acceptera tout objet ayant un champ
//id : string. Nous allons donc le définir comme une fonction générique.


//Définissez un nouveau type Item.

type Item ={
    id:string
}

//Nous allons utiliser une variable de type TItem qui étend Item. Cela signifie que nous avons contraint notre générique à
//avoir les champs définis sur le type d' élément , dans ce cas le champ id

export const findItemIndexById = <Titem extends Item>(
    items: Titem[],
    id: string
) => {
    return items.findIndex((item: Titem) => item.id === id)
}

//Essayez maintenant de transmettre un tableau d'objets qui n'ont pas le champ id :
// const itemsWithoutId = [{text: "test"}]
// findItemIndexById(itemsWithoutId, "testId")


//Nous allons d'abord définir une fonction utilitaire qui nous aidera à déplacer les éléments à l'intérieur du tableau.
//Déplacer l'élément signifie que nous le supprimons de l'ancienne position, puis que nous l'ajoutons à la nouvelle position
export function removeItemAtIndex<TItem>(
    array: TItem[],
    index: number
){
    return [...array.slice(0, index), ...array.slice(index)]
}

//Nous utilisons l'opérateur spread pour générer un nouveau tableau avec la partie avant l' index que nous
//obtenons en utilisant la méthode slice , et la partie après l' index en utilisant la méthode slice avec index + 1.
export function insertItemAtIndex<TItem>(
    array: TItem[],
    item: TItem,
    index: number
){
    return [...array.slice(0, index), item, ...array.slice(index)]
}

//Nous pouvons maintenant définir la fonction moveItem :
export const moveItem = <TItem>(
    array: TItem[],
    from: number,
    to: number
) => {
    const item = array[from]
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
}