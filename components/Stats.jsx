"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import { getCertificatesCount } from "@/app/certificados/page";

const Stats = ({ certificatesCount }) => {
  const [repos, setRepos] = useState(0);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = "Diego-Sant";

        const reposResponse = await axios.get(`https://api.github.com/users/${username}`);
        setRepos(reposResponse.data.public_repos);

        const commitsResponse = await axios.get(`https://api.github.com/search/commits?q=author:${username}`, {
          headers: { Accept: "application/vnd.github.cloak-preview" }
        });
        setCommits(commitsResponse.data.total_count);
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      }
    };

    fetchGitHubStats();
  }, []);

  const stats = [
    {
      num: certificatesCount,
      text: "Certificados"
    },
    {
      num: 14,
      text: "Tecnologias aprendidas"
    },
    {
      num: repos,
      text: "Repositórios"
    },
    {
      num: commits,
      text: "Números de commits"
    }
  ]

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div className="flex-1 flex gap-4 items-center justify-center
                xl:justify-start" key={index}>

                <CountUp end={item.num} duration={5} delay={2} 
                  className="text-4xl xl:text-6xl font-extrabold" 
                />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"}
                  leading-snug text-white/80`}>
                  {item.text}
                </p>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
