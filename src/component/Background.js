import React, { useContext, useEffect, useRef, useState } from "react";
import nature from "../asset/image/nature.png";
import anime from "../asset/image/anime.png";
import city from "../asset/image/city.png";
import coffee from "../asset/image/coffee.png";
import animal from "../asset/image/animal.png";
import favourite from "../asset/image/favourite.png";
import { deleteRequest, getRequest, postRequest } from "../api/Request";
import {MyContext} from "../context/MyContext";

const Background = ({
  onRemoveHandler,
  changeVideoUrl,
  resetVideoLoading,
  videoRef,
  videoUrl,
}) => {
  const [displayLink, setDisplayLink] = useState({});
  const [selectedButton, setSelectedButton] = useState("animal");
  const [volume, setVolume] = useState(0);
  const {credential, openModal} = useContext(MyContext);
  const favRef = useRef();
  const notFavRef = useRef();
  useEffect(() => {
    const updateDisplayLink = async () => {
      if (!displayLink[selectedButton]) {
        const backgroundList = await getRequest("background/" + selectedButton);
        if (selectedButton === "favourite") return;
        setDisplayLink((prev) => {
          const copy = { ...prev };
          copy[selectedButton] = backgroundList;
          return copy;
        });
      }
    };
    updateDisplayLink();
  }, [selectedButton]);

  useEffect(() => {
    const updateFavouriteBackground = async () => {
      if (credential.id) {
        let favouriteBackgroundList = await getRequest(
          "favouriteBackground/" + credential.id
        );
        favouriteBackgroundList = favouriteBackgroundList.map((fb) => ({
          ...fb.background,
        }));
        setDisplayLink((prev) => {
          const copy = { ...prev };
          copy["favourite"] = favouriteBackgroundList;
          return copy;
        });
      }
    };
    updateFavouriteBackground();
  }, []);

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
  };
  const handleVolumeChange = (event) => {
    videoRef.current.muted = false;
    const newVolume = event.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const onClickFavouriteBackgroundHandler = (event) => {
    if (credential) {
      const userId = credential.id;
      const backgroundId = videoUrl.id;
      console.log(credential);
      if (displayLink["favourite"].filter((bg) => bg.id === videoUrl.id).length > 0) {
        deleteRequest(`favouriteBackground/delete/${userId}/${backgroundId}`)
        setDisplayLink(prev => {
          const copy = {...prev};
          copy["favourite"] = copy["favourite"].filter((bg) => bg.id !== videoUrl.id);

          return copy;
        })

      } else {
        postRequest("favouriteBackground/add", {userId, backgroundId})
        setDisplayLink(prev => {
          const copy = {...prev};
          if (copy["favourite"].indexOf(videoUrl) < 0) {
            copy["favourite"].push(videoUrl);
          }
          return copy;
        })
      }
    } else {
      openModal();
    }
  }




  return (
    <div className="w-80 h-[calc(100vh-4vh)] m-[2vh] bg-slate-200 dark:bg-slate-800 dark:text-white rounded-md py-2 px-4 flex flex-col justify-between">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-wrap gap-2">
          <div
            className={`relative p-2 ${
              selectedButton === "animal"
                ? "bg-slate-600"
                : "bg-slate-800 hover:bg-slate-600"
            } rounded-md border border-slate-600 mt-4`}
            onClick={() => handleButtonClick("animal")}
          >
            <img src={animal} className="w-8 h-8" alt="icon" />
            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">
              Animal
            </p>
          </div>
          <div
            className={`relative p-2 ${
              selectedButton === "anime"
                ? "bg-slate-600"
                : "bg-slate-800 hover:bg-slate-600"
            } rounded-md border border-slate-600 mt-4`}
            onClick={() => handleButtonClick("anime")}
          >
            <img src={anime} className="w-8 h-8" alt="icon" />
            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">
              Anime
            </p>
          </div>
          <div
            className={`relative p-2 ${
              selectedButton === "city"
                ? "bg-slate-600"
                : "bg-slate-800 hover:bg-slate-600"
            } rounded-md border border-slate-600 mt-4`}
            onClick={() => handleButtonClick("city")}
          >
            <img src={city} className="w-8 h-8" alt="icon" />
            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">
              City
            </p>
          </div>
          <div
            className={`relative p-2 ${
              selectedButton === "coffee"
                ? "bg-slate-600"
                : "bg-slate-800 hover:bg-slate-600"
            } rounded-md border border-slate-600 mt-4`}
            onClick={() => handleButtonClick("coffee")}
          >
            <img src={coffee} className="w-8 h-8" alt="icon" />
            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">
              Coffee
            </p>
          </div>
          <div
            className={`relative p-2 ${
              selectedButton === "nature"
                ? "bg-slate-600"
                : "bg-slate-800 hover:bg-slate-600"
            } rounded-md border border-slate-600 mt-4`}
            onClick={() => handleButtonClick("nature")}
          >
            <img src={nature} className="w-8 h-8" alt="icon" />
            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">
              Nature
            </p>
          </div>
          <div
            className={`relative p-2 ${
              selectedButton === "favourite"
                ? "bg-slate-600"
                : "bg-slate-800 hover:bg-slate-600"
            } rounded-md border border-slate-600 mt-4`}
            onClick={() => handleButtonClick("favourite")}
          >
            <img src={favourite} className="w-8 h-8" alt="icon" />
            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-sm">
              Favourite
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-8">
          {displayLink[selectedButton] &&
            displayLink[selectedButton].map((links, index) => (
              <>
                <div
                  key={links.id}
                  className="w-[5.65rem] h-[5.65rem] rounded-lg"
                  onClick={() => onChangeImageHandler(links)}
                >
                  <img
                    src={links.pictureURL}
                    alt="background preview"
                    className="rounded-md"
                  />
                </div>
              </>
            ))}
        </div>
      </div>
      {/* favourite background */}

      <div className="w-full  rounded-md pt-3 pb-4 px-4 my-4 text-slate-800 dark:text-white flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <p className="font-medium">{videoUrl.name}</p>
          <div className="flex space-x-2 items-center">
            <div onClick={onClickFavouriteBackgroundHandler}>
              {displayLink["favourite"] &&
              displayLink["favourite"].filter((bg) => bg.id === videoUrl.id)
                .length > 0 ? (
                <svg
                ref={favRef}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              ) : (
                <svg
                ref={notFavRef}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 "
              
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              )}
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
            />
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
