// "use client" is used to tell the app that a particular component should run on the client side, not on the server.
"use client"
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const SubmitHandler = (e)=> {
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  }

  let renderTask = <h2>No Task Available</h2>

  return (
    <>
      <h1 className="bg-black text-white p-5 text-2xl font-bold text-center">
        Todo List
      </h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Title here"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
           <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
