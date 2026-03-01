import { getDb } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";
import styles from "./projets.module.css";

export default async function Projects() {
  const db = await getDb();
  const projectsData = await db.all("SELECT * FROM projects");

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z" />
            </svg>
          </div>
          <h2 className={styles.mainTitle}>[SYSTEM_PROJECTS]</h2>
        </div>

        <div className={styles.scrollContainer}>
          <div className={styles.scrollWrapper}>
            <div className={styles.projectsList}>
              {projectsData.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  {project.badge && (
                    <div className={`${styles.badge} ${styles[project.theme]}`}>
                      {project.badge}
                    </div>
                  )}

                  <div className={styles.imageContainer}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className={styles.projectImg}
                    />
                  </div>

                  <div className={styles.content}>
                    <h3
                      className={`${styles.projectTitle} ${styles[project.theme]}`}
                    >
                      {project.title}
                    </h3>
                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.cardFooter}>
                      <div className={styles.footerLine}></div>
                      <div className={styles.actions}>
                        <span
                          className={`${styles.status} ${styles[project.theme]}`}
                        >
                          ÉTAT: {project.status}
                        </span>

                        <Link
                          href={`/projects/${project.slug}`}
                          className={`${styles.examineBtn} ${styles[project.theme]}`}
                        >
                          EXAMINER
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
