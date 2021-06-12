import React, { useState } from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import { CgSleep } from "react-icons/cg";
import { RiShutDownLine, RiRestartLine } from "react-icons/ri";
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
            <div className="inline-block w-auto relative top-1/2 -mt-40">
              {/* Avatar */}
              <img
                className="rounded-full w-24 h-24 my-0 mx-auto"
                src="profileimg.png"
                alt="img"
              />
              <div className="font-semibold text-xl mt-2 ml-10 text-white">
                Macintosh
              </div>

              {/* Password Input */}
              <div className="mx-auto grid grid-cols-5 w-44 h-8 mt-4 rounded-md bg-gray-300 blur bg-opacity-50">
                <input
                  className="text-sm col-start-1 col-span-4 outline-none focus:outline-none px-2 "
                  type="password"
                  placeholder="Enter Password"
                  onClick={(e) => e.stopPropagation()}
                  onKeyPress={this.keyPress}
                />
                <div className="col-start-5 col-span-1 flex justify-center items-center">
                  <BsArrow90DegRight className="ml-1" color="white" />
                </div>
              </div>

              <div className="nightwind-prevent text-sm mt-2 ml-10 text-gray-200">
                Click to enter
              </div>
            </div>
          </div>
          <div className="nightwind-prevent-block text-sm fixed bottom-16 left-0 right-0 mx-auto flex flex-row space-x-4 w-max">
            <div className="flex flex-col items-center text-white w-24">
              <div className="h-10 w-10 bg-gray-700 rounded-full inline-flex justify-center items-center">
                <CgSleep size={40} />
              </div>
              <span>Sleep</span>
            </div>
            <div
              className="flex flex-col items-center text-white w-24"
              onClick={() => {
                setbgblur(false);
              }}
            >
              <div className="h-10 w-10 bg-gray-700 rounded-full inline-flex justify-center items-center">
                <RiRestartLine size={36} />
              </div>
              <span>Restart</span>
            </div>
            <div className="flex flex-col items-center text-white w-24">
              <div className="h-10 w-10 bg-gray-700 rounded-full inline-flex justify-center items-center">
                <RiShutDownLine size={36} />
              </div>
              <span>Shut Down</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
