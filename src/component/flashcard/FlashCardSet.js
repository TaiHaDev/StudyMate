import React from 'react'

const FlashCardSet = ({set}) => {
  return (
    
    <div className="flip-card-set w-[31.6%] h-40 bg-slate-200 text-black p-2 rounded-lg">
      <div className="flip-card-inner-set">
        <div className="flip-card-front-set flex flex-col justify-center items-center">
          <p className='font-medium'>{set.name}</p>
          <p>{set.cards} cards</p>
        </div>
        <div className="flip-card-back-set flex flex-col justify-center items-center text-sm">
          {set.description}
        </div>
      </div>
    </div>
  )
}

export default FlashCardSet