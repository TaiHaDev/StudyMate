import React, { useRef, useState } from "react";

const TodoList = ({ onRemoveHandler }) => {
  // tempory used
  const [tasks, setTasks] = useState([{name: "sleeping", id: 1}, {name: "coding", id: 2}, {name: "and eating", id: 3}]);
  const tickRef = useRef([React.createRef(),React.createRef(),React.createRef()]);
  const completedRef = useRef([React.createRef(),React.createRef(),React.createRef()]);
  const onTextInputTask = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  const onCheckMouseEnterHandler = (index) => {

    tickRef.current[index].current.classList.add("hidden");
    completedRef.current[index].current.classList.remove("hidden");

  }
  const onCheckMouseLeaveHandler = (index) => {
    tickRef.current[index].current.classList.remove("hidden");
    completedRef.current[index].current.classList.add("hidden");
  }
  const onTickHandler = (index) => {
    setTasks(prevTasks => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1); 
      return newTasks; 
    });
  };
  const onDeleteTaskHandler = (index) => {
    setTasks(prevTasks => {
        const newTasks = [...prevTasks];
        newTasks.splice(index, 1); 
        console.log(prevTasks);
        console.log(newTasks);
        return newTasks; 
      });
  }
  const onSubmitNewTaskHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newTask = event.target.value;
      if (newTask.length === 0) return;
      setTasks(prev => {
        const newTasks = [...prev];
        const lastTask = newTasks[newTasks.length - 1];
        const nextId = lastTask ? lastTask.id + 1 : 1;
        newTasks.push({name: newTask, id: nextId});
        tickRef.current.push(React.createRef());
        completedRef.current.push(React.createRef());
        return newTasks;
      });
      event.target.value = "";
  

    }
  };
  return (
    <div className="w-[24.25rem] h-80 bg-slate-200 rounded-lg px-5 py-2 resize-y overflow-auto absolute right-5 top-72 flex flex-col">
      <div className="flex justify-between items-center border-b-2 border-slate-800">
        <p className="font-medium">Tasks</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 hover:bg-slate-300 rounded-full"
          onClick={onRemoveHandler}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-between flex-grow">
              {/* each task in to-do list */}
      <div>
        {tasks.map((task, index) => (
        
          <div className="flex items-center justify-between" key={task.id}>
            <div className="flex space-x-2 items-center w-full">
              <div onMouseEnter={() => onCheckMouseEnterHandler(index)} onMouseLeave={() => onCheckMouseLeaveHandler(index) } onClick={() => onTickHandler(index)}>
              <svg
                ref={tickRef.current[index]}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
        
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3a9 9 0 019 9 9 9 0 11-18 0 9 9 0 019-9z"
                />
              </svg>
              <svg
               ref={completedRef.current[index]}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 animate-bounce hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              </div>
              <textarea
                style={{
                  paddingRight: "0px",
                  paddingBottom: "0px",
                  marginLeft: "0px",
                }}
                className=" leading-none h-auto w-full rounded-lg pt-2.5 pl-4 pr-4 resize-none outline-none overflow-hidden bg-transparent"
                defaultValue={task.name}
                onInput={onTextInputTask}
              ></textarea>
            </div>
        
            <div className="flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
                onClick={() => onDeleteTaskHandler(index)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
            <div className="flex items-center border-t border-slate-800/70">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>

        <textarea
        
                style={{
                  paddingRight: "0px",
                  paddingBottom: "0px",

                  marginLeft: "0px",
                }}
                className=" leading-none mt-1 h-auto w-full rounded-lg pt-2.5 pl-4 pr-4 resize-none outline-none overflow-hidden bg-transparent"

                placeholder="Add a new task"
                onInput={onTextInputTask}
                onKeyDown={onSubmitNewTaskHandler}
              ></textarea>
      </div>
      </div>


    </div>
  );
};

export default TodoList;
