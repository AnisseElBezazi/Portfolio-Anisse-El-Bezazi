"use client";

import { useRef } from "react";
import styles from "./hero.module.css";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playHoverSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/click.wav");
      audioRef.current.volume = 0.15;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  const scrollToProjects = () => {
    const section = document.querySelector('[class*="projectsSection"]');
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.badgeProtocol}>
        <span className={styles.txtProtocol}>PROTOCOL : IDENTIFY_MANIFEST</span>
      </div>

      <div className={styles.titleWrap}>
        <h1 className={styles.bigTitle}>ANISSE</h1>
        <h2 className={styles.bigSub}>PORTFOLIO</h2>
      </div>

      <div className={styles.descBox}>
        <p className={styles.txtDesc}>
          Développeur Fullstack & UX/UI designer.
          <br />
          Exploration de la frontière entre le code pur et l'expérience
          immersive.
          <a
            href="#contact"
            className={styles.linkContact}
            onMouseEnter={playHoverSound}
          >
            {" "}
            Contactez-moi.
          </a>
        </p>
      </div>

      <div className={styles.actionGroup}>
        <button
          className={styles.btnProjets}
          onClick={scrollToProjects}
          onMouseEnter={playHoverSound}
        >
          VOIR TOUS LES PROJETS
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
          </svg>
        </button>

        <div className={styles.authContainer}>
          <a
            href="https://github.com/AnisseElBezazi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnAuth}
            style={{ textDecoration: "none" }}
            onMouseEnter={playHoverSound}
          >
            ACCÈS GITHUB
          </a>
          <div className={styles.authLine}></div>
        </div>
      </div>

      <div className={styles.scrollBounce}>
        <svg
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 13 5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
