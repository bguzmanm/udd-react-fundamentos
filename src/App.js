import { Head } from './components/Head';
import { Footer } from './components/Footer';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const defaultTodos = [
  {text: 'Limpiar Baño', completed: false},
]

function App() {
  return (
    <div>
      <Head/>
      <TodoSearch/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
