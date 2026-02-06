import { useState, useRef } from "react";
import {nanoid} from "nanoid";

// On va faire quoi???
// On va faire une liste de produits dynamiques
// Où qd on clique dessus, on peut rajouter ou supprimer des éléments
export const DynamicRefSelection = () => {

    const [fruits, setFruits] = useState([
        {
            id: nanoid(8),
            value: "🥭" 
        },
          {
            id: nanoid(8),
            value: "🍉" 
        },
          {
            id: nanoid(8),
            value: "🍏" 
        }
    ]);

    function deleteFruit(id) {
        setFruits(fruits.filter(fruit => fruit.id !== id))
    }

    // Maintenant construire une référence
    // On voit ici, sans rien faire les 3 fruits sont passés dans le 'callback'
    // sans rien faire comme action
    const fruitsRef = useRef([]);
    
    return (
        <div>
            <ul>
                {/**
                 * 'ref' ici est utilisé pour que les éléments soient dans l'ordre
                 * Car chaque fois qu'on clique sur le bouton
                 * On a 'null' dans la console
                 * Et puis les éléments qui font partie du tableau
                 * Ca réordonne le tout 
                 */}
                {fruits.map(fruit => (
                    <li 
                    key={fruit.id}
                    onClick={() => deleteFruit(fruit.id)}
                    ref={element => {
                        if(element) {
                            fruitsRef.current.push(element);
                        } else {
                            {/** 'shift()' permet d'enlever le 1er élément d'un tableau */}
                            fruitsRef.current.shift();
                        }
                        console.log(fruitsRef);
                    }}
                    >
                        {fruit.value}
                    </li>
                ))}
            </ul>

            {/** Grâce à cette ligne, on peut rajouter ou supprimer des éléments */}
            <button 
            onClick={() => 
            setFruits([...fruits, {id: nanoid(8), value: "🍌"}])}
            >
                Add Fruits
            </button>
        </div>
    )
}
