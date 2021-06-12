import * as React from "react";
import FaceTime from "./FaceTime";
import Terminal from "./Terminal";
import Safari from "./Safari";
import TextEditor from "./TextEditor";

export const apps = [
  {
    title: "Finder",
    icon: "finder"
  },
  {
    title: "Safari",
    icon: "safari",
    content: () => <Safari />
  },
  {
    title: "Terminal",
    icon: "terminal",
    content: () => <Terminal />
  },
  {
    title: "FaceTime",
    icon: "facetime",
    content: () => <FaceTime />
  },
  {
    title: "TextEdit",
    icon: "notes",
    content: () => <TextEditor />
  },
  {
    title: "Calculator",
    icon: "calculator",
    content: () => "App to be delivered soon"
  },
  {
    title: "AppStore",
    icon: "appstore",
    content: () => "App to be delivered soon"
  }
];

