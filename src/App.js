import './App.css';
import Todolist from './components/todo/todolist';

const todoList = [
                {id: 1, description: "desc1", date: "date1"},
                {id: 2, description: "desc2", date: "date2"},
                {id: 3, description: "desc3", date: "date3"}
              ]

function App() {
  
  return (
    <div className="font-roboto h-screen p-5">
      <Todolist todoList = {todoList}>
      </Todolist>
    </div>
  );
}

export default App;
