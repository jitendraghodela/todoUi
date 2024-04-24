// eslint-disable-next-line no-unused-vars
import React from "react";

function Background() {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        <div className=" absolute top-[5%] w-full text-2xl py-10 flex justify-center text-zinc-600 font-samibold ">
          Todos
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]  text-[13vw] leading-none tracking-tighter font-samibold text-zinc-900">
          Todo App.
        </h1>
      </div>
    </>
  );
}

export default Background;
