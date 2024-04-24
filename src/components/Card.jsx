/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Card({ data, refernce }) {
  return (
    <motion.div
      drag
      dragConstraints={refernce}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-samibold">{data.Desc}</p>
      <div className="footer absolute bottom-0 w-full    left-0">
        <div className="flex items-center justify-between mb-3 px-9 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <FaTimes size=".9em" color="#fff" />
            ) : (
              <FaArrowCircleDown size=".9em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex itmes-cneter justify-center`}
          >
            <h3 className="text-sm samibold"> {data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
