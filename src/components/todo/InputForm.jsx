import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodoItem } from "../../features/todoSlice";
import { BiPlus } from "react-icons/bi";

const InputForm = () => {
  const uuid = uuidv4();

  const inputRef = useRef();
  const dispatch = useDispatch();

  // handle submit of form
  const handleSubmit = (e) => {
    e.preventDefault();

    const todoInput = inputRef.current.value;

    if (todoInput.trim() === "") {
      return;
    }

    dispatch(
      addTodoItem({
        id: uuid,
        task: todoInput,
        completed: false,
        isEditing: false,
      })
    );

    inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-between items-center gap-1 my-4 h-12"
    >
      <input
        type="text"
        placeholder="Enter a new task"
        ref={inputRef}
        className="flex-1 border-amber-600 border focus:outline-none px-2 py-2 text-xl text-cyan-900 rounded-sm text-center"
      />

      <button
        type="submit"
        className="bg-teal-600 flex justify-center items-center h-full w-12 rounded-sm"
      >
        <BiPlus className="text-white text-2xl" />
      </button>
    </form>
  );
};

export default InputForm;
