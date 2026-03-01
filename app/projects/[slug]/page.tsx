import { getDb } from "@/lib/db";
import Link from "next/link";
import styles from "./projet-detail.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const db = await getDb();

  const project = await db.get("SELECT * FROM projects WHERE slug = ?", [slug]);

  if (!project)
    return <div className={styles.error}>[SYSTEM_ERROR] : FILE_NOT_FOUND</div>;

  const features = await db.all(
    "SELECT * FROM project_features WHERE project_id = ?",
    [project.id],
  );

  const actionText =
    project.action_type === "maquette" ? "VOIR LA MAQUETTE" : "DÉPÔT GITHUB";
  const btnClass = project.theme === "cyan" ? styles.btnCyan : styles.btnPink;

  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        <div className={styles.leftNav}>
          <Link href="/" className={styles.backBtn}>
            ← [RETOUR_AUX_PROJETS]
          </Link>
        </div>
        <div className={styles.headerConnector}></div>
        <span className={styles.fileId}>
          FILE_ID:<span className={styles.cyanValue}>{project.title}</span>
        </span>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.leftCol}>
          <div className={styles.imageWrapper}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.mainImg}
            />
            <div className={`${styles.statusLabel} ${styles[project.theme]}`}>
              STATUS: {project.status}
            </div>
          </div>

          <div className={styles.stackBox}>
            <h3 className={styles.boxTitle}>◆ STACK_TECHNIQUE</h3>
            <div className={styles.stackGrid}>
              <div className={styles.stackItem}>
                <h4>ARCHITECTURE</h4>
                <p>{project.architecture}</p>
              </div>
              <div className={styles.stackItem}>
                <h4>BACKEND</h4>
                <p>{project.backend}</p>
              </div>
              <div className={styles.stackItem}>
                <h4>FRONTEND</h4>
                <p>{project.frontend}</p>
              </div>
              <div className={styles.stackItem}>
                <h4>DATABASE</h4>
                <p>{project.database_tech}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <h1 className={`${styles.title} ${styles[project.theme]}`}>
            {project.title}
          </h1>
          <div className={styles.divider}></div>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.features}>
            {features.map((feature: any) => (
              <div key={feature.id} className={styles.featureItem}>
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          {/* LE BOUTON REMPLACE LE BLOC DE MONITORING */}
          <div className={styles.actionContainer}>
            <a
              href={project.action_url}
              target="_blank"
              rel="noopener noreferrer"
              className={btnClass}
            >
              {actionText}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
