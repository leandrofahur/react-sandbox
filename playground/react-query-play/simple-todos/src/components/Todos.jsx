import PropTypes from "prop-types";
import styles from "./Todos.module.css";

function Todos(props) {
  const { todos } = props;

  function checkIfTodoIsComepleted(todo) {
    if (todo.completed) {
      return (
        <p>
          <span className={styles.checkIcon}>✅</span> <s>{todo.title}</s>
        </p>
      );
    }

    return (
      <p>
        <span className={styles.checkIcon}>❌</span> {todo.title}
      </p>
    );
  }

  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <div key={`${todo.id} + ${todo.title}`} className={styles.todoCard}>
          <div>{checkIfTodoIsComepleted(todo)}</div>
        </div>
      ))}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.arrayOf({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
};

Todos.deaultProps = {
  todos: [],
};

export default Todos;
