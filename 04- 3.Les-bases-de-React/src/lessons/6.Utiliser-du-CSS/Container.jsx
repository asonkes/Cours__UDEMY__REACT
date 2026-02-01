import "./Container.css";

export default function Container6() {
  return (
    <div>
      {/** Ici, exemple de CSS en ligne ==> à éviter de manière générale */}
      <h1 style={{ color: "crimson", backgroundColor: "#333" }}>
        Utiliser du CSS en ligne
      </h1>

      {/** Donc ici c'est sans module */}
      <p className="txt">Utiliser du CSS avec className</p>
    </div>
  );
}
