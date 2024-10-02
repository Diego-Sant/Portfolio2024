"use client";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = `Teenho capacidade de trabalhar de forma eficaz tanto individualmente 
  quanto em equipes, com forte foco na resolução de problemas e na 
  melhoria contínua. Comprometido com a entrega de soluções tecnológicas 
  de alta qualidade que atendam às necessidades dos clientes e 
  aprimorem a eficiência. Experiência prática de cerca de 2 anos na 
  loja de informática da família. Ganhei valiosa experiência ao lidar 
  com clientes diariamente.`;
  
  useEffect(() => {
    let index = 0;

    const startTyping = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }, 1800);

    return () => clearInterval(startTyping);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">

            <span className="text-xl">Full-Stack Developer</span>

            <h1 className="text-[48px] xl:text-[60px] leading-[1.1] font-semibold mb-6">
              <span className="text-secondary">Diego Santana <br /></span>
              Sobre mim:
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-[15px] h-[16.5rem] lg:h-[15rem] overflow-hidden">
              {displayedText}
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">

              <Link target="_blank" rel="noopener noreferrer" href="/curriculo.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Baixar Currículo</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>

              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" 
                  iconStyles="w-10 h-10 border border-secondary rounded-full flex
                  justify-center items-center text-secondary text-base hover:bg-secondary
                  hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home

