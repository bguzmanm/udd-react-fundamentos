import { Head } from './components/Head';
import { Footer } from './components/Footer';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodoItem } from './components/TodoItem';

const defaultTodos = [
  {text: 'Limpiar Baño', completed: false},
  {text: 'Lavar la loza', completed: false},
  {text: 'Preparar almuerzo', completed: false},
  {text: 'Ordenar living', completed: false},
];

function App() {
  return (
    <div>
      <Head/>
      <TodoSearch/>
      <TodoList>
        {
        defaultTodos.map(todo => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
          />
        ))
        }
      </TodoList>
      <Footer/>
    </div>
  );
}

export default App;
