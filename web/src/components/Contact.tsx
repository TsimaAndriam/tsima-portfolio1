"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const formEl = e.currentTarget; // référence gardée avant le await
    const form = new FormData(formEl);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    if (!apiUrl) {
      // Pas encore d'API déployée (étape 3) : on prévient plutôt que
      // de faire semblant que ça a marché.
      setStatus("err");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) formEl.reset(); // on utilise la référence, pas e.currentTarget
    } catch {
      setStatus("err");
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="frame-tag">
          <span>Contact</span>
          <span className="dim">1440 × Hug</span>
        </div>
        <div className="frame">
          <p className="eyebrow">partager</p>
          <h2 style={{ fontSize: "clamp(24px,3.6vw,32px)", marginBottom: 22 }}>
            Discutons de votre projet
          </h2>

          <div className="contact-term">
            <div className="contact-line">
              <span className="prompt">$</span> mail --to{" "}
              <a href="mailto:tsimaandriamampianina@yahoo.fr">
                tsimaandriamampianina@yahoo.fr
              </a>
            </div>
            <div className="contact-line">
              <span className="prompt">$</span> call{" "}
              <a href="tel:+33746120403">+33 7 46 12 04 03</a>
            </div>
            <div className="contact-line">
              <span className="prompt">$</span> open{" "}
              
                <a href="https://linkedin.com/in/tsima-andriamampianina-b0006b23b/"
                target="_blank"
                rel="noopener"
              >
                linkedin.com/in/tsima-andriamampianina
              </a>
            </div>
            <div className="contact-line">
              <span className="prompt">$</span> locate <span>Clichy, France</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">nom</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div>
              <label htmlFor="message">message</label>
              <textarea id="message" name="message" rows={4} required />
            </div>
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Envoi…" : "Envoyer via l'API .NET"}
            </button>
            {status === "ok" && <p className="form-status ok">✓ Message envoyé, merci !</p>}
            {status === "err" && (
              <p className="form-status err">
                L&apos;API n&apos;est pas encore déployée / joignable — utilisez
                l&apos;e-mail ci-dessus en attendant.
              </p>
            )}
          </form>

          <span className="badge-freelance" style={{ marginTop: 22 }}>
            <span className="dot" />
            Ouvert aux missions freelance — Figma / C#
          </span>
        </div>
      </div>
    </section>
  );
}