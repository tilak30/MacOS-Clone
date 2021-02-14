import React from "react";

import { apps } from "../apps/AppStore";

export default function Dock({ setCurrentApp }) {
  const [availableApps] = React.useState(apps);

  return (
    <div className="w-full pb-2 fixed bottom-0">
      <ul className="mx-auto w-max p-2 space-x-2 flex flex-row justify-center justify-between bg-white bg-opacity-25 blur rounded-2xl shadow-2xl">
        {availableApps.map((app) => (
          <li key={app.title} onClick={() => app.title !== "Finder" && setCurrentApp(app)}>
            <img
              className="w-12"
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
