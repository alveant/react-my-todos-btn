import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text='react'/>;
      <Todo text='2nd'/>;
      <Todo text='3rd'/>;
    </div>
  );
}

export default App;
