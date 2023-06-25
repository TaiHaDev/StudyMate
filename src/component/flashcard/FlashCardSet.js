import React from 'react'

const FlashCardSet = ({set}) => {
  return (
    <div className="flip-card w-[31.6%] h-40 bg-slate-800 text-white p-2 rounded-lg">
      <div className="flip-card-inner  ">
        <div className="flip-card-front flex flex-col justify-center">
          <p className='font-medium'>{set.name}</p>
          <p>{set.cards} cards</p>
        </div>
        <div className="flip-card-back flex flex-col justify-center">
          {set.description}
        </div>
      </div>
    </div>
  )
}

export default FlashCardSet