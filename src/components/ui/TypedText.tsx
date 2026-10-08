"use client";

import { useEffect, useState } from "react";

type TypedTextProps = {
  phrases: readonly string[];
};

/**
 * Efeito de digitação. Decorativo (aria-hidden): o texto acessível fica
 * por conta de quem usa o componente. Com prefers-reduced-motion, mostra
 * apenas a primeira frase, parada.
 */
export function TypedText({ phrases }: TypedTextProps) {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let phrase = 0;
    let length = phrases[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      let delay = deleting ? 35 : 70;

      if (deleting) {
        length -= 1;
        if (length === 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
          delay = 350;
        }
      } else {
        length += 1;
        if (length === phrases[phrase].length) {
          deleting = true;
          delay = 2200;
        }
      }

      setText(phrases[phrase].slice(0, length));
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 2200);
    return () => clearTimeout(timer);
  }, [phrases]);

  return (
    <span aria-hidden="true">
      {text}
      <span className="caret" />
    </span>
  );
}
