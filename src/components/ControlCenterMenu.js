import React from "react";
import * as Icon from "react-feather";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const SliderComponent = ({ icon, value, setValue }) => {
  return (
    <div className="slider flex flex-row w-full">
      <div className="h-8 p-2 bg-white rounded-l-full">{icon}</div>
      <Slider
        min={20}
        max={100}
        value={value}
        tooltip={false}
        orientation="horizontal"
        onChange={(v) => setValue(v)}
      />
    </div>
  );
};

export default function ControlCenterMenu({
  play,
  pause,
  playing,
  setplaying,
  bluetooth,
  setbluetooth,
  wifi,
  setwifi,
  brightness,
  setbrightness,
  volume,
  setVolume
}) {
  return (
    <div className="fixed top-8 right-2 z-50 p-2 grid grid-cols-4 grid-rows-5 gap-2 bg-white bg-opacity-25 blur rounded-2xl text-black shadow-2xl ccm">
      <div className="row-span-2 col-span-2 bg-white bg-opacity-50 rounded-xl p-2 flex flex-col justify-around">
        <div className="flex flex-row items-center space-x-2 pr-6">
          {wifi === false && (
            <Icon.Wifi
              color="black"
              size={36}
              className="bg-white bg-opacity-50 rounded-full p-2"
              onClick={() => {
                setwifi(true);
              }}
            />
          )}
          {wifi === true && (
            <Icon.Wifi
              color="white"
              size={36}
              className="bg-blue-500 rounded-full p-2"
              onClick={() => {
                setwifi(false);
              }}
            />
          )}
          <div className="flex flex-col">
            <span className="font-medium">Wifi</span>
            <span className="font-thin text-xs">Home</span>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2 pr-6">
          {bluetooth === false && (
            <Icon.Bluetooth
              color="black"
              size={36}
              className="bg-white bg-opacity-50 rounded-full p-2"
              onClick={() => {
                setbluetooth(true);
              }}
            />
          )}
          {bluetooth === true && (
            <Icon.Bluetooth
              color="white"
              size={36}
              className="bg-blue-500 rounded-full p-2"
              onClick={() => {
                setbluetooth(false);
              }}
            />
          )}
          <div className="flex flex-col">
            <span className="font-medium">Bluetooth</span>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2 pr-6">
          <Icon.Rss
            color="white"
            size={36}
            className="bg-blue-500 rounded-full p-2"
          />
          <div className="flex flex-col">
            <span className="font-medium">AirDrop</span>
            <span className="font-thin text-xs">Contacts Only</span>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-white bg-opacity-50 blur rounded-xl p-2 flex flex-row items-center space-x-2">
        <Icon.Moon
          size={36}
          fill
          className="bg-white bg-opacity-50 rounded-full p-2"
        />
        <div className="flex flex-col">
          <span className="font-medium">Do Not Disturb</span>
        </div>
      </div>
      <div className="bg-white bg-opacity-50 blur rounded-xl p-2 flex flex-col justify-center items-center text-center">
        <Icon.Sun />
        <span className="text-xs">Keyboard Brightness</span>
      </div>
      <div className="bg-white bg-opacity-50 blur rounded-xl p-2 flex flex-col justify-center items-center text-center">
        <Icon.Monitor />
        <span className="text-xs">Airplay Display</span>
      </div>
      <div className="col-span-4 bg-white bg-opacity-50 blur rounded-xl p-2 space-y-2 flex flex-col justify-around">
        <span className="font-medium">Display</span>
        <SliderComponent
          icon={<Icon.Sun size={16} className="text-gray-500" />}
          value={brightness}
          setValue={setbrightness}
        />
      </div>
      <div className="col-span-4 bg-white bg-opacity-50 blur rounded-xl p-2 space-y-2 flex flex-col justify-around">
        <span className="font-medium">Sound</span>
        <SliderComponent
          icon={<Icon.Volume2 size={16} className="text-gray-500" />}
          value={volume}
          setValue={setVolume}
        />
      </div>
      <div className="col-span-4 bg-white bg-opacity-50 blur rounded-xl p-2 pr-4 flex flex-row justify-between items-center space-x-4">
        <img
          src="https://i1.sndcdn.com/artworks-000596249969-hovmmz-t500x500.jpg"
          alt="cover art"
          className="w-16 rounded-lg"
        />
        <div className="flex flex-col flex-grow justify-start">
          <span className="font-medium">SAINt JHN</span>
          <span className="font-extralight">Roses (Imanbek Remix)</span>
        </div>
        {playing === false && (
          <Icon.Play
            fill
            onClick={() => {
              setplaying(true);
              play();
            }}
          />
        )}
        {playing === true && (
          <Icon.Pause
            fill
            onClick={() => {
              setplaying(false);
              pause();
            }}
          />
        )}
      </div>
    </div>
  );
}
