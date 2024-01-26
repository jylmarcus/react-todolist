import Todo from "./todo";
import NewTodo from "./NewTodo";
import { useState } from "react";

export default function Todolist({ todoList, handleAddTodo, delTodo }) {
    const [modal, setModal] = useState(false);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <NewTodo openModal={modal} closeModal={()=> {setModal(false)}} handleAddTodo = {handleAddTodo} />
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Todos</h3>
        </div>
        <div className="mt-3 md:mt-0">
          <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg" onClick={() => {setModal(true)}}>
            Add Todo
          </button>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-center">
          <tbody className="text-gray-600 divide-y">
            {todoList.map((todo) => (
              <Todo
                key={todo.id}
                id = {todo.id}
                description={todo.description}
                date={todo.date}
                delTodo = {delTodo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
