"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity: 0}} 
        animate={{opacity: 0.9, transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}>
        <motion.div initial={{opacity: 0}} 
        animate={{opacity: 0.9, transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}}}
        className="w-[291px] h-[291px] xl:w-[491px] xl:h-[491px] top-1 mix-blend-lighten
            absolute">
            <Image src="/profileImage.svg" priority quality={100} fill
                alt="Imagem de perfil" className="object-contain" />
        </motion.div>

        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
            fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
            <motion.circle cx="253" cy="253" r="250" stroke="#03ebeb" strokeWidth="4"
                strokeLinecap="round" strokeLinejoin="round" 
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse"}} />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
