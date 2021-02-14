import React, { useState } from "react";

import MenuBar from "./MenuBar";
import WindowArea from "./WindowArea";
import Dock from "./Dock";
import ControlCenterMenu from "./ControlCenterMenu"

export default function Desktop() {
   const [showControlCenter, setShowControlCenter] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: "url(wp.jpg)" }}>
      <MenuBar title={currentApp?.title ?? "Finder"} showControlCenter={showControlCenter} setShowControlCenter={setShowControlCenter} />
      {showControlCenter && <ControlCenterMenu />}
      <WindowArea currentApp={currentApp} setCurrentApp={setCurrentApp} />
      <Dock setCurrentApp={setCurrentApp} />
    </div>
  );
}
