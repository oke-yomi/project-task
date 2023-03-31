import React from "react";
import { IoMdClose } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  deleteTodoItem,
  toggleCompleted,
  toggleIsEditing,
} from "../../features/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleIsEditing = () => {
    dispatch(toggleIsEditing(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodoItem(todo.id));
  };

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(todo.id));
  };

  return (
    <li
      className={`mb-1 px-3 py-2 border rounded-md shadow-sm flex justify-between items-center  w-full ${
        todo.completed ? "" : "bg-blue-50"
      }`}
    >
      <div className="flex flex-1 justify-start items-center gap-2 ">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleCompleted}
          className="w-4 h-4"
        />
        <label
          className={`text-teal-700 ${todo.completed ? "line-through" : ""}`}
        >
          {todo.task}
        </label>
      </div>

      <div className="flex text-blue-300 items-center gap-3">
        <BiPencil onClick={handleToggleIsEditing} />
        <IoMdClose onClick={handleDelete} />
      </div>
    </li>
  );
};

export default TodoItem;
