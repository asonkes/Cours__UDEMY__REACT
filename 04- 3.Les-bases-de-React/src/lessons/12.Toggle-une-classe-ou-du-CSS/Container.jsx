import { useState } from "react";
import "./Container.css";

export default function Container12() {
  // On va simuler un "darkMode"
  // Et on met false, car à la base, le mode n'est pas en dark
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/** Ajoute la classe 'darkMode' uniquement si 'darkMode === true' */}
      <div className={`fullContainer ${darkMode && "dark-mode"}`}>
        <h1>Toggle une classe</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dignissimos tempore deserunt repellat aliquam veniam quaerat earum
          sint laborum sed nostrum consectetur dolorum blanditiis voluptatum,
          exercitationem, commodi illo! Ratione, esse!
        </p>

        {/** Si darkMode === false devient true */}
        {/** Si darkMode === true devient false */}
        {/** Ca ca sert à changer la valeur du darkMode (false ou true) */}
        <button onClick={() => setDarkMode(!darkMode)}>
          Activer le {darkMode ? "light Mode" : "Dark mode"}
        </button>
      </div>
    </>
  );
}
