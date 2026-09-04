export default function Skills() {
  return (
    <section id="competences">
      <div className="wrap">
        <div className="frame-tag">
          <span>Compétences</span>
          <span className="dim">1440 × Hug</span>
        </div>
        <div className="frame">
          <p className="eyebrow">focus actuel</p>
          <h2 style={{ fontSize: "clamp(24px,3.6vw,32px)", marginBottom: 6 }}>
            Figma &amp; C# — en construction
          </h2>

          <div className="skill-split">
            <div className="skill-panel fig">
              <div className="skill-panel-head">
                <div className="skill-panel-title">
                  <span className="diamond figma" />
                  Design — Figma
                </div>
                <span className="tag-learning">en apprentissage</span>
              </div>
              <ul>
                <li>Auto Layout &amp; contraintes</li>
                <li>Composants &amp; variants</li>
                <li>Prototypage d&apos;interactions</li>
                <li>Publication avec Figma Sites</li>
              </ul>
              <div className="callout">
                <span className="cal-label">Projet en cours</span>
                Refonte de <b>comptassistance.com</b> : Figma Design +
                Figma Sites, en une page à défilement avec navigation par
                ancres.
              </div>
            </div>

            <div className="skill-panel cs">
              <div className="skill-panel-head">
                <div className="skill-panel-title">
                  <span className="diamond csharp" />
                  Développement — C#
                </div>
                <span className="tag-learning">en apprentissage</span>
              </div>
              <div className="code-win">
                <div className="code-win-bar">
                  <span />
                  <span />
                  <span />
                  <span className="fname">Program.cs</span>
                </div>
                <pre>
                  <span className="cs-kw">using</span> System{"\n\n"}
                  <span className="cs-kw">class</span> Program{"\n"}
                  {"{\n"}
                  {"    "}
                  <span className="cs-kw">static void</span> Main(){"\n"}
                  {"    {\n"}
                  {"        "}Console.WriteLine(
                  <span className="cs-str">
                    &quot;Bonjour, je code en C# !&quot;
                  </span>
                  ); <span className="cs-cm">{"// en cours d'apprentissage"}</span>
                  {"\n    }\n}"}
                </pre>
              </div>
              <p className="note">
                Socle existant en logique de programmation
                (HTML/CSS/JavaScript, Java, Visual Studio) sur lequel
                s&apos;appuie l&apos;apprentissage de C#.
              </p>
            </div>
          </div>

          <p className="core-label">{"// autres compétences — confirmées"}</p>
          <pre className="code-block">
            <span className="b">{"{"}</span>
            {"\n  "}
            <span className="k">&quot;langages&quot;</span>
            <span className="b">:</span>{" "}
            <span className="s">
              [&quot;HTML&quot;, &quot;CSS&quot;, &quot;JavaScript&quot;,
              &quot;Java&quot;, &quot;C&quot;, &quot;VB&quot;]
            </span>
            <span className="b">,</span>
            {"\n  "}
            <span className="k">&quot;outils&quot;</span>
            <span className="b">:</span>{" "}
            <span className="s">
              [&quot;Visual Studio&quot;, &quot;VS Code&quot;,
              &quot;IntelliJ&quot;, &quot;Git&quot;]
            </span>
            <span className="b">,</span>
            {"\n  "}
            <span className="k">&quot;methodologies&quot;</span>
            <span className="b">:</span>{" "}
            <span className="s">[&quot;SCRUM&quot;, &quot;Cycle en V&quot;]</span>
            <span className="b">,</span>
            {"\n  "}
            <span className="k">&quot;cms&quot;</span>
            <span className="b">:</span> <span className="s">[&quot;WordPress&quot;]</span>
            <span className="b">,</span>
            {"\n  "}
            <span className="k">&quot;design&quot;</span>
            <span className="b">:</span>{" "}
            <span className="s">
              [&quot;Adobe Creative Suite&quot;, &quot;Photoshop&quot;]
            </span>
            {"\n"}
            <span className="b">{"}"}</span>
          </pre>

          <div className="lang-row">
            <div className="lang-item">
              <b>Français</b>
              <span>courant</span>
            </div>
            <div className="lang-item">
              <b>Anglais</b>
              <span>pré-intermédiaire</span>
            </div>
            <div className="lang-item">
              <b>Malagasy</b>
              <span>langue maternelle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}