import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  const notify = () => toast("Download Started!");
  return (
    <motion.div
      drag
      dragConstraints={reference}
      dragElastic={1}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 13 }}
      whileDrag={{ scale: 1.05 }}
      className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full h-15 left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="bg-zinc-600 w-7 h-7 rounded-full flex items-center justify-center">
            {data.close ? <IoIosClose /> : <LuDownload size=".7em" /> }
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag flex items-center justify-center w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } `}
          >
            <button onClick={notify} className="text-sm ">
              {data.tag.tagTitle}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
