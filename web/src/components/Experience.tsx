import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="frame-tag">
          <span>experience.log</span>
          <span className="dim">1440 × Hug</span>
        </div>
        <div className="frame">
          <div className="vh-head">
            <p className="eyebrow" style={{ margin: 0 }}>
              historique des versions
            </p>
            <span>git log --oneline --author=tsima</span>
          </div>

          <div className="log">
            {experiences.map((exp, i) => (
              <div key={exp.hash} className={`commit${exp.current ? " current" : ""}`}>
                <div className="commit-rail">
                  <div className="commit-dot" />
                </div>
                <div>
                  <div className="commit-head">
                    <span className="commit-hash">{exp.hash}</span>
                    <span className="commit-title">{exp.title}</span>
                    {i === 0 && (
                      <span className="commit-badge">HEAD · version actuelle</span>
                    )}
                  </div>
                  <div className="commit-company">{exp.company}</div>
                  <div className="commit-dates">{exp.dates}</div>
                  <ul className="commit-desc">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}