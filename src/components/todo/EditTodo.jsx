import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodoItem } from "../../features/todoSlice";

const EditForm = ({ todo }) => {
  const [value, setValue] = useState(todo.task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTodo = { ...todo, task: value, isEditing: !todo.isEditing };

    dispatch(updateTodoItem(updatedTodo));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-1 px-3 py-2 border rounded-md shadow-sm flex justify-between items-center  w-full"
    >
      <input
        type="text"
        placeholder="Edit your task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none border-none flex-1"
      />
      <button type="submit" className="text-cyan-900 uppercase font-semibold">
        Update
      </button>
    </form>
  );
};

export default EditForm;
