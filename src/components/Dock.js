import React from "react";

import { apps } from "../apps/AppStore";

export default function Dock({ setCurrentApp }) {
  const [availableApps] = React.useState(apps);

  return (
    <div className="dock w-full pb-2 fixed bottom-0">
      <ul className="osx-dock dock-item mx-auto w-max p-1 space-x-2 flex flex-row justify-center justify-between bg-white bg-opacity-25 blur rounded-2xl shadow-2xl">
        {availableApps.map((app) => (
          <li
            key={app.title}
            onClick={() => app.title !== "Finder" && setCurrentApp(app)}
          >
            {" "}
            <span className="rounded-md">{app.title}</span>
            <img
              className="w-14"
              src={`icons/${app.icon}.png`}
              alt={app.title}
              title={app.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}