"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Ínicio",
        path: "/",
    },
    {
        name: "Certificados",
        path: "/certificados",
    },
    {
        name: "Resumo",
        path: "/resumo",
    },
    {
        name: "Projetos",
        path: "/projetos",
    },
    {
        name: "Contato",
        path: "/contato",
    },
]

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
        {links.map((link, index) => {
            return (

                <Link className={`hover:text-secondary font-medium transition-all
                    ${link.path === pathname && 
                        "text-secondary border-b-[1px] border-secondary"}`
                } key={index} href={link.path}>

                    {link.name}

                </Link>
            )
        })}
        </nav>
    )
}

export default Navbar
