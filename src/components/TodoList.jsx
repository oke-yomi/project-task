import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditForm from "./todo/EditTodo";
import InputForm from "./todo/InputForm";
import TodoItem from "./todo/TodoItem";
import { IoMdClose } from "react-icons/io";
import { deleteAllCompletedTodoItems } from "../features/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todoList);
  // console.log(todos);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const perc = Math.floor((completedCount / todos.length) * 100);
  const remainder = 100 - perc;

  const handleDeleteAllCompleted = () => {
    dispatch(deleteAllCompletedTodoItems());
  };

  return (
    <div className="bg-slate-50 mx-auto w-4/5 md:px-6 px-4 pt-6 pb-2 rounded-sm max-w-[700px]">
      <h2 className="text-center uppercase font-extrabold text-xl text-cyan-900">
        TodoList
      </h2>

      <InputForm />

      {todos.length === 0 && (
        <div className="w-full text-center border p-5 mt-3 rounded-md">
          <p className="text-cyan-900 text-lg">No todo items</p>
        </div>
      )}

      <ul className="flex flex-col gap-0">
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditForm key={index} todo={todo} />
          ) : (
            <TodoItem todo={todo} key={index} />
          )
        )}
      </ul>

      {todos.length > 0 && (
        <div className="flex flex-row w-full justify-between items-center gap-2 flex-wrap mt-8 mb-3">
          <div className="border flex relative h-7 w-60 transition-all duration-500 ease-in">
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] whitespace-nowrap">
              {completedCount} / {todos.length} tasks completed
            </p>
            <span
              className={` bg-yellow-500`}
              style={{ width: `${perc}%` }}
            ></span>
            <span
              className={` bg-white`}
              style={{ width: `${remainder}%` }}
            ></span>
          </div>

          <button
            onClick={handleDeleteAllCompleted}
            className="flex gap-3 justify-center items-center text-white bg-cyan-900 border-none px-2 py-1 rounded"
          >
            Remove Checked <IoMdClose className="font-bold text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
