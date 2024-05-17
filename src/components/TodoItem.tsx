import React, { useState } from "react";
import { TodoItemModels } from "../types/TodoItemModels";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../store/slices/todosSlice";
import { Modal, Button } from "react-bootstrap";

interface TodoItemProps {
  todo: TodoItemModels.TodoItemModel;
  index: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleToggleTodo = (slug: string) => {
    dispatch(toggleTodo(slug));
  };

  const handleRemoveTodo = (slug: string) => {
    dispatch(removeTodo(slug));
    setShowDeletePopup(false);
  };

  const handleShow = () => setShowDeletePopup(true);
  const handleClose = () => setShowDeletePopup(false);

  return (
    <>
      <tr>
        <td className="col-1 text-center">{index + 1}</td>
        <td className="col-3 text-wrap-break">{todo.title}</td>
        <td className="col-4 text-wrap-break">{todo.description}</td>
        <td className="col-2">
          <div className="form-check form-switch d-flex justify-content-center">
            <input
              className="form-check-input"
              type="checkbox"
              id={todo.slug}
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.slug)}
            />
          </div>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn py-0"
            onClick={handleShow}
            title="Delete"
          >
            <i className="bi bi-trash bi-danger" />
          </button>
        </td>
      </tr>
      <Modal show={showDeletePopup} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Are you sure you want to delete "${todo.title}" ?`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleRemoveTodo(todo.slug)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoItem;
