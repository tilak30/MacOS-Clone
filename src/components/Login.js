import React, { useState } from "react";

const Style1 = {
  height: "100vh",
  width: "100vw",
  background: "url(abc.jpg) center/cover no-repeat"
};
const Style2 = {
  height: "100vh",
  width: "100vw",
  background: "url(ls.jpg) center/cover no-repeat"
};

export default function Login({ setlogon }) {
  const [bgblur, setbgblur] = useState(false);

  if (!bgblur) {
    return <div style={Style1} onClick={() => setbgblur(true)} />;
  } else {
    return (
      <div style={Style2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}
        >
          <div
            className="Box"
            onClick={() => {
              setlogon(true);
            }}
          >
            <div className="Image">
              <img
                src="profileimg.png"
                alt="img"
                style={{ width: 110, height: 112 }}
              />
            </div>
            <div className="font-semibold">&nbsp;Click to enter</div>
          </div>
        </div>
      </div>
    );
  }
}
