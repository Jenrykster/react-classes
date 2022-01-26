import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoElement from './TodoElement';
import classes from './Todos.module.css';
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoElement
          key={item.id}
          onTodoClick={todosCtx.removeTodo}
          todo={item}
        />
      ))}
    </ul>
  );
};

export default Todos;
