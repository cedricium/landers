"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typewriter({ sequence, className, style }) {
  return (
    <TypeAnimation
      cursor
      preRenderFirstString
      wrapper="span"
      speed={2}
      repeat={Infinity}
      sequence={sequence}
      className={className}
      style={style}
    />
  );
}
