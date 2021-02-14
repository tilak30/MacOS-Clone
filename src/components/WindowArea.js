import React from "react";

function TrafficLights({ setCurrentApp, setMax, max }) {
  return (
    <div className="flex flex-row absolute left-0 space-x-2 py-1 pl-2">
      <button
        className="w-4 h-4 rounded-full bg-red-500"
        onClick={() => setCurrentApp(null)}
      />
      <button
        className="w-4 h-4 rounded-full bg-yellow-500"
        onClick={() => setMax(false)}
      />
      <button
        className="w-4 h-4 rounded-full bg-green-500"
        onClick={() => setMax(!max)}
      />
    </div>
  );
}

export default function WindowArea({ currentApp, setCurrentApp }) {
  const [max, setMax] = React.useState(false);

  const size = max ? "w-5/6 h-5/6" : "h-3/4 w-7/12 mt-16 mb-24";

  if (currentApp == null) {
    return <div />;
  }
  return (
    <div
      className={`transition-hw mt-6 mb-8 mx-auto rounded-lg bg-white ${size}`}>
      <div className="relative h-6 text-center bg-gray-300 rounded-t-lg">
        <TrafficLights setCurrentApp={setCurrentApp} max={max} setMax={setMax} />
        <span className="font-semibold text-gray-700">{currentApp.title}</span>
      </div>
      <div className="abcd w-full overflow-y-hidden">{currentApp.content?.() ?? `I'm ${currentApp.title} app`}</div>
    </div>
  );
}
