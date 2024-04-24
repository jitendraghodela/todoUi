/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars

import Card from "./Card";

function Forground() {
  const ref = useRef(null);
  const data = [
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Dawnload now", tagColor: "blue" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Dawnload now", tagColor: "green" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Dawnload now", tagColor: "green" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Dawnload now", tagColor: "blue" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Dawnload now", tagColor: "green" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Dawnload now", tagColor: "green" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Dawnload now", tagColor: "blue" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Dawnload now", tagColor: "green" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Dawnload now", tagColor: "green" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Dawnload now", tagColor: "blue" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Dawnload now", tagColor: "blue" },
    },
    {
      Desc: "lorem golo ipsum dolor sit amet",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Dawnload now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 flex gap-10 flex-wrap  w-full h-full bg-sky-800/50 p-5"
    >
      {data.map((item, index) => (
        <Card data={item} refernce={ref} />
      ))}
    </div>
  );
}

export default Forground;
