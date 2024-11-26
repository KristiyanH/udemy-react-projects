import { useState, useRef } from "react";

import Modal from './Modal.jsx';

export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
  const modal = useRef();

  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for the task.
        </p>
      </Modal>
      <section className="mt-4 text-stone-600">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <div className="flex mt-4">
          <input
            type="text"
            onChange={handleChange}
            value={enteredTask}
            className="w-[17rem] h-[2.5rem] p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ></input>
          <button onClick={handleAddTask} className="ml-4 font-bold">
            Add Task
          </button>
        </div>
        <div className="my-8 bg-stone-100 rounded-lg p-3">
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="flex justify-between p-3">
                <p className="font-bold">{task.text}</p>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
