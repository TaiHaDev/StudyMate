import React, { useRef,  } from 'react'

const Button = ({iconSrc, description, onClickHandler, isTop}) => {
  const descriptionRef = useRef();
  const onHoverHandler = event => {
    descriptionRef.current.classList.remove('invisible')
  }
  const onLeaveHandler = event => {
    descriptionRef.current.classList.add('invisible')
  }
  const positionClass = isTop ? 'bg-slate-100 dark:bg-black dark:text-white rounded-md py-0.5 px-1 text-xs font-medium absolute -top-6 left-1/2 -translate-x-1/2 invisible' : 'bg-slate-100 rounded-md dark:bg-black dark:text-white py-0.5 px-1 text-xs font-medium absolute -bottom-6 left-1/2 -translate-x-1/2 invisible' 

  return (
    <div className='relative'   onMouseEnter={onHoverHandler} onMouseLeave={onLeaveHandler} onClick={onClickHandler}>
      <div className=' h-12 w-12 p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-400 '>
        <img src={iconSrc} alt="icon" />
      </div>
      <p ref={descriptionRef} className={positionClass}>{description}</p>
    </div>

  )
}

export default Button