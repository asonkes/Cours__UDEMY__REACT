import './Container.css';
import style from './Container.module.css';

// ? Pourquoi utiliser 'module.css' plutôt que 'CSS'
// ==> car dans une application, on peut avoir plusieurs 
// ==> classes les mêmes dans différents fichiers
// ==> Et donc utiliser 'module' ajoute, 1 'H', c'ets-à-dire 1 code
// ==> spécial qui va différencier les classes, mêmes si à la base
// ==> elles sont nommées pareilles
// ==>  

export default function Container() {

  // On a donc ici, un onjet avec un nom "paticulier"
  console.log(style);
  
  return (
    <div>
      {/**
      <h1 className="title">CSS Modules</h1>
       */}

      <h1 className={style.title}>CSS Modules</h1>
    </div>
  )
}
