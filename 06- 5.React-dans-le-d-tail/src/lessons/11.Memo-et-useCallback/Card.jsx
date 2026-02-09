import { memo } from "react";

// Donc ici, on a entouré notre fonction de memo (et on va voir dans la console)
// Plus de mise à jour du 'RENDER'
// Et cela se fait tant que la props ne change pas
// Ici on parle du texte (qui est "Test"), pas de "count"
export const Card = memo((props) => {
  const { txt } = props;

  console.log("RENDER");

  return (
    <div>
      <p>Carte</p>
      <p>{txt}</p>
    </div>
  );
});
