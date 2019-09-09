import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  return (
    <ul className="list-group">
      {props.todos.map(item => <TodoItem todo={item} />)}
    </ul>
  );
}

export default TodoList;

const shape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(shape).isRequired,
};