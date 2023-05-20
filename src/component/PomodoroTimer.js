import React, { useRef, useState } from 'react'

const addChosenType = (event) => {
  event.target.classList.add("bg-slate-800", "text-slate-200");
}
const convertTime = time => {
  let minute = time / 60;
  let second = time % 60;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  return [minute, second];
}
const PomodoroTimer = ({onRemoveHandler}) => {
  const [studyTime, setStudyTime] = useState(1500);
  const [shortBreakTime, setShortBreakTime] = useState(300);
  const [longBreakTime, setLongBreakTime] = useState(900);
  const [chosenType, setChosenType] = useState([studyTime, setStudyTime]);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalRef, setIntervalRef] = useState();
  const studyRef = useRef();
  const startButtonRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();
  const minuteRef = useRef();
  const secondRef = useRef();
  const onMinuteInputHandler = event => {
    minuteRef.current.value.replace(/\D/g, '');
    if (minuteRef.current.value.length > 2) {
      minuteRef.current.value = minuteRef.current.value.slice(0,2);
    }
  }
  const onSecondInputHandler = event => {
    minuteRef.current.value.replace(/\D/g, '');
    if (minuteRef.current.value < 0 ) {
      minuteRef.current.value = 0;
    } else if (minuteRef.current.value > 60) {
      minuteRef.current.value = minuteRef.current.value.slice(0, 1);
    }
  };
  const countDownFunction = () => {
    let time = parseInt(minuteRef.current.value) * 60 + parseInt(secondRef.current.value);
    if (time <= 0) {
      clearInterval(intervalRef);
      return;
    }
    time -= 1;
    let minute = Math.floor(time / 60);
    let second = time % 60;
    second = second < 10 ? '0' + second : second;
    minute = minute < 10 ? '0' + minute : minute;
    minuteRef.current.value = minute;
    secondRef.current.value = second;
  };
  const pauseTimer = event => {
    if (!isStarted) {
      setIntervalRef(setInterval(countDownFunction, 1000));
      startButtonRef.current.innerText = "Pause";
      minuteRef.current.disabled = true;
      secondRef.current.disabled = true;
      setIsStarted(true);
    } else {
      clearInterval(intervalRef);
      startButtonRef.current.innerText = "Start";
      minuteRef.current.disabled = false;
      secondRef.current.disabled = false;
      setIsStarted(false);
    }
  }
  const pauseBeforeSwitchType = event => {
    if (isStarted) {
      clearInterval(intervalRef);
      startButtonRef.current.innerText = "Start";
      minuteRef.current.disabled = false;
      secondRef.current.disabled = false;
      setIsStarted(false);
    }
  };
  const onClickStudyType = event => {
    if (chosenType[0] === studyTime) return;
    else {
      shortBreakRef.current.classList.remove("bg-slate-800", "text-slate-200");
      longBreakRef.current.classList.remove("bg-slate-800", "text-slate-200");
    }
    setChosenType([studyTime, setStudyTime]);
    addChosenType(event);
    setInputDisplay(studyTime);
    pauseBeforeSwitchType();
  }
  const onClickShortBreakType = event => {
    if (chosenType[0] === shortBreakTime) return;
    else {
      studyRef.current.classList.remove("bg-slate-800", "text-slate-200");
      longBreakRef.current.classList.remove("bg-slate-800", "text-slate-200");
    }
    setChosenType([shortBreakTime, setShortBreakTime]);
    addChosenType(event);
    setInputDisplay(shortBreakTime);
    pauseBeforeSwitchType();

  }
  const onClickLongBreakType = event => {
    if (chosenType[0] === longBreakTime) return;
    else {
      studyRef.current.classList.remove("bg-slate-800", "text-slate-200");
      shortBreakRef.current.classList.remove("bg-slate-800", "text-slate-200");
    }
    setChosenType([longBreakTime, setLongBreakTime]);
    addChosenType(event);
    setInputDisplay(longBreakTime);
    pauseBeforeSwitchType();

  }
  const setInputDisplay = (time) => {
    const [currentMin, currentSec] = convertTime(time);
    minuteRef.current.value = currentMin;
    secondRef.current.value = currentSec;
  }
  const onChangeTimeInputHandler = () => {
    const time = parseInt(minuteRef.current.value) * 60 + parseInt(secondRef.current.value);
    chosenType[1](time);
  }
  const [initialMin, initialSecond] = convertTime(chosenType[0]);
  return (
    <div className="bg-slate-200 h-40 w-[24.25rem] rounded-lg px-5 py-2 flex flex-col justify-between absolute top-24 right-5">
        <div className='flex justify-between items-center border-b-2 border-slate-700 pb-1'>
        <p className='font-medium'>Sounds</p>
        <div className='flex space-x-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
</svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:bg-slate-300 rounded-full" onClick={onRemoveHandler}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
        </div>

        </div>
        <div className='flex justify-between'>
            <button onClick={onClickStudyType} ref={studyRef} className='font-medium border border-slate-800 rounded-md py-1 px-2 bg-slate-800 text-slate-200 '> Work/Study</button>
            <button onClick={onClickShortBreakType} ref={shortBreakRef} className='font-medium border border-slate-800 rounded-md py-1 px-2 '>Short Break</button>
            <button onClick={onClickLongBreakType} ref={longBreakRef} className='font-medium border border-slate-800 rounded-md py-1 px-2 '>Long Break</button>
        </div>
        <div className=' flex items-center justify-between mb-2'>
            <div className='flex items-start'>
              <input onChange={onChangeTimeInputHandler} pattern="[0-9]{2}" ref={minuteRef} type="text" className="font-bold bg-transparent text-5xl w-16 overflow-hidden rounded-md outline-none" onInput={onMinuteInputHandler} defaultValue={initialMin}/>       
              <span className='text-5xl'>:</span>
              <input onChange={onChangeTimeInputHandler} ref={secondRef} type="text" className="font-bold bg-transparent text-5xl w-16 overflow-hidden rounded-md outline-none" onInput={onSecondInputHandler} defaultValue={initialSecond}/>       
            </div>
            <button ref={startButtonRef} onClick={pauseTimer} className='text-xl font-medium bg-slate-800 text-slate-200 py-2 px-6 rounded-lg hover:bg-slate-200 hover:text-slate-800 hover:border hover:border-slate-800'>Start</button>
        </div>

    </div>  
)
}

export default PomodoroTimer