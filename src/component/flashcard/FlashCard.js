import React, { useState } from "react";
import ChosenFlashCard from "./ChosenFlashCard";
import FlashCardSet from "./FlashCardSet";

const dummyFlashCardSet = [
  {
    id: 1,
    name: "Data Structures and Algorithms",
    cards: 30,
    description:
      "Basic data structures and algorithms, including arrays, heaps, trees, and graphs",
  },
  {
    id: 2,
    name: "Web Development",
    cards: 20,
    description:
      "Front-end and back-end web development concepts, technologies, and frameworks",
  },
  {
    id: 3,
    name: "Machine Learning",
    cards: 50,
    description:
      "Fundamental concepts and algorithms in machine learning, such as regression, classification, and clustering",
  },
  {
    id: 4,
    name: "Databases",
    cards: 25,
    description:
      "Relational and non-relational databases, SQL, indexing, and query optimization",
  },
  {
    id: 5,
    name: "Operating Systems",
    cards: 35,
    description:
      "Principles of operating systems, process management, memory management, and file systems",
  },
];
const FlashCard = () => {
  const [chosenSetId, setChosenSetId] = useState();

  return (
    <div className="w-[40rem] h-[30rem]  2xl:w-[60rem] xl:h-[40rem] rounded-md py-6 px-12 bg-slate-800 text-white">
      <div className="flex justify-between items-center border-b-2 border-slate-800 pb-1">
        <p className="font-medium">Flashcards</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 hover:bg-slate-500 hover:rounded-full p-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      {!chosenSetId ? (
        <div className="mt-4 flex flex-wrap gap-3 items-center 2xl:gap-5">
          {dummyFlashCardSet.map((set) => (
            <FlashCardSet set={set} />
          ))}
        </div>
      ) : (
        <div className="w-full h-[90%] bg-slate-800 ">
          <ChosenFlashCard />
        </div>
      )}
    </div>
  );
};

export default FlashCard;
