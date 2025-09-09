"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!cardLength) return;
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, bp, idx) => {
      const dist = Math.abs(latest - bp);
      return dist < Math.abs(latest - cardsBreakpoints[acc]) ? idx : acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    if (!cardLength) return;
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, cardLength]);

  const safeIndex = Math.min(
    Math.max(activeCard, 0),
    Math.max(cardLength - 1, 0)
  );
  const rightPane = content[safeIndex]?.content ?? null;

  return (
    <motion.div
      className="relative flex h-[40rem] justify-center space-x-30 overflow-y-auto  no-scrollbar"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div>
          {content.map((item, index) => {
            const key = `sc-${index}`;
            const hasCard = !!item.card;

            return (
              <div key={key}>
                {hasCard &&
                  item.card}
              </div>
            );
          })}
          <div className="h-40" />
        </div>
      </div>

      <div
        // style={{ background: backgroundGradient }}
        className={cn("sticky top-10 ", contentClassName)}
      >
        {rightPane}
      </div>
    </motion.div>
  );
};
