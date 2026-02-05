import { HugeContent } from "./HugeContent";
import { useState } from "react";

export default function Container() {

  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {/** Le but ici, va être d'afficher un grand contenu et de faire un évènement
       * sur ce contenu global
       */}
      <h1>Ajouter un évènement global</h1>

      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Cacher" : "Montrer"} le contenu
      </button>

      {showContent && <HugeContent/>}
    </div>
  )
}
