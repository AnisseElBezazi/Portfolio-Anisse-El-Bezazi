import { getDb } from "@/lib/db";
import styles from "./skills.module.css";

export default async function Skills() {
  // Récupération des données
  const db = await getDb();
  const skillsData = await db.all("SELECT * FROM skills");

  return (
    <section className={styles.skillsSection}>
      <div className={styles.header}>
        <div className={styles.headerIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3" />
            <path d="M15 1v3" />
            <path d="M9 20v3" />
            <path d="M15 20v3" />
            <path d="M20 9h3" />
            <path d="M20 14h3" />
            <path d="M1 9h3" />
            <path d="M1 14h3" />
          </svg>
        </div>
        <h2 className={styles.mainTitle}>[SYSTEM_SKILLS]</h2>
      </div>

      <div className={styles.gridContainer}>
        {skillsData.map((skill) => (
          <div key={skill.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <img
                  src={`/icons/${skill.iconName}.svg`}
                  alt={skill.iconName}
                  className={styles.iconImg}
                />
              </div>
              <div className={styles.cardTexts}>
                <h3 className={styles.cardTitle}>{skill.title}</h3>
                <p
                  className={`${styles.cardSubtitle} ${
                    skill.isPinkSubtitle ? styles.pink : ""
                  }`}
                >
                  {skill.subtitle}
                </p>
              </div>
            </div>

            <div className={styles.progressSection}>
              <span className={styles.maitriseLabel}>Maitrise</span>
              <div className={styles.progressBarContainer}>
                <div
                  className={styles.progressBarFill}
                  style={{ width: `${skill.progress}%` }}
                ></div>
                <span className={styles.progressMarker} style={{ left: 0 }}>
                  0%
                </span>
                <span className={styles.progressMarker} style={{ right: 0 }}>
                  100%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
