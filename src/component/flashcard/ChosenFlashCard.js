import React, { useState } from "react";
const dummyFlashCards = [
  {
    id: 1,
    front: "what is binary tree",
    back: "a tree like structure consists of nodes that only have left and right children",
  },
  {
    id: 2,
    front: "what is recursion",
    back: "a process in which a function calls itself as a subroutine",
  },
  {
    id: 3,
    front: "what is a linked list",
    back: "a linear data structure where elements are linked using pointers",
  },
  {
    id: 4,
    front: "what is a stack",
    back: "a data structure that follows the Last-In-First-Out (LIFO) principle",
  },
  {
    id: 5,
    front: "what is a queue",
    back: "a data structure that follows the First-In-First-Out (FIFO) principle",
  },
];
const ChosenFlashCard = () => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleGoNext = () => {
    setIndex((prev) => prev + 1);
  };
  const handleGoBack = () => {
    setIndex((prev) => prev - 1);
  };
  return (
    <>
      <div
        className={`card ${isFlipped ? "flipped" : ""} w-full h-full `}
        onClick={handleCardClick}
      >
        <div className="card-inner bg-white text-black rounded-lg text-center font-medium text-xl">
          <div className="card-front">{dummyFlashCards[index].front}</div>
          <div className="card-back">{dummyFlashCards[index].back}</div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-12">
        <button disabled={index === 0} className="disabled:opacity-50" onClick={handleGoBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 rounded-full bg-white text-slate-800 p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button disabled={index === dummyFlashCards.length - 1} className="disabled:opacity-50" onClick={handleGoNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 rounded-full bg-white text-slate-800 p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ChosenFlashCard;
