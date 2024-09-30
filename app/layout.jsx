import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Meu Portfólio",
  description: "Meu portfólio com meus projetos, conhecimentos e uma breve descrição sobre mim.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={jetbrainsMono.variable}>
        {children}
      </body>
    </html>
  );
}
