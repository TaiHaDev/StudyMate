import React, { useEffect, useState } from "react";
import nature from "../asset/image/nature.png";
import anime from "../asset/image/anime.png";
import city from "../asset/image/city.png";
import coffee from "../asset/image/coffee.png";
import animal from "../asset/image/animal.png";
import { getRequest } from "../api/Request";

const Background = ({onRemoveHandler, changeVideoUrl, resetVideoLoading, videoRef, videoUrl}) => {
  const [displayLink, setDisplayLink] = useState({});
  const [selectedButton, setSelectedButton] = useState("animal");
  const [volume, setVolume] = useState(0);
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
  const onChangeImageHandler = async (link) => {
    await changeVideoUrl(link);
    await resetVideoLoading(true);
    if (volume !== 0) {
      videoRef.current.muted = false;
      videoRef.current.volume = volume;
      setVolume(1);
    }
  }
  const handleVolumeChange = (event) => {
    videoRef.current.muted = false;
    const newVolume = event.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  }
  return (
    <div className="w-80 h-[calc(100vh-4vh)] m-[2vh] bg-slate-200 rounded-md py-2 px-4 flex flex-col justify-between">
      <div>
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
          <>
        <div key={index} className="w-[5.65rem] h-[5.65rem] rounded-lg" onClick={() => onChangeImageHandler(links)}>
          <img src={links.pictureURL} alt="background preview" className="rounded-md"/>
            </div>
            
          </>
        
        ))
        }
        </div>
      </div>

      <div className="w-full  rounded-md pt-3 pb-4 px-4 my-4 text-slate-800 flex flex-col space-y-2">
      <div className="flex justify-between items-center">
<p className="font-medium">{videoUrl.name}</p>
        
<div className="flex space-x-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 p-1.5 bg-slate-200 text-slate-800 rounded-lg ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 p-1.5 bg-slate-200 text-slate-800 rounded-lg ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>
</div>

      </div>
        
      <div className="flex justify-between items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
</svg>
<input
        type="range"
        min="0"
        max="1"
        step="0.1"
        defaultValue={volume}
        onChange={handleVolumeChange}
        className="appearance-none w-3/4 h-1 rounded-full bg-gray-700 focus:outline-none focus:bg-white"
      />
      </div>

      </div>
    </div>
  );
};

export default Background;