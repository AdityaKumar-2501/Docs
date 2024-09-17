import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize: "0.9mb",
            close: false,
            tag : {
                isOpen: true,
                tagTitle : "Download Now",
                tagColor : "green"
            }
        },
        {
            desc : "This is a card that contains information about the background image that will be displayed.",
            fileSize: "0.9mb",
            close: true,
            tag : {
                isOpen: true,
                tagTitle : "View Now",
                tagColor : "blue"
            }
        },
        {
            desc : "Try to download the background image from the server and try again.",
            fileSize: "0.9mb",
            close: false,
            tag : {
                isOpen: false,
                tagTitle : "Download Now",
                tagColor : "green"
            }
        },{
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            fileSize: "0.9mb",
            close: true,
            tag : {
                isOpen: false,
                tagTitle : "Download Now",
                tagColor : "green"
            }
        }
    ];

    return <div ref={ref} className="fixed top-0 left-0 w-full h-screen z-[3] flex gap-10 flex-wrap px-5 py-10 ">
        {
            data.map((item,idx)=>(
                <Card data={item} reference={ref}/>
            ))
        }
    </div>;
}   

export default Foreground;
