import React, { useRef,  } from 'react'

const Button = ({iconSrc, description, onClickHandler}) => {
  const descriptionRef = useRef();
  const onHoverHandler = event => {
    descriptionRef.current.classList.remove('invisible')
  }
  const onLeaveHandler = event => {
    descriptionRef.current.classList.add('invisible')
  }

  return (
    <div className='relative' onMouseEnter={onHoverHandler} onMouseLeave={onLeaveHandler} onClick={onClickHandler}>
      <div className=' h-12 w-12 p-2.5 bg-slate-100 rounded-lg hover:bg-slate-400 '>
        <img src={iconSrc} alt="icon" />
        
      </div>
      <p ref={descriptionRef} className='bg-slate-100 rounded-md py-0.5 px-1 text-xs font-medium absolute -bottom-6 left-1/2 -translate-x-1/2 invisible'>{description}</p>
    </div>

  )
}

export default Button