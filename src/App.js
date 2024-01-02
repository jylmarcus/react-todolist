import './App.css';
import Todo from './components/todo/todo';

function App() {
  return (
    <div className="App">
      <Todo title="test" description="testing" date="testDate" />
    </div>
  );
}

export default App;
