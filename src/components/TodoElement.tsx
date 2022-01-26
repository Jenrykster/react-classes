import Todo from '../models/todo';
import classes from './TodoElement.module.css';
const TodoElement: React.FC<{
  todo: Todo;
  onTodoClick: (todoId: string) => void;
}> = (props) => {
  const onClickHandler = () => {
    props.onTodoClick(props.todo.id);
  };
  return (
    <li onClick={onClickHandler} className={classes.item} key={props.todo.id}>
      {props.todo.text}
    </li>
  );
};

export default TodoElement;
