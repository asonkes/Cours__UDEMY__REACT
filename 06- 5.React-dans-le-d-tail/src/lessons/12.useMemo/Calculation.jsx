import { useState, useMemo } from "react";

// useMemo c'est pour enregistrer un calcul
// Enregitrer aussi l'exécution d'un calcul et donc son résultat
export const Calculation = () => {
  {
    /** On va faire pour faire un exemple, calculer les fahrenheit
     * On fait ensuite démarrer notre 'useState'avec une chaîne de température vide
     */
  }
  const [temperature, setTemperature] = useState("");

  // Ca c'est le calcul pour transformer les degrés en fahrenheit
  function celsiusToFarenheit(degree) {
    return degree ? degree * 1.8 + 32 : "Entrez une valeur";
  }

  // On imagine ici, que c'est un calcul très compliqué et on a pas envie
  // A chaque rafraichissement de devoir refaire le calcul
  // Donc on entoure la fonction de 'useMemo' comme ça si on change pas la valeur de l'inpu
  // Plus de render
  // Par contre je mets 'temperature' dans le tableau des dépendances
  // Car si on change la valeur de l'input;
  // La valeur affichée doit changer !!!

  // On va 'RENDER' que chaque fois qu'on change une valeur dans l'input !!!
  const expensiveCalculation = useMemo(() => {
    // Donc on va avoir des mises à jour sur l'enfant
    console.log("RENDER");
    return celsiusToFarenheit(temperature);
  }, [temperature]);

  return (
    <div>
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
      <h1>
        Valeur de {temperature} degrés en Farenheit : {expensiveCalculation}
      </h1>
    </div>
  );
};
