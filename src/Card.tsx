//Créer des composants de carte

import { CardContainer } from "./styles";

//définissez le champ id sur le type CardProps 
type CardProps ={
    text: string;
    id: string;
}

//Il n'acceptera également que le texte prop. Définissez le type CardProps pour les accessoires avec le texte de champ de type chaîne
export const Card = ({text}: CardProps) => {
    return <CardContainer>{text}</CardContainer>
}

