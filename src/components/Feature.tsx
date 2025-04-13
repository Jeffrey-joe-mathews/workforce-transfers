'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const Feature = ({ id, title, description } : { id:number, title?:string, description?:string }) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const updateMousePosition = (e:MouseEvent) => {
      if (!border.current) return;
      const rect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - rect.x);
      offsetY.set(e.y - rect.y);
    }
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  },[offsetX, offsetY])

    return (
        <div key={id} className="relative max-w-[450px] border-1 border-black/60 p-5 text-center items-center rounded-xl flex flex-row sm:flex-col justify-center gap-4 hover:bg-gray-200 transition-colors duration-500 ">
          <motion.div ref={border} className="absolute inset-0 border-5 border-yellow-400 rounded-xl" style={{WebkitMaskImage:maskImage, maskImage:maskImage}} />
          <div className="flex justify-center items-center h-20 w-20 mb-1 flex-[1]" >
            <Image src='/menu.svg' alt="img" width={50} height={50} className="bg-grey object-contain" />
          </div>
          <div className="flex flex-col flex-[5] justify-center items-center p-1" >
            <h4 className="font-bold text-xl">{title}</h4>
            <p className="text-black/60">{description}</p>
          </div>
        </div>
    );
}