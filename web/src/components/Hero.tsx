import Image from "next/image";
import TypedLine from "./TypedLine";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="wrap">
        <div className="frame-tag">
          <span>Cover</span>
          <span className="dim">1440 × Hug</span>
        </div>
        <div className="frame">
          <div className="hero-grid">
            <div className="hero-photo-col">
              <div className="hero-photo-tag">
                <span>Photo</span>
                <span className="dim">172 × 172</span>
              </div>
              <div className="square square-top"></div>
              <div className="square square-bottom"></div>
              <div className="frame-mini">
                <Image
                  src="/photo1.png"
                  alt="Photo de profil de Tsima Andriamampianina"
                  width={172}
                  height={172}
                  priority
                />
              </div>
              <span className="photo-fill-label">image fill · cover</span>
            </div>

            <div>
              <h1>
                Tsima
                <br />
                Andriamampianina<em>.</em>
              </h1>
              <p className="hero-role">
                <b>Designer produit (Figma)</b> et <b>développeur C#</b> en
                apprentissage actif — adossé à 9 ans d&apos;expérience en
                développement front-end et gestion de sites web.
              </p>

              <div className="terminal">
                <div className="terminal-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="terminal-body">
                  <div>
                    <span className="prompt">$</span> whoami --focus
                  </div>
                  <TypedLine text="Designer Figma & développeur C# en apprentissage, adossé à 9 ans de front-end web." />
                </div>
              </div>

              <span className="badge-freelance">
                <span className="dot" />
                Disponible en freelance — Figma / C#
              </span>

              <div className="hero-ctas">
                <a className="btn btn-primary" href="#competences">
                  Voir Figma &amp; C#
                </a>
                <a className="btn btn-ghost" href="#experience">
                  Voir l&apos;expérience
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}