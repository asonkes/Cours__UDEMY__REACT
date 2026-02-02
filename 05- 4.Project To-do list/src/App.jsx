import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import { ListItem } from "./components/ListItem";

function App() {
  // Donc chaque objet va avoir une propriété content (ex: propriété 'content 1');
  const [todoList, setTodoList] = useState([
    // Donc ici, on utilise la méthode 'nanoid' pour donner un 'id' à chaque élément
    {
      id: nanoid(8),
      content: "item 1",
    },

    {
      id: nanoid(8),
      content: "item 2",
    },

    {
      id: nanoid(8),
      content: "item 3",
    },
  ]);

  // On a bien un 'id' qui a été créé
  console.log(todoList);

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const [todo, setTodo] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    {
      /** Permet que si l'input est vide on puisse pas envoyer la todo vide */
    }
    if (todo === "") {
      setShowValidation(true);
      return;
    }

    setTodoList([...todoList, { id: nanoid(), content: todo }]);
    setTodo("");
    setShowValidation(false);
  };

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do liste</h1>

        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className="mt-1 block w-full rounded"
          />

          {showValidation && (
            <p className="text-red-400">
              Ajoutez d'abord du contenu à votre tâche
            </p>
          )}

          <button className="mt-4 mb-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
            Ajouter
          </button>
          <ul>
            {todoList.length === 0 && (
              <li className="text-slate-50 text-md">
                Pas di'items à afficher...
              </li>
            )}

            {/** Ici pour l'instant qu'il y ai des infos ou pas dans la todoList
             * Elle s'exécute... Ce qui est pas forcément bon...
             * Donc on va faire...
             * Comme ca on exécute pas pour rien...
             */}
            {todoList.length > 0 &&
              todoList.map((item) => (
                <ListItem
                  key={item.id}
                  itemData={item}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;
