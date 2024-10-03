"use client";

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Número",
    description: "(+55) 21 99679-0499",
    link: "https://wa.me/5521996790499"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "diegossantana071@gmail.com",
    link: "mailto:diegossantana071@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Endereço",
    description: "Magé, RJ - Brasil",
    link: "https://www.google.com.br/maps/place/Piabet%C3%A1,+Mag%C3%A9+-+RJ,+25931-894/@-22.6060207,-43.182239,16z/data=!3m1!4b1!4m6!3m5!1s0x99a085a68f70e3:0x2d77251376de1757!8m2!3d-22.6062947!4d-43.172764!16s%2Fg%2F1233g0tt?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D"
  },
]


const Contact = () => {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity: 1, transition: 
      {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px]">
          
          <div className="flex flex-col gap-6 p-10 bg-[#1e1e1e] rounded-xl">
            
            <h3 className="text-4xl text-secondary">Vamos trabalhar juntos!</h3>
            <p className="text-white/60">Se você está em busca de um profissional apaixonado por tecnologia, entre em contato e vamos conversar sobre como posso agregar valor à sua equipe!</p>
          
            <div className="flex items-center mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">

                      <Link href={item.link} target="_blank" className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#121212] 
                      text-secondary rounded-md flex items-center justify-center hover:bg-secondary
                      hover:text-primary hover:transition-all duration-500">
                        <div className="text-[28px]">
                          {item.icon}
                        </div>
                      </Link>

                      <div>
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-lg">{item.description}</h3>
                      </div>

                    </li>
                  )
                })}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Contact
