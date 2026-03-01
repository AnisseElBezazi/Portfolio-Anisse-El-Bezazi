"use client";

import { useRef, useEffect, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./header.module.css";

function HeaderContent() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const playHoverSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/click.wav");
      audioRef.current.volume = 0.15;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  const scrollToClass = (targetClass: string) => {
    const section = document.querySelector(`[class*="${targetClass}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (pathname === "/" && scrollTo) {
      setTimeout(() => {
        scrollToClass(scrollTo);
        router.replace("/", { scroll: false });
      }, 150);
    }
  }, [pathname, searchParams, router]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetClass: string,
  ) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToClass(targetClass);
    } else {
      router.push(`/?scrollTo=${targetClass}`);
    }
  };

  const navLinks = [
    { num: "01", label: "PROFIL", targetClass: "sectionBio" },
    { num: "02", label: "PARCOURS", targetClass: "historySection" },
    { num: "03", label: "SKILLS", targetClass: "skillsSection" },
    { num: "04", label: "PROJETS", targetClass: "projectsSection" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.cyanDot}></div>
        <span className={styles.logoText}>ANISSE_ELBEZAZI [2.0]</span>
      </div>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a
            key={link.num}
            href="#"
            className={styles.navLink}
            onMouseEnter={playHoverSound}
            onClick={(e) => handleNavClick(e, link.targetClass)}
          >
            <span className={styles.linkNum}>{link.num}</span>
            <span className={styles.linkLabel}>{link.label}</span>
          </a>
        ))}
      </nav>

      <a
        href="#"
        className={styles.contactBtn}
        onMouseEnter={playHoverSound}
        onClick={(e) => handleNavClick(e, "sectionContact")}
      >
        <span className={styles.btnInner}>
          ACCES
          <br />
          CONTACT
        </span>
      </a>
    </header>
  );
}

export default function Header() {
  return (
    <Suspense
      fallback={<div className={styles.header} style={{ opacity: 0 }} />}
    >
      <HeaderContent />
    </Suspense>
  );
}
