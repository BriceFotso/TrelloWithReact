//Les références fournissent un moyen de référencer les nœuds DOM réels des éléments React rendus, 
//Il existe plusieurs façons de définir des références dans React, nous allons utiliser la version hook.

//Créer le hook useFocus

import { useRef, useEffect } from "react"


export const useFocus = () => { 
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() =>{ 
        ref.current?.focus() 
    },[])
    return ref
}