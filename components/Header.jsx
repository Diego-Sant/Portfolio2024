import Link from "next/link"

import { Button } from "./ui/button"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                Diego<span className="text-secundary blinking-cursor -ml-1">|</span>
            </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
            <Navbar />
            <Link href="/contato">
                <Button>Disponível</Button>
            </Link>
        </div>

        <div className="xl:hidden">
            mobile
        </div>
      </div>
    </header>
  )
}

export default Header
