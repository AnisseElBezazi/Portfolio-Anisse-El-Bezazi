"use client";

import styles from "./profil.module.css";

export default function BioScan() {
  return (
    <section className={styles.sectionBio}>
      <div className={styles.bioContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.frameRoseTop}></div>
          <div className={styles.frameRoseBot}></div>

          <div className={styles.bordureCyan}>
            <div className={styles.imgInner}>
              <img src="/moi.png" alt="Anisse" className={styles.imgProfil} />
            </div>
          </div>
        </div>

        <div className={styles.textBloc}>
          <div className={styles.wrapTitre}>
            <div className={styles.ligneTitre}></div>
            <h2 className={styles.titrePrincipal}>BIO_SCAN</h2>
          </div>

          <p className={styles.txtMain}>
            Développeur web et mobile{" "}
            <span className={styles.txtCyan}>fullstack</span>, étudiant à l'
            <span className={styles.txtPink}>IIM</span> et basé à Nanterre (92).
            Je conçois des applications web complètes, de la phase de{" "}
            <span className={styles.txtPink}>prototypage UX/UI</span> jusqu'au
            déploiement de l'
            <span className={styles.txtCyan}>architecture backend</span>. Je
            recherche activement une{" "}
            <span className={styles.txtCyan}>alternance</span> en développement
            web en Île-de-France pour intégrer une équipe technique et
            construire des produits digitaux performants.
          </p>

          <div className={styles.gridInfos}>
            <div
              className={styles.boxInfo}
              style={{ borderColor: "var(--cyan)" }}
            >
              <h3 className={styles.titreBox} style={{ color: "var(--cyan)" }}>
                FRONTEND_&_UX/UI
              </h3>
              <p className={styles.txtBox}>
                Création d'interfaces utilisateur responsives et optimisation de
                l'expérience client. Maquettage d'applications sur Figma et
                intégration frontend dynamique avec React, JavaScript, HTML5 et
                CSS3.
              </p>
            </div>

            <div
              className={styles.boxInfo}
              style={{ borderColor: "var(--pink)" }}
            >
              <h3 className={styles.titreBox} style={{ color: "var(--pink)" }}>
                ARCHITECTURE_BACKEND
              </h3>
              <p className={styles.txtBox}>
                Développement de logiques serveur et conception d'API REST
                sécurisées. Structuration de bases de données MySQL et création
                d'applications robustes exploitant principalement PHP et le
                framework Symfony.
              </p>
            </div>
          </div>

          <a
            href="/CV_Anisse_EL_BEZAZI_V10.pdf"
            className={styles.btnDownloadCv}
          >
            <span>Télécharger CV [PDF]</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
