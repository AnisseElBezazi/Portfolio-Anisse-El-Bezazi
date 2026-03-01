"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./contact.module.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleCancel = () => {
    setEmail("");
    setMessage("");
    setStatus("idle");
    router.push("/");
  };

  return (
    <section className={styles.sectionContact} id="contact">
      <div className={styles.container}>
        <div className={styles.infoCol}>
          <h2 className={styles.title}>PROTOCOLE_CONTACT</h2>
          <div className={styles.titleLine}></div>
          <p className={styles.description}>
            Je cherche activement une alternance en développement web. Si mon
            profil technique correspond à vos besoins, utilisez ce formulaire
            pour m'envoyer les détails de votre offre. Je traite les
            propositions sérieuses rapidement.
          </p>

          <ul className={styles.socialList}>
            <li>
              <a
                href="https://www.linkedin.com/in/anisse-el-bezazi-a7a70032b/"
                className={styles.socialLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:anisse.elbezazi@gmail.com"
                className={styles.socialLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                anisse.elbezazi@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AnisseElBezazi"
                className={styles.socialLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Github
              </a>
            </li>
          </ul>
        </div>

        <form className={styles.formCol} onSubmit={handleSubmit}>
          <div className={styles.statusLine}>
            {status === "idle" && "--- CANAL_SECURISE_ETABLI ---"}
            {status === "loading" && "--- TRANSMISSION_EN_COURS... ---"}
            {status === "success" && "--- MESSAGE_TRANSMIS_AVEC_SUCCES ---"}
            {status === "error" && "--- ECHEC_DE_LA_TRANSMISSION ---"}
          </div>

          <div className={styles.inputGroup}>
            <label>IDENTIFIANT</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>MESSAGE</label>
            <textarea
              placeholder="Tapez votre transmission..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === "loading"}
            ></textarea>
          </div>

          <button
            type="submit"
            className={styles.btnSubmit}
            disabled={status === "loading"}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            {status === "loading" ? "ENVOI..." : "TRANSMETTRE"}
          </button>

          <button
            type="button"
            className={styles.btnCancel}
            onClick={handleCancel}
          >
            ABANDONNER L'EXTRACTION
          </button>
        </form>
      </div>
    </section>
  );
}
