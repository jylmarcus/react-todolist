import './App.css';
import Todolist from './components/todo/todolist';
import { useState } from 'react';

function App() {

  const [todoList, updateTodoList] = useState([
    {id: 1, description: "desc1", date: "date1"},
    {id: 2, description: "desc2", date: "date2"},
    {id: 3, description: "desc3", date: "date3"}
  ]);
  const handleAddTodo = (e) => {
    let lastId = todoList[todoList.length-1].id;
    const newList = [...todoList];
    newList.push({id: lastId + 1, description: e.target[0].value, date: e.target[1].value});
    updateTodoList(newList);
    e.preventDefault();
  }

  const delTodo = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    updateTodoList(newList);
  }
  
  return (
    <div className="font-roboto h-screen p-5">
      <Todolist todoList = {todoList} handleAddTodo={handleAddTodo} delTodo = {delTodo}>
      </Todolist>
    </div>
  );
}

export default App;
