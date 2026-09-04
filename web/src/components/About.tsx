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
                « Après ces 9 années d&apos;expériences en informatique,
                j&apos;ai envie d&apos;évoluer au sein d&apos;une plus
                grande structure. Mais aussi d&apos;atteindre mon rêve de
                créer une application un jour, pourquoi pas ? »
                <footer>— note de Tsima, tirée de son CV</footer>
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
                  <span>échecs, Internet, artiste</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}