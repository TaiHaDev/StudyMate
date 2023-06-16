import React, { useEffect, useState } from "react";
import nature from "../asset/image/nature.png";
import anime from "../asset/image/anime.png";
import city from "../asset/image/city.png";
import coffee from "../asset/image/coffee.png";
import animal from "../asset/image/animal.png";
import { getRequest } from "../api/Request";

const Background = ({onRemoveHandler, changeVideoUrl, resetVideoLoading}) => {
  const [displayLink, setDisplayLink] = useState({});
  const [selectedButton, setSelectedButton] = useState("animal");
  useEffect(() => {
    const updateDisplayLink = async () => {
      if (!displayLink[selectedButton]) {
        const backgroundList = await getRequest("background/" +  selectedButton);
        console.log(backgroundList);
        setDisplayLink(prev => {
          const copy = {...prev};
          copy[selectedButton] = backgroundList;
          return copy;
        })
      }
    }
    updateDisplayLink();
  }, [selectedButton])
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  const onChangeImageHandler = (link) => {
    changeVideoUrl(link);
    resetVideoLoading(true);
  }
  return (
    <div className="w-80 h-[calc(100vh-4vh)] m-[2vh] bg-slate-200 rounded-md py-2 px-4">
      <div className="flex justify-between items-center border-b border-slate-800 pb-1 font-medium text-lg">
        <p>Study Spaces</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={onRemoveHandler}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="flex flex-wrap gap-2">
      <div
          className={`relative p-2 ${
            selectedButton === "animal" ? "bg-slate-600" : "bg-slate-800 hover:bg-slate-600"
          } rounded-md border border-slate-600 mt-4`}
          onClick={() => handleButtonClick("animal")}
        >
          <img src={animal} className="w-8 h-8" alt="icon" />
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">Animal</p>
        </div>
        <div
          className={`relative p-2 ${
            selectedButton === "anime" ? "bg-slate-600" : "bg-slate-800 hover:bg-slate-600"
          } rounded-md border border-slate-600 mt-4`}
          onClick={() => handleButtonClick("anime")}
        >
          <img src={anime} className="w-8 h-8" alt="icon" />
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">Anime</p>
        </div>
        <div
          className={`relative p-2 ${
            selectedButton === "city" ? "bg-slate-600" : "bg-slate-800 hover:bg-slate-600"
          } rounded-md border border-slate-600 mt-4`}
          onClick={() => handleButtonClick("city")}
        >
          <img src={city} className="w-8 h-8" alt="icon" />
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">City</p>
        </div>
        <div
          className={`relative p-2 ${
            selectedButton === "coffee" ? "bg-slate-600" : "bg-slate-800 hover:bg-slate-600"
          } rounded-md border border-slate-600 mt-4`}
          onClick={() => handleButtonClick("coffee")}
        >
          <img src={coffee} className="w-8 h-8" alt="icon" />
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">Coffee</p>
        </div>

        <div
          className={`relative p-2 ${
            selectedButton === "nature" ? "bg-slate-600" : "bg-slate-800 hover:bg-slate-600"
          } rounded-md border border-slate-600 mt-4`}
          onClick={() => handleButtonClick("nature")}
        >
          <img src={nature} className="w-8 h-8" alt="icon" />
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">Nature</p>
        </div>
        
    
      </div>
      <div className="flex flex-wrap gap-2 mt-8">
      {displayLink[selectedButton] &&
displayLink[selectedButton].map((links, index) => (
    <div key={index} className="w-[5.65rem] h-[5.65rem] rounded-lg" onClick={() => onChangeImageHandler(links.url)}>
        <img src={links.pictureURL} alt="background preview" className="rounded-md"/>
    </div>
))
}
      </div>
    </div>
  );
};

export default Background;