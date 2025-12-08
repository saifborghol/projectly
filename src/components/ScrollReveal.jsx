import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1.5,
  staggerDelay = 0.03,
}) => {
  const containerRef = useRef(null);

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

    const wordElements = el.querySelectorAll(".word");

    // Set initial state
    gsap.set(el, {
      transformOrigin: "0% 50%",
      rotate: baseRotation,
    });

    gsap.set(wordElements, {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : "none",
    });

    // Create ScrollTrigger animation that works both directions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: "top 100%",
        end: "top 5%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });

    // Rotation animation
    if (baseRotation !== 0) {
      tl.to(
        el,
        {
          rotate: 0,
          ease: "power2.out",
        },
        0
      );
    }

    // Word animations with stagger
    tl.to(
      wordElements,
      {
        opacity: 1,
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
          stagger: staggerDelay,
          ease: "power2.out",
        },
        0
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [
    scrollContainerRef,
    baseRotation,
    baseOpacity,
    blurStrength,
    enableBlur,
    animationDuration,
    staggerDelay,
  ]);

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
