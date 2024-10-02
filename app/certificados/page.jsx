"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const certificates = [
  {
    num: '01',
    title: "Front End & UX/UI Design",
    description: "Introdução ao desenvolvimento de interfaces e design focado na experiência do usuário. Carga horária: 140h.",
    href: "https://www.origamid.com/certificate/1caf1fcc"
  },
  {
    num: '02',
    title: "Web Design Completo",
    description: "Conceitos de design, estrutura e responsividade para criação de sites profissionais. Carga horária: 44h.",
    href: "https://www.origamid.com/certificate/35d2d48e"
  },
  {
    num: '03',
    title: "CSS Grid Layout",
    description: "Técnicas avançadas de layout utilizando CSS Grid para criação de layouts dinâmicos. Carga horária: 10h.",
    href: "https://www.origamid.com/certificate/44c9c502"
  },
  {
    num: '04',
    title: "WordPress REST API Dogs",
    description: "Integração de APIs REST no WordPress, com foco em gerenciamento de dados. Carga horária: 4h.",
    href: "https://www.origamid.com/certificate/b8cf025c"
  },
  {
    num: '05',
    title: "CSS Avançado Posicionamento",
    description: "Estudo aprofundado de técnicas de posicionamento com CSS para layouts precisos. Carga horária: 18h.",
    href: "https://www.origamid.com/certificate/bb058054"
  },
  {
    num: '06',
    title: "CSS Flexbox",
    description: "Domínio do layout flexível para construção de interfaces responsivas. Carga horária: 6h.",
    href: "https://www.origamid.com/certificate/c63f6b19"
  },
  {
    num: '07',
    title: "React Completo",
    description: "Aprendizado abrangente do framework React para desenvolvimento de aplicações web interativas. Carga horária: 36h.",
    href: "https://www.origamid.com/certificate/e00dbe92"
  },
  {
    num: '08',
    title: "Bootstrap 4",
    description: "Criação de layouts responsivos e componentes com Bootstrap 4 para desenvolvimento ágil. Carga horária: 10h.",
    href: "https://www.origamid.com/certificate/ebb0a02f"
  },
  {
    num: '09',
    title: "CSS com SASS",
    description: "Utilização de SASS para otimização e organização de estilos em projetos CSS. Carga horária: 12h.",
    href: "https://www.origamid.com/certificate/f363b80f"
  },
  {
    num: '10',
    title: "Curso Excel do Básico ao Avançado",
    description: "Domínio total do Excel, desde fórmulas básicas até funções avançadas e análise de dados. Carga horária: 28h.",
    href: "https://www.udemy.com/certificate/UC-f4742800-47e9-49d5-a6a8-29e8ac6d4ffa/"
  },
  {
    num: '11',
    title: "Java Completo Programação Orientada a Objetos",
    description: "Aprendizado completo de Java com foco em programação orientada a objetos e desenvolvimento de aplicações. Carga horária: 54h.",
    href: "https://www.udemy.com/certificate/UC-bbb3e0bd-74b9-4ffe-9c0f-cf55a5db1c62/"
  },
  {
    num: '12',
    title: "Curso de Programação JavaScript",
    description: "Fundamentos e técnicas de programação em JavaScript para desenvolvimento web interativo. Carga horária: 8h.",
    href: "https://www.udemy.com/certificate/UC-5cde8d5a-c153-4ce1-9ea5-c5f0c704170d/"
  },
  {
    num: '13',
    title: "React do Zero a Maestria",
    description: "Aprendizado completo do React, desde os conceitos básicos até a criação de aplicações complexas. Carga horária: 30h.",
    href: "https://www.udemy.com/certificate/UC-95e3bff4-920b-4220-ac32-ab85a6e69312/"
  },
  {
    num: '14',
    title: "Next.js e React - Curso Completo",
    description: "Domínio do Next.js junto ao React para desenvolvimento de aplicações web otimizadas e escaláveis. Carga horária: 28h.",
    href: "https://www.udemy.com/certificate/UC-71fdd649-57e4-4a5b-8bb0-3d7727c698cb/"
  },
]

const Certificate = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto mb-10 mt-6">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {
          delay: 2.4, duration: 0.4, ease: "easeIn"
        }}} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {certificates.map((certificate, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-between gap-6 group min-h-[230px]">
                <div className="w-full flex justify-between items-center">

                  <div className="text-5xl font-extrabold text-outline text-transparent 
                    group-hover:text-outline-hover transition-all duration-500">
                    {certificate.num}
                  </div>
                  <Link href={certificate.href} target="_blank" className="w-[70px] h-[70px]
                    rounded-full bg-white group-hover:bg-secondary transition-all
                    duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>

                </div>

                <h2 className="text-[36px] font-bold leading-none group-hover:text-secondary
                  transition-all duration-500">
                  {certificate.title}
                </h2>

                <p className="text-white/70">
                  {certificate.description}
                </p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificate
