"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

type VantaBackgroundProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function VantaBackground({
  children,
  className = "",
  id,
}: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x001011,
        midtoneColor: 0x6ccff6,
        lowlightColor: 0x001011,
        highlightColor: 0x001011,
        blurFactor: 0.9,
        speed: 0.6,
        zoom: 0.3,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect?.destroy) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef}
      id={id}
      className={`relative w-full min-h-screen flex items-center justify-center px-6 ${className}`}
    >
      {children}
    </section>
  );
}
