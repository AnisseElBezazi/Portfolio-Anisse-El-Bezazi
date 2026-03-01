"use client";

import styles from "./parcours.module.css";

export default function History() {
  const events = [
    {
      side: "left",
      title: "Ecole de developpement web & mobile",
      info: "INSTITUE DE L'INTERNET ET DU MULTIMEDIA | 2024 - 2029",
    },
    {
      side: "right",
      title: "Ecole d'ingénieur informatique",
      info: "ECOLE CENTRAL DE L'ELECTRONIQUE | 2023 - 2024",
    },

    {
      side: "left",
      title: "BAC GENERAL SPE MATHS/PHYSIQUE-CHIME",
      info: "Lycée Joliot-curie | 2020 - 2023",
    },
  ];

  return (
    <section className={styles.historySection}>
      <div className={styles.header}>
        <div className={styles.titleIcon}>
          <div className={styles.square1}></div>
          <div className={styles.square2}></div>
        </div>
        <h2 className={styles.mainTitle}>[SYSTEM_HISTORY]</h2>
      </div>

      <div className={styles.timelineContainer}>
        <div className={styles.centralLine}></div>

        {events.map((event, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${styles[event.side]}`}
          >
            <div className={styles.node}></div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <p className={styles.cardInfo}>{event.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
