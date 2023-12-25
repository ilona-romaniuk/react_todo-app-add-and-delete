import React from 'react';
import classNames from 'classnames';

import { Todo } from '../types/Todo';

type Props = {
  todo: Todo;
  onDelete?: (todoId: number) => void;
  todoIds: number[];
};

export const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
  todoIds,
}) => {
  const TodoDeleteButton = (todoId: number) => {
    if (onDelete) {
      onDelete(todoId);
    }
  };

  return (
    <div
      data-cy="Todo"
      className={classNames('todo', { completed: todo.completed })}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>

      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => {
          TodoDeleteButton(todo.id);
        }}
      >
        ×
      </button>

      <div
        data-cy="TodoLoader"
        className={classNames(
          'modal overlay',
          { 'is-active': todoIds.includes(todo.id) },
        )}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};