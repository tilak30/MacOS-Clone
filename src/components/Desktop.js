import React, { useState } from "react";

import MenuBar from "./MenuBar";
import WindowArea from "./WindowArea";
import Dock from "./Dock";
import ControlCenterMenu from "./ControlCenterMenu";
import useSound from "use-sound";
const soundUrl = "Roses.mp3";

export default function Desktop() {
  const [showControlCenter, setShowControlCenter] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);
  const [playing, setplaying] = React.useState(false);
  const [bluetooth, setbluetooth] = React.useState(true);
  const [wifi, setwifi] = React.useState(true);
  const [volume, setVolume] = React.useState(75);
  const [play, { pause }] = useSound(soundUrl, { volume: volume / 100 });
  const [brightness, setbrightness] = useState(100);
  return (
    <div
      className="w-screen h-screen overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: "url(londonview.jpg)",
        filter: `brightness( ${brightness}% )`
      }}
    >
      <MenuBar
        title={currentApp?.title ?? "Finder"}
        showControlCenter={showControlCenter}
        setShowControlCenter={setShowControlCenter}
      />
      {showControlCenter && (
        <ControlCenterMenu
          play={play}
          pause={pause}
          playing={playing}
          setplaying={setplaying}
          bluetooth={bluetooth}
          setbluetooth={setbluetooth}
          wifi={wifi}
          setwifi={setwifi}
          brightness={brightness}
          setbrightness={setbrightness}
          volume={volume}
          setVolume={setVolume}
        />
      )}
      <WindowArea currentApp={currentApp} setCurrentApp={setCurrentApp} />
      <Dock setCurrentApp={setCurrentApp} />
    </div>
  );
}
