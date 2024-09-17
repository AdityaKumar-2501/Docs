import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
    
function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragTransition={{bounceDamping: 10, bounceStiffness: 500}} className=" flex-shrink-0 relative w-60 h-80 rounded-[40px] bg-zinc-900/90 px-8 py-10 text-white  overflow-hidden">
            <FaRegFileAlt />
            <p className="mt-5 text-sm leading-tight ">{data.desc}</p>
            <div className=" absolute w-full left-0 bottom-0">
                <div className="flex items-center justify-between px-8  py-3 my-2">
                    <h5>{data.fileSize}</h5>
                    <span className="w-8 h-8 flex justify-center items-center rounded-full bg-zinc-700 text-white cursor-pointer">
                        {data.close ? (
                            <IoClose size="0.8em" />
                        ) : (
                            <MdOutlineFileDownload size="0.8em" />
                        )}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className= {` bg-${data.tag.tagColor}-500 w-full p-3 flex justify-center items-center cursor-pointer `}>
                        <h3>{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default Card;
