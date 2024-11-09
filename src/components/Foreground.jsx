import React, { useRef } from 'react'
import Card from './Card'
import Toastify from './Toastify'
import { toast } from "react-toastify";

const Foreground = () => {

  const ref = useRef(null)

  const data = [
    {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize: ".9mb",
    close: false,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize: ".9mb",
    close: false,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize: ".9mb",
    close: true,
    tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
    
  return (
    <>
        <div ref={ref} className='flex flex-wrap gap-5 flex-shrink-0 fixed top-0 left-0 z-[3] w-full h-full p-5'>
            {data.map((item,index)=>(
              <Card data={item} reference = {ref}/>
            ))}
            <Toastify />
            
        </div>
    </>
  )
}

export default Foreground