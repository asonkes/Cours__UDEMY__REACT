import { useEffect, useState } from "react";
import './Card.css';

export const Card = () => {
    const [state, setState] = useState(0);

    {/** Fonction callback (c'est l'effet de notre 'useEffect')  */}
    useEffect(() => {
        {/** On peut mettre ceci pour voir quand cela se lance... */}
        console.log("Effet");
        
        {/** Et le 'return' de cet effet, c'est la fonction de nettoyage */}
        return() => console.log("Fonction de nettoyage");
        
    })

    return (
        <div className="card">
            <p>Voici la carte et son state {state}</p>
            <button onClick={() => setState(state + 1)}>Incrémentation</button>
        </div>
    )
}