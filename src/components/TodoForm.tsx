import React, { useState, FormEvent } from "react";
import { nanoid } from "nanoid";
import { addTodo } from "../store/slices/todosSlice";
import { useDispatch } from "react-redux";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    const itemData = {
      slug: nanoid(),
      title,
      description,
      completed: false,
    };
    dispatch(addTodo(itemData));
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          id="title"
          className="form-control placeholder-italic"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Please enter todo title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description (Optional)
        </label>
        <textarea
          className="form-control placeholder-italic"
          id="description"
          rows={3}
          value={description}
          placeholder="Enter todo description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="d-flex justify-content-start mb-3">
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
