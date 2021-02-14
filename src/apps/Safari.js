import React, { useState } from "react";

export default function Safari() {
  const [currentUrl, setCurrentUrl] = useState("https://www.worldometers.info/coronavirus/");

  return (
    <div className="w-full h-full">
      <div className="h-8 flex justify-center items-center bg-gray-300">
        <input
          type="text"
          value={currentUrl}
          onChange={(e) => setCurrentUrl(e.target.value)}
          className="h-6 w-4/5 p-2 rounded text-center font-semibold"
        />
      </div>
      <iframe title={"Safari clone browser"} src={currentUrl} frameborder="0" className="h-full w-full"/>
    </div>
  );
}
