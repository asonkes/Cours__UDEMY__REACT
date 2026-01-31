/**********************************/
/** 1ere lesson  => 1er composant */
/**********************************/

export const Container = () => {
  const txt = "TEST";

  function handleClick() {
    console.log("click3");
  }

  return (
    <div>
      {/** On peut tout retourner sauf des OBJETS */}
      <p>Hello World !!!</p>
      <ul className="list">
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      <button>Valider</button>
      <p>{10 + 10}</p>
      <p>{"ab" + "c"}</p>
      <p>{"Le chat saute!".toUpperCase()}</p>
      <p>{txt}</p>
      <p>{[1, 2, 3, "a"]}</p>
      <p>{[<span>Hello World</span>]}</p>

      <input type="text" />
      <hr />
      <img src="" alt="" />

      <p className="txt">Lorem ipsum dolor sit amet.</p>
      <label htmlFor=""></label>

      {/** Aria-label à ne mettre que qd il n'y a pas de texte poir l'accessibilité
       * Ex :
       * Icône CROIX pour menu burger !!!
       */}
      <button aria-label="toggle button">Pas de Texte</button>
      <hr />

      {/** C'est comme faire :
       * btn.addEventListener("click", () => console.log("click"))
       */}
      <button className="btn1" onClick={() => console.log("Click1")}>
        1er Click
      </button>
      <hr />

      {/** Ici, si je veux vérifier le "click" du bouton
       * Aller dans inspecteur et faire :
       * console.log(getEventListeners(document.getElementById(".btn1")))
       */}
      <button className="btn2" onClick={console.log("Click2")}>
        2eme Click
      </button>
      <hr />

      <button className="btn3" onClick={handleClick}>
        3eme Click
      </button>
      <hr />
    </div>
  );
};
