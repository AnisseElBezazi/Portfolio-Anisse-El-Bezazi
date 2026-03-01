import type { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";
import { Orbitron, JetBrains_Mono, Roboto_Condensed } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
});

// C'est ici que Next.js génère tes balises <title> et <meta name="description">
export const metadata: Metadata = {
  title: "Anisse Elbezazi | Portfolio",
  description:
    "Développeur web et mobile fullstack, étudiant à l'IIM et basé à Nanterre (92). Recherche d'alternance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${orbitron.variable} ${jetbrainsMono.variable} ${robotoCondensed.variable}`}
    >
      <body>
        <div className="bg-container">
          <img src="/background.gif" alt="background" />
          <div className="bg-overlay"></div>
        </div>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
