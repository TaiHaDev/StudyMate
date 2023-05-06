import video from './asset/video/library_study1.mp4'
import chatBotIcon from './asset/image/chatbot.png'
import Button from './component/Button';
import timerIcon from './asset/image/chronometer.png'
import expandIcon from './asset/image/expand.png'
import flashCardIcon from './asset/image/flash-cards.png'
import todolistIcon from './asset/image/to-do-list.png'
import reportIcon from './asset/image/report.png'
import backgroundIcon from './asset/image/background.png'
import quoteIcon from './asset/image/quote.png'
import PomodoroTimer from './component/PomodoroTimer';
import TodoList from './component/TodoList';
import { useRef, useState } from 'react';
const expandOnClickHandler = event => {

  const root = document.getElementById('root');
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    root.requestFullscreen();
  }
};

function App() {
  const timerRef = useRef();
  const todoRef = useRef();
  const {isTimerClicked, setIsTimerClicked} = useState(true);
  const onToggleHandler = ref => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
    } else {
      ref.current.classList.add("hidden");
    }
  }
  return (
    <div className="App">
      <video autoPlay loop muted className='absolute -z-10 top-0 left-0 h-full w-full object-cover'>
        <source src={video}/>
        This video is no longer exist
      </video>
      <div className='absolute bottom-10 right-5'>
       <Button iconSrc={chatBotIcon} description="Chatbot"/>
      </div>
      <div className='absolute top-5 right-5 flex space-x-6'>
        <Button iconSrc={flashCardIcon} description="Flashcard"/>
        <Button iconSrc={todolistIcon} description="Todo&nbsp;Lists" onClickHandler={() => onToggleHandler(todoRef)}/>
        <Button  iconSrc={timerIcon} description="Timer" onClickHandler={() => onToggleHandler(timerRef)}/>
        <Button iconSrc={expandIcon} description="Expand" onClickHandler={expandOnClickHandler}/>
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 left-6 flex flex-col space-y-7'>
        <Button iconSrc={backgroundIcon} description="Background"/>
        <Button iconSrc={reportIcon} description="Analysis"/>
        <Button iconSrc={quoteIcon} description="Daily&nbsp;Quotes"/>
      </div>
      <div ref={timerRef}>
        <PomodoroTimer onRemoveHandler={() => onToggleHandler(timerRef)}/>
      </div>
      <div ref={todoRef}>
        <TodoList onRemoveHandler={() => onToggleHandler(todoRef)}/>
      </div>
    </div>
  );
}

export default App;
