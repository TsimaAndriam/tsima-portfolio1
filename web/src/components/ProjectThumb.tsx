"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";

export default function ProjectThumb({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  // Image locale (sites archivés), sinon capture automatique, sinon rien
  const src =
    project.image ??
    (project.url
      ? `https://image.thum.io/get/width/640/crop/480/noanimate/${project.url}`
      : null);

  // Pas d'image, ou chargement raté : on retombe sur le dégradé
  if (!src || failed) {
    return <div className={`thumb-art ${project.art}`} />;
  }

  return (
    <img
      className="thumb-shot"
      src={src}
      alt={
        project.image
          ? `Aperçu archivé du site ${project.name}`
          : `Aperçu du site ${project.name}`
      }
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}