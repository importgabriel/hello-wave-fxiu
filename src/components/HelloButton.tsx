"use client";

import { useState } from "react";

export default function HelloButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      {clicked ? "Hello there! 👋" : "Click me to say hello!"}
    </button>
  );
}