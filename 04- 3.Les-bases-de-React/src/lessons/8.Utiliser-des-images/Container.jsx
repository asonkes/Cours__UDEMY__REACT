// mais de manière générale, c'est la manière la + fréquente
// Car généralement, les images que l'on reçoit sont dynamique
import fuji from "./assets/fuji.jpg";
import triangle from "./assets/triangle.svg";

export default function Container8() {
  const id = 3;

  return (
    <div>
      <h1>Utiliser des images</h1>

      <p>Image jpg/png/webp/etc</p>
      {/** Ici se sont des images qui sont dans assets mais pas dans mon dossier 'public' */}
      <img src={fuji} alt="Mont Fuji" />

      {/** Ici se sont des images qui viennent de mon dossier 'public' */}
      <p>Utiliser des images du dossier public</p>
      <img src="/assets/forest-1.jpg" alt="Image Forêt" />

      {/** On pourrait vouloir référencer dynamiquement la source */}
      <img src={`/assets/forest-${id}.jpg`} alt="Image Forêt" />

      <p>SVG</p>
      {/** Si on intègre un SVG directement en REACT, il faut le convertir
       * Aller sur : "svg2jsx" ==> et là, il transforme en JSX
       */}
      <img src={triangle} alt="SVG triangle" />
    </div>
  );
}
