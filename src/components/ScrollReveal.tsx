import { useEffect, useRef, useMemo, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1.5, // New prop for animation duration
  staggerDelay = 0.03, // New prop for word stagger
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Set initial state
    gsap.set(el, {
      transformOrigin: "0% 50%",
      rotate: baseRotation,
    });

    const wordElements = el.querySelectorAll(".word");
    gsap.set(wordElements, {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : "none",
    });

    // Create ScrollTrigger for visibility detection
    const trigger = ScrollTrigger.create({
      trigger: el,
      scroller,
      start: "top 85%", // Trigger when element is 85% down the viewport
      end: "bottom 15%", // End when element is 15% up the viewport
      onEnter: () => setIsVisible(true),
      onEnterBack: () => setIsVisible(true),
      onLeave: () => setIsVisible(false),
      onLeaveBack: () => setIsVisible(false),
    });

    return () => {
      trigger.kill();
    };
  }, [scrollContainerRef, baseRotation, baseOpacity, blurStrength, enableBlur]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isVisible) return;

    const wordElements = el.querySelectorAll(".word");

    // Create timeline for smooth animations
    const tl = gsap.timeline();

    // Rotation animation
    tl.to(
      el,
      {
        rotate: 0,
        duration: animationDuration,
        ease: "power2.out",
      },
      0
    );

    // Word animations
    tl.to(
      wordElements,
      {
        opacity: 1,
        duration: animationDuration,
        stagger: staggerDelay,
        ease: "power2.out",
      },
      0
    );

    if (enableBlur) {
      tl.to(
        wordElements,
        {
          filter: "blur(0px)",
          duration: animationDuration,
          stagger: staggerDelay,
          ease: "power2.out",
        },
        0
      );
    }

    return () => {
      tl.kill();
    };
  }, [isVisible, animationDuration, staggerDelay, enableBlur]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
