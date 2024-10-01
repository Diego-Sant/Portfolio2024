"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

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

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-secondary" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-16 mb-20 flex justify-center">
                    <Link href="/">
                        <Image src="/logo.svg" width={60} height={60} 
                            alt="Logo com a letra 'D'" />
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (

                            <Link href={link.path} key={index}
                                className={`text-xl hover:text-secondary transition-all
                                    ${link.path === pathname && "text-secondary border-b-[1px] border-secondary"}`
                                }>
                                {link.name}
                            </Link>
                            
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
