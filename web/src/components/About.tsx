export default function About() {
  return (
    <section id="apropos">
      <div className="wrap">
        <div className="frame-tag">
          <span>À propos</span>
          <span className="dim">1440 × Hug</span>
        </div>
        <div className="frame">
          <div className="about-grid">
            <div className="pin-row">
              <div className="pin">1</div>
              <div className="pin-bubble">
                « Après 9 ans à gérer des sites web, je me forme aujourd&apos;hui au design (Figma) et 
                à la programmation (C#), avec l&apos;objectif d&apos;évoluer vers des projets de conception 
                et de développement. Plus tard, j&apos;aimerais me tourner vers le jeu vidéo — devenir game designer 
                et, un jour, créer mon propre jeu. »
                <footer>— mon parcours en quelques mots</footer>
              </div>
            </div>
            <div>
              <div className="prop-card">
                <h3 style={{ fontFamily: "var(--font-mono)" }}>FORMATION</h3>
                <div className="prop-item">
                  <b>Licence Pro. Informatique de gestion</b>
                  <span>Université GSI Madagascar · 2011–2013</span>
                </div>
                <div className="prop-item">
                  <b>DTS, Développeur d&apos;Applications Informatiques</b>
                  <span>CNTEMAD · 2008–2011</span>
                </div>
              </div>
              <div className="prop-card">
                <h3 style={{ fontFamily: "var(--font-mono)" }}>
                  CENTRES D&apos;INTÉRÊT
                </h3>
                <div className="prop-item">
                  <b>Sports</b>
                  <span>natation, hand-ball, volley-ball</span>
                </div>
                <div className="prop-item">
                  <b>Loisirs</b>
                  <span>échecs, Internet, guitare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}