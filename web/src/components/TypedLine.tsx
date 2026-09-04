"use client";

import { useEffect, useState } from "react";

export default function TypedLine({ text }: { text: string }) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const id = setTimeout(() => {
        setShown(text);
        setDone(true);
      }, 0);
      return () => clearTimeout(id);
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 16);
    return () => clearInterval(id);
  }, [text]);

  return (
    <div className="out">
      {shown}
      {!done && <span className="caret" />}
    </div>
  );
}