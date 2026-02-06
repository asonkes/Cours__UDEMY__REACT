import { useState, useRef, useEffect } from "react";
import { StaticRefSelection } from "./StaticRefSelection";
import { DynamicRefSelection } from "./DynamicRefSelection";

// Ici on va faire en sorte de pas faire seulement 1 ref
// Donc pas seulement sélectionner 1 élément 
// Mais pouvoir ne sélectionner plusieurs
export default function Container9() {

  return (
    <div>

      {/**
       * <StaticRefSelection/>
      */}
      
      <DynamicRefSelection/>
      
    </div>
  )
}
