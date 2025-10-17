"use client";

import dynamic from "next/dynamic";

const GlassSurface = dynamic(() => import("@/components/GlassSurface"), {
  ssr: false,
});

export default function GlassBottomBar() {
  return (
  
      <GlassSurface
        width={500}
        height={250}
        borderRadius={0}
        blur={11}
        opacity={0.93}
        distortionScale={-180}
        mixBlendMode="difference"
        className="absolute"
        style={{ borderRadius: 0 }}
      />
  );
}
