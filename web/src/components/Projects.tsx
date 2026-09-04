import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projets">
      <div className="wrap">
        <div className="frame-tag">
          <span>Projets</span>
          <span className="dim">1440 × Hug</span>
        </div>
        <div className="frame">
          <div className="dirlist">
            {projects
              .filter((p) => p.status === "live")
              .map((p) => (
                <div key={p.slug}>
                  <span className="path">drwxr-xr-x</span> {p.name.toLowerCase()}/{" "}
                  <span>— {p.tag}</span>
                </div>
              ))}
          </div>
          <div className="thumb-grid">
            {projects.map((p) => (
              <div
                key={p.slug}
                className={`thumb-card${p.status === "progress" ? " progress" : ""}`}
              >
                <div className={`thumb-art ${p.art}`} />
                <div className="thumb-body">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <span className={`thumb-tag${p.status === "progress" ? " wip" : ""}`}>
                    {p.status === "progress" ? "● " : ""}
                    {p.tag}
                  </span>
                  {p.url && (
                    <>
                      <br />
                      <a className="thumb-link" href={p.url} target="_blank" rel="noopener">
                        {p.url.replace("https://", "")} ↗
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}