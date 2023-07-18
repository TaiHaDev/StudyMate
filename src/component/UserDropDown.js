import React from "react";
import DarkMode from "./DarkMode";

const UserDropDown = () => {
  return (
    <div className="w-[11.5rem]  dark:bg-slate-950 bg-white opacity-100 dark:text-white text-black font-medium rounded-md  space-y-2 divide-y divide-slate-100/50 py-2 text-sm">
      <div className="flex space-x-2  px-4 items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p>Login / Signup</p>
      </div>

      <div className="flex space-x-2 px-4 pt-1 items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
        <p>Source code</p>
      </div>

      <div className="flex space-x-2 px-4 pt-1 items-center cursor-pointer">
        <DarkMode />
      </div>
      <div className="px-4 pt-1 cursor-pointer">
        <p>About us</p>
      </div>
      <div className="px-4 pt-1 cursor-pointer">
        <p>Term</p>
      </div>
      <div className="px-4 pt-1 cursor-pointer">
        <p>Policies</p>
      </div>
    </div>
  );
};

export default UserDropDown;
