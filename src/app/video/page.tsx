'use client'

import React, { useRef as UseRef, useState as UseState } from 'react'
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import War from "../../../public/testImage/ukrainewar.webp";

export default function page() {
  type vid = {id: number, url: string, title: string}
  
  
  // Set hover play video
  const [isPlaying, setIsPlaying] = UseState<{[key: number]:boolean}>({});
  const videoRef = UseRef<{[key: number]: HTMLVideoElement | null}>({})

  const handleMouseEnter = (id:number) => {
    setIsPlaying((prevState)=> ({
      ...prevState,
      [id]: true
    }));
    if(videoRef.current[id]) {
      videoRef.current[id]?.play();
    }
  }
  
  const handleMouseLeave = (id:number) => {
    setIsPlaying((prevState)=> ({
      ...prevState,
      [id]: false
    }))
    if(videoRef.current[id]){
      videoRef.current[id]?.pause();
      videoRef.current[id]!.currentTime = 0;
    }
  }

  const vid: vid[] = [
    {id: 1, url: '/videos/myvid.mp4', title: 'How I Create Snippets in Visual Studio Code'}, 
    {id: 2, url: '/videos/myvid2.mp4', title: 'Build A Web3 Website In Less Than 10 Minutes'}, 
    {id: 3, url: '/videos/myvid3.mp4', title: 'Problem Solving Techniques - For Programming Problems & Interviews'}, 
  ]
  return (
    <div>
      <div className="px-4 md:px-8 mx-auto flex flex-col max-w-7xl">
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 mt-8">
          {vid.map((i)=>(<Box className="max-w-[380px] w-full" key={i.id}>
            <Box maxWidth={380} h={210} onMouseEnter={()=>handleMouseEnter(i.id)} onMouseLeave={()=>handleMouseLeave(i.id)}>
            <video 
            width={380} 
            height={210} 
            autoPlay={isPlaying[i.id]}
            loop muted
            className="rounded-xl cursor-pointer"
            ref={(videoElement) => {
              if (videoElement) {
                videoRef.current[i.id] = videoElement;
              }
            }}
            >
                <source src={i.url}/>
              </video>
            </Box>
            <Box mt={2} mb={2}>
              <Box>
                <Box className="center-row-div justify-start">
                  {/* avatar */}
                  <Image
                    src={War}
                    alt=""
                    width={16}
                    height={16}
                    className="bg-cover bg-center rounded-full w-8 h-8"
                  />
                  <h6>
                    {i.title}
                  </h6>
                </Box>
              </Box>
            </Box>
            <Box display="flex" gap={4} fontSize={14}>
              <p>techCode</p>
              <p>•</p>
              <p>8 mins ago</p>
            </Box>
          </Box>))}

        </div>
      </div>
    </div>
  )
}
