"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import SliderButtons from "@/components/SliderButtons";

const projects = [
  {
    category: "Full-Stack",
    title: "GarageLink",
    description: "Um site de compra e venda de carros que facilita a comunicação direta entre vendedores e compradores. Inspirado em plataformas como OLX e Webmotors, o projeto não realiza transações, mas permite a interação entre usuários em um nível global.",
    stack: [
      {name: "React"}, {name: "JavaScript"}, {name: "TailwindCSS"}, 
      {name: "Photoshop"}, {name: "MongoDB"}, {name: "Prisma"}, {name: "Node JS"},
      {name: "Docker"}, {name: "Git"}
    ],
    image: "/projects/GarageLink.png",
    live: "https://garage-link.vercel.app/",
    github: "https://github.com/Diego-Sant/MVP-GarageLink-DesenvolvimentoBackEnd"
  },
  {
    category: "Full-Stack",
    title: "Gameverse",
    description: "Uma plataforma dedicada a fornecer informações detalhadas sobre jogos, incluindo lançamentos recentes e futuros. Os jogos são organizados por categorias, desde modos de jogo até plataformas.",
    stack: [
      {name: "React"}, {name: "TypeScript"}, {name: "NextJS"}, {name: "TailwindCSS"},
      {name: "Photoshop"}, {name: "MongoDB"}, {name: "Prisma"}, {name: "Git"}
    ],
    image: "/projects/Gameverse.png",
    live: "https://gameverse-self.vercel.app/",
    github: "https://github.com/Diego-Sant/Gameverse"
  },
  {
    category: "Full-Stack",
    title: "GameSavings",
    description: "MVP desenvolvido para a pós-graduação, focado em um site informativo que ajuda usuários a encontrar os melhores preços de jogos. A plataforma compara diferentes lojas e oferece as melhores ofertas disponíveis.",
    stack: [
      {name: "React"}, {name: "TypeScript"}, {name: "NextJS"}, {name: "TailwindCSS"},
      {name: "Photoshop"}, {name: "MongoDB"}, {name: "Prisma"}, {name: "Git"},
      {name: "Figma"}
    ],
    image: "/projects/GameSavings.png",
    live: "https://gamesavings.vercel.app/",
    github: "https://github.com/Diego-Sant/MVP-Front-end-Avancado-GameSavings"
  },
  {
    category: "Front-End",
    title: "Meu Portfólio",
    description: "Portfólio pessoal projetado para exibir meus projetos e habilidades em desenvolvimento. Criado com React e Next.js, apresenta uma interface limpa e responsiva.",
    stack: [
      {name: "React"}, {name: "NextJS"}, {name: "TailwindCSS"}, {name: "Git"},
      {name: "Framer Motion"}, {name: "Shadcn UI"}
    ],
    image: "/projects/MeuPortfolio.png",
    live: "https://diegosantana-portfolio.vercel.app/",
    github: "https://github.com/Diego-Sant/Portfolio2024"
  },
  {
    category: "Full-Stack",
    title: "TriviaQuest",
    description: "Uma plataforma de quizzes interativos sobre diversos temas, incluindo animes, filmes e séries. Desafie seus conhecimentos e divirta-se com perguntas de diferentes categorias.",
    stack: [
      {name: "React"}, {name: "TypeScript"}, {name: "NextJS"}, {name: "TailwindCSS"},
      {name: "Photoshop"}, {name: "React Admin"}, {name: "Git"},
      {name: "Clerk"}, {name: "Stripe"}, {name: "Drizzle"}, {name: "Desenvolvimento de API"},
    ],
    image: "/projects/TriviaQuest.png",
    live: "https://trivia-quest-omega.vercel.app/",
    github: "https://github.com/Diego-Sant/TriviaQuest"
  },
  {
    category: "Full-Stack",
    title: "WebPad",
    description: "Uma plataforma versátil para anotações, permitindo aos usuários personalizar o conteúdo com opções de aumentar a fonte, mudar cores, adicionar imagens e muito mais. Ideal para organizar suas ideias de forma prática e dinâmica.",
    stack: [
      {name: "React"}, {name: "TypeScript"}, {name: "NextJS"}, {name: "TailwindCSS"},
      {name: "Shadcn UI"}, {name: "Convex"}, {name: "Desenvolvimento de API"}, 
      {name: "Git"}, {name: "Clerk"}, {name: "Edgestore"}
    ],
    image: "/projects/Webpad.png",
    live: "https://web-pad-five.vercel.app/",
    github: "https://github.com/Diego-Sant/WebPad"
  },
  {
    category: "Full-Stack",
    title: "Gameland",
    description: "Uma loja virtual de jogos com funcionalidades avançadas de pesquisa, permitindo aos usuários buscar jogos pelo nome, filtrar por categorias, preço e modos de jogo. Um hub completo para encontrar o jogo perfeito.",
    stack: [
      {name: "React"}, {name: "TypeScript"}, {name: "NextJS"}, {name: "TailwindCSS"},
      {name: "Supabase"}, {name: "MongoDB"}, {name: "Prisma"}, 
      {name: "Git"}
    ],
    image: "/projects/Gameland.png",
    live: "https://gamelandnextjs.vercel.app/",
    github: "https://github.com/Diego-Sant/GameLand-NextJS"
  },
  {
    category: "Front-End",
    title: "League Website",
    description: "Um site desenvolvido como uma homenagem ao universo de League of Legends, simulando a experiência do site oficial do jogo. Explore conteúdos, informações sobre campeões e novidades em um design que reflete a estética do jogo.",
    stack: [
      {name: "React"}, {name: "TailwindCSS"}, {name: "JavaScript"},
      {name: "Git"}, {name: "Canva"}
    ],
    image: "/projects/LeagueWebsite.png",
    live: "https://league-website-green.vercel.app/",
    github: "https://github.com/Diego-Sant/League-Website"
  },
  {
    category: "Full-Stack",
    title: "FlixPrime+",
    description: "Uma plataforma que reúne trailers de diversos filmes, organizada em várias categorias, inspirada em serviços de streaming populares. Descubra novos filmes e mantenha-se atualizado com os lançamentos mais recentes em um design intuitivo e atraente.",
    stack: [
      {name: "React"}, {name: "TypeScript"}, {name: "NextJS"}, {name: "TailwindCSS"},
      {name: "Photoshop"}, {name: "MongoDB"}, {name: "Prisma"}, 
      {name: "Git"}
    ],
    image: "/projects/FlixPrime+.png",
    live: "https://flix-prime-plus.vercel.app/",
    github: "https://github.com/Diego-Sant/FlixPrimePlus"
  },
  {
    category: "Full-Stack",
    title: "MiniBLOG",
    description: "Um MiniBlog totalmente funcional com integração ao Firebase, permitindo cadastro de usuários, login, criação de postagens, busca, edição e exclusão de fotos. Ideal para quem busca um blog dinâmico e simples de gerenciar, com funcionalidades essenciais de um CMS.",
    stack: [
      {name: "React"}, {name: "CSS"},{name: "JavaScript"},
      {name: "Firebase"}, {name: "Git"}
    ],
    image: "/projects/MiniBLOG.png",
    live: "https://miniblogwebsite.netlify.app/",
    github: "https://github.com/Diego-Sant/MiniBlog"
  },
  {
    category: "Front-End",
    title: "NetGamePass",
    description: "Um site informativo dedicado a lançamentos de jogos, apresentando detalhes sobre novos títulos e suas avaliações. Com um design responsivo e uma interface intuitiva, os usuários podem explorar as últimas novidades do mundo dos jogos de forma fácil e envolvente.",
    stack: [
      {name: "HTML"}, {name: "CSS"},{name: "JavaScript"},
      {name: "Bootstrap"}, {name: "Git"}
    ],
    image: "/projects/NetGamePass.png",
    live: "https://diego-sant.github.io/NetGamePass/",
    github: "https://github.com/Diego-Sant/NetGamePass"
  },
  {
    category: "Front-End",
    title: "Show do Milhão",
    description: "Um jogo interativo inspirado nos clássicos 'Show do Milhão' e 'Roda a Roda', projetado para ser jogado diretamente no computador. Teste seus conhecimentos em uma experiência divertida e desafiadora, com perguntas envolventes e um design atrativo.",
    stack: [
      {name: "HTML"}, {name: "CSS"},{name: "JavaScript"},
      {name: "Git"}
    ],
    image: "/projects/ShowDoMilhao.png",
    live: "https://showdomilhaogame.netlify.app/",
    github: "https://github.com/Diego-Sant/ShowDoMilhao"
  },
  {
    category: "Front-End",
    title: "WildBeast",
    description: "Um site informativo sobre animais selvagens, apresentando curiosidades, características e habitats de diversas espécies. Um recurso útil para amantes da fauna e curiosos sobre a vida selvagem.",
    stack: [
      {name: "HTML"}, {name: "CSS"}, {name: "JavaScript"}, {name: "Git"}
    ],
    image: "/projects/WildBeast.png",
    live: "https://wildbeast-ecru.vercel.app/leao.html",
    github: "https://github.com/Diego-Sant/Wildbeast"
  },
  {
    category: "Front-End",
    title: "CloneTube",
    description: "Um clone pessoal do YouTube que utiliza uma API para atualizar automaticamente o conteúdo. Explore vídeos, playlists e recursos de busca em uma plataforma que simula a experiência do YouTube.",
    stack: [
      {name: "React"}, {name: "JavaScript"}, {name: "API de Web Services"}, 
      {name: "CSS"}, {name: "Git"}
    ],
    image: "/projects/CloneTube.png",
    live: "https://clonetubediegosant.netlify.app/",
    github: "https://github.com/Diego-Sant/clonetube"
  },
  {
    category: "Front-End",
    title: "Website de clima",
    description: "Um site de clima que utiliza uma API para fornecer informações atualizadas sobre o tempo, com busca de cidades, estados e países de todo o mundo. Ideal para quem deseja saber a previsão do tempo em qualquer lugar.",
    stack: [
      {name: "HTML"}, {name: "CSS"}, {name: "JavaScript"}, {name: "API de Web Services"},
      {name: "Git"}
    ],
    image: "/projects/WeatherWebsite.png",
    live: "https://weatherwebsitefinder.netlify.app/",
    github: "https://github.com/Diego-Sant/WeatherWebSite"
  },
  {
    category: "Front-End",
    title: "Gerador de cores gradientes",
    description: "Um site projetado para simular e criar novas combinações de cores gradientes. Ideal para designers e desenvolvedores em busca de inspiração e ferramentas para personalizar seus projetos.",
    stack: [
      {name: "HTML"}, {name: "CSS"}, {name: "JavaScript"},
      {name: "Git"}
    ],
    image: "/projects/GradientColors.png",
    live: "https://gradientcolorsmaker.netlify.app/",
    github: "https://github.com/Diego-Sant/GradientColors"
  },
  {
    category: "Front-End",
    title: "Compressor e modificador de imagens",
    description: "Um site que permite modificar a altura, largura e qualidade de imagens de forma simples e eficiente. Ferramenta essencial para quem deseja otimizar imagens para web ou redes sociais.",
    stack: [
      {name: "HTML"}, {name: "CSS"}, {name: "JavaScript"},
      {name: "Git"}
    ],
    image: "/projects/ResizeAndCompress.png",
    live: "https://resizeandcompressimages.netlify.app/",
    github: "https://github.com/Diego-Sant/ResizeAndCompress"
  },
  {
    category: "Full-Stack",
    title: "TechTrivia",
    description: "Plataforma interativa de quizzes desenvolvida com Next.js, focada em testar seus conhecimentos sobre Next.js, TypeScript, React e JavaScript. Ideal para desenvolvedores que buscam aprender de maneira divertida.",
    stack: [
      {name: "React"}, {name: "TypeScript"}, {name: "NextJS"}, {name: "TailwindCSS"},
      {name: "Desenvolvimento de API"}, {name: "Git"}
    ],
    image: "/projects/TechTrivia.png",
    live: "https://tech-trivia.vercel.app/",
    github: "https://github.com/Diego-Sant/TechTrivia"
  },
  {
    category: "Front-End",
    title: "Adivinhe o número",
    description: "Jogo de adivinhação com contagem de tentativas, vitórias e derrotas.",
    stack: [
      {name: "HTML"}, {name: "CSS"}, {name: "JavaScript"},
      {name: "Git"}
    ],
    image: "/projects/GuessTheNumber.png",
    live: "https://guessthecomputernumbergame.netlify.app/",
    github: "https://github.com/Diego-Sant/GuessTheNumber"
  },
].map((project, index) => ({
  ...project,
  num: String(index + 1).padStart(2, '0')
}));

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex])
  }

  return (
    <motion.section initial={{opacity:0}} animate={{opacity: 1, transition: 
      {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">

          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col
            lg:justify-between order-2 lg:order-none">

            <div className="flex flex-col gap-[30px]">

              <div className="text-8xl leading-none font-extrabold text-transparent
              text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none group-hover:text-secondary
              transition-all duration-500">
                {project.title}
              </h2>

              <p className="text-white/60">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-secondary">
                      {item.name}
                      {index !== project.stack.length - 1 ? "," : "."}
                    </li>
                  )
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl group-hover:text-secondary" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-primary rounded-lg p-2">
                        <p>Ir para o site do projeto.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl group-hover:text-secondary" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-primary rounded-lg p-2">
                        <p>Ir para o github do projeto.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>
          </div>

          <div className="w-full md:w-[85%] lg:w-[60%] xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                        <div className="h-[460px] group relative flex justify-center
                          items-center bg-white">

                            <div className="absolute top-0 bottom-0 w-full h-full
                              bg-black/10 z-10">
                            </div>
                            <div className="relative w-full h-full">
                              <Image src={project.image} fill className="object-cover" alt={project.title} />
                            </div>

                        </div>
                    </SwiperSlide>
                  )
                })}
                <SliderButtons containerStyles="flex gap-2 absolute right-0 
                  bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full 
                  justify-between xl:w-max xl:justify-none" 
                  btnStyles="bg-secondary hover:bg-secondary-hover text-primary
                    text-[22px] w-[44px] h-[44px] flex justify-center items-center
                    transition-all" />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Projects
