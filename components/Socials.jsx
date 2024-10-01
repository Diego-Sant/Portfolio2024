import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
    {
        icon: <FaGithub />, path: "https://github.com/Diego-Sant"
    },
    {
        icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/diego-de-souza-sant-ana-7784b821b/"
    },
    {
        icon: <SiGmail />, path: "mailto:diegossantana071@gmail.com"
    }
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
            <Link key={index} href={social.path} className={iconStyles}
                target="_blank" rel="noopener noreferrer">
                {social.icon}
            </Link>
        )
      })}
    </div>
  )
}

export default Socials
