import React, {useRef, useEffect} from "react";

export default function TextEditor() {
  const textareaRef = useRef(null)

  const contentValue = `
   _          _ _
  | |__   ___| | | ___
  | '_ \\ / _ | | |/ _ \\
  | | | |  __| | | (_) |
  |_| |_|\\___|_|_|\\___/
  
                      _     _
  __      _____  ____| | __| |
  \\ \\ /\\ / / _ \\| ___| |/ _  |
   \\ V  V | (_) | |  | | (_| |
    \\_/\\_/ \\___/|_|  |_|\\____| `

  useEffect(() => {
    textareaRef.current.textContent = contentValue
    textareaRef.current.focus()
  }, [textareaRef, contentValue])

  return (
    <div className="w-full h-full bg-grey">
      <textarea
        ref={textareaRef}
        type="text"
        className="h-full w-full font-mono"
      />
    </div>
  );
}