"use client";

import { motion } from "framer-motion";

import {FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaGitAlt,
FaFigma, FaNodeJs, FaBootstrap, FaJava, FaPython, FaAngular} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiTypescript, SiPlanetscale,
SiPrisma, SiMysql, SiPostgresql, SiMongodb, SiSupabase,
SiMicrosoftpowerpoint, SiPowerbi, SiAdobephotoshop, SiCanva} from "react-icons/si";

import {RiFirebaseFill, RiFileExcel2Fill, RiFileWord2Fill} from "react-icons/ri";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "Sobre mim",
  description: "Sou apaixonado por tecnologia e inovação, sempre buscando aprender novas habilidades e acompanhar as tendências da minha área. No meu tempo livre, gosto de explorar projetos pessoais e participar de comunidades online.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Diego Santana"
    },
    {
      fieldName: "Número",
      fieldValue: "(+55) 21 99679-0499"
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro"
    },
    {
      fieldName: "Estado civil",
      fieldValue: "Solteiro"
    },
    {
      fieldName: "Sexo",
      fieldValue: "Masculino"
    },
    {
      fieldName: "Email",
      fieldValue: "diegossantana071@gmail.com"
    },
    {
      fieldName: "Endereço",
      fieldValue: "Magé, RJ - Brasil"
    },
    {
      fieldName: "Carteira",
      fieldValue: "Categoria B"
    },
  ]
}

const education = {
  title: "Educação",
  description: "Minha trajetória desde o Ensino Fundamental até a Pós-Graduação.",
  items: [
    {
      institution: "Centro Educacional Millenium de Mauá",
      degree: "Ensino Fundamental",
      duration: "2009 - 2011"
    },
    {
      institution: "CEFI - Centro de Educação e Formação Integrado",
      degree: "Ensino Fundamental",
      duration: "2012 - 2017"
    },
    {
      institution: "Curso de Idiomas CNA(Cultural Norte Americano)",
      degree: "Curso de Inglês",
      duration: "2015 - 2020"
    },
    {
      institution: "Colégio Estadual Dom Pedro II(Cenip)",
      degree: "Ensino Médio",
      duration: "2018 - 2020"
    },
    {
      institution: "Universidade do Grande Rio - UNIGRANRIO",
      degree: "Faculdade - Análise e Desenvolvimento de Sistemas",
      duration: "2021 - 2023"
    },
    {
      institution: "Pontifícia Universidade Católica do Rio de Janeiro - PUC-Rio",
      degree: "Pós-Graduação - Desenvolvimento Full-Stack",
      duration: "2024 - Presente"
    },
    {
      institution: "Cambridge English in ESOL Internacional",
      degree: "Exame Final - B2",
      duration: "2021"
    },
  ]
}

const skills = {
  title: "Competências",
  description: "Minhas habilidades que adquiri durante 2 anos e meio de faculdade, 1 ano de pós-graduação e diversos cursos e projetos pessoais.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiSupabase />,
      name: "Supabase",
    },
    {
      icon: <SiPlanetscale />,
      name: "PlanetScale",
    },
    {
      icon: <RiFirebaseFill />,
      name: "Firebase",
    },
    {
      icon: <RiFileExcel2Fill />,
      name: "Excel",
    },
    {
      icon: <RiFileWord2Fill />,
      name: "Word",
    },
    {
      icon: <SiMicrosoftpowerpoint />,
      name: "PowerPoint",
    },
    {
      icon: <SiPowerbi />,
      name: "Power BI",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Photoshop",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaWordpress />,
      name: "WordPress",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
  ]
}

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1, transition: 
      {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      
      <div className="container mx-auto">
        <Tabs defaultValue="sobremim" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="sobremim">Sobre mim</TabsTrigger>
            <TabsTrigger value="educacao">Educação</TabsTrigger>
            <TabsTrigger value="competencias">Competências</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            <TabsContent value="sobremim" className="w-full h-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-6">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto
                  xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center
                        xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="educacao" className="w-full h-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-6">
                  {education.description}
                </p>
              </div>

              <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      const institutionClass = item.institution.length > 40 ? "text-lg" : "text-xl";

                      return (
                        <li key={index} className="bg-[#1E1E1E] h-[300px] py-6 px-10 
                        rounded-xl flex flex-col justify-center items-center lg:items-start
                        gap-1">

                          <span className="text-secondary">
                            {item.duration}
                          </span>
                          <h3 className={`max-w-[260px] min-h-[85px] text-center 
                            lg:text-left mb-2 ${institutionClass}`}>
                            {item.institution}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="min-w-[6px] min-h-[6px] rounded-full bg-secondary"></span>
                            <p className="text-white/60 text-sm">{item.degree}</p>
                          </div>

                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
            </TabsContent>

            <TabsContent value="competencias" className="w-full h-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-6">{skills.description}</p>
              </div>

              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[15px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#1E1E1E]
                              rounded-xl flex justify-center items-center group mb-6">
                              <div className="flex flex-col items-center justify-center 
                                gap-y-3">
                                
                                <div className="text-6xl group-hover:text-secondary
                                  transition-all duration-300">
                                  {skill.icon}
                                </div>
                                <p className="group-hover:text-secondary 
                                  transition-all duration-300">
                                  {skill.name}
                                </p>

                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume
