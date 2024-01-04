import './App.css';
import Todo from './components/todo/todo';

const todoList = [
                {title: "todo1", description: "desc1", date: "date1"},
                {title: "todo2", description: "desc1", date: "date1"},
                {title: "todo3", description: "desc1", date: "date1"}
              ]

function App() {
  const todos = todoList.map(todo => 
      <Todo key={todo.title} title={todo.title} description={todo.description} date={todo.date} />
    )
  return (
    <div className="flex box-border font-roboto flex-col h-screen p-5 items-center">
      {todos}
    </div>
  );
}

export default App;
