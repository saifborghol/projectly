// "use client";

// import React, { useEffect, useRef, useState, useMemo } from "react";
// import * as math from "mathjs";

// const DEFAULT_CONFIG: Partial<GradualBlurConfig> = {
//   position: "bottom",
//   strength: 2,
//   height: "6rem",
//   divCount: 5,
//   exponential: false,
//   zIndex: 1000,
//   animated: false,
//   duration: "0.3s",
//   easing: "ease-out",
//   opacity: 1,
//   curve: "linear",
//   responsive: false,
//   target: "parent",
//   className: "",
//   style: {},
// };

// const PRESETS = {
//   top: { position: "top", height: "6rem" },
//   bottom: { position: "bottom", height: "6rem" },
//   left: { position: "left", height: "6rem" },
//   right: { position: "right", height: "6rem" },
//   subtle: { height: "4rem", strength: 1, opacity: 0.8, divCount: 3 },
//   intense: { height: "10rem", strength: 4, divCount: 8, exponential: true },
//   smooth: { height: "8rem", curve: "bezier", divCount: 10 },
//   sharp: { height: "5rem", curve: "linear", divCount: 4 },
//   header: { position: "top", height: "8rem", curve: "ease-out" },
//   footer: { position: "bottom", height: "8rem", curve: "ease-out" },
//   sidebar: { position: "left", height: "6rem", strength: 2.5 },
//   "page-header": {
//     position: "top",
//     height: "10rem",
//     target: "page",
//     strength: 3,
//   },
//   "page-footer": {
//     position: "bottom",
//     height: "10rem",
//     target: "page",
//     strength: 3,
//   },
// };

// interface CurveFunctions {
//   [key: string]: (p: number) => number;
// }

// const CURVE_FUNCTIONS: CurveFunctions = {
//   linear: (p: number) => p,
//   bezier: (p: number) => p * p * (3 - 2 * p),
//   "ease-in": (p: number) => p * p,
//   "ease-out": (p: number) => 1 - Math.pow(1 - p, 2),
//   "ease-in-out": (p: number) =>
//     p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2,
// };

// interface GradualBlurConfig {
//   position?: "top" | "bottom" | "left" | "right";
//   strength?: number;
//   height?: string;
//   width?: string;
//   divCount?: number;
//   exponential?: boolean;
//   zIndex?: number;
//   animated?: boolean | "scroll";
//   duration?: string;
//   easing?: string;
//   opacity?: number;
//   curve?: keyof typeof CURVE_FUNCTIONS;
//   responsive?: boolean;
//   target?: "parent" | "page";
//   className?: string;
//   style?: React.CSSProperties;
//   preset?: keyof typeof PRESETS;
//   hoverIntensity?: number;
//   onAnimationComplete?: () => void;
//   // Responsive overrides
//   mobileHeight?: string;
//   tabletHeight?: string;
//   desktopHeight?: string;
//   mobileWidth?: string;
//   tabletWidth?: string;
//   desktopWidth?: string;
// }

// type MergeConfigs = (...configs: Partial<GradualBlurConfig>[]) => GradualBlurConfig;

// const mergeConfigs: MergeConfigs = (...configs) =>
//   configs.reduce((acc, c) => ({ ...acc, ...c }), {});

// interface GradientDirections {
//   [key: string]: string;
// }

// const getGradientDirection = (position: "top" | "bottom" | "left" | "right"): string => {
//   const directions: GradientDirections = {
//     top: "to top",
//     bottom: "to bottom",
//     left: "to left",
//     right: "to right",
//   };
//   return directions[position] || "to bottom";
// };

// interface DebounceFunction<T extends (...args: unknown[]) => unknown> {
//   (...args: Parameters<T>): void;
// }

// const debounce = <T extends (...args: unknown[]) => unknown>(fn: T, wait: number): DebounceFunction<T> => {
//   let t: ReturnType<typeof setTimeout>;
//   return (...a: Parameters<T>) => {
//     clearTimeout(t);
//     t = setTimeout(() => fn(...a), wait);
//   };
// };

// interface ResponsiveConfig {
//   [key: string]: any;
//   mobileHeight?: string;
//   tabletHeight?: string;
//   desktopHeight?: string;
//   mobileWidth?: string;
//   tabletWidth?: string;
//   desktopWidth?: string;
// }

// type ResponsiveKey = "height" | "width";

// const useResponsiveDimension = (
//   responsive: boolean,
//   config: ResponsiveConfig,
//   key: ResponsiveKey
// ): string | undefined => {
//   const [val, setVal] = useState<string | undefined>(config[key]);
//   useEffect(() => {
//     if (!responsive) return;
//     const calc = () => {
//       const w = window.innerWidth;
//       let v = config[key];
//       const capitalizedKey = key[0].toUpperCase() + key.slice(1);
//       if (w <= 480 && config["mobile" + capitalizedKey])
//         v = config["mobile" + capitalizedKey];
//       else if (
//         w <= 768 &&
//         config["tablet" + capitalizedKey]
//       )
//         v = config["tablet" + capitalizedKey];
//       else if (
//         w <= 1024 &&
//         config["desktop" + capitalizedKey]
//       )
//         v = config["desktop" + capitalizedKey];
//       setVal(v);
//     };
//     const deb = debounce(calc, 100);
//     calc();
//     window.addEventListener("resize", deb);
//     return () => window.removeEventListener("resize", deb);
//   }, [responsive, config, key]);
//   return responsive ? val : config[key];
// };

// interface UseIntersectionObserverOptions {
//   shouldObserve?: boolean;
// }

// const useIntersectionObserver = (
//   ref: React.RefObject<HTMLElement>,
//   shouldObserve: boolean = false
// ): boolean => {
//   const [isVisible, setIsVisible] = useState<boolean>(!shouldObserve);

//   useEffect(() => {
//     if (!shouldObserve || !ref.current) return;

//     const observer = new IntersectionObserver(
//       ([entry]: IntersectionObserverEntry[]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.1 }
//     );

//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [ref, shouldObserve]);

//   return isVisible;
// };

// const GradualBlur = (props: GradualBlurConfig) => {
//   const containerRef = useRef<HTMLElement | null>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   const config = useMemo(() => {
//     const presetConfig =
//       props.preset && PRESETS[props.preset as keyof typeof PRESETS]
//         ? PRESETS[props.preset as keyof typeof PRESETS]
//         : {};
//     return mergeConfigs(DEFAULT_CONFIG, presetConfig, props);
//   }, [props]);

//   const responsiveHeight = useResponsiveDimension(
//     !!config.responsive,
//     config,
//     "height"
//   );
//   const responsiveWidth = useResponsiveDimension(
//     !!config.responsive,
//     config,
//     "width"
//   );
//   const isVisible = useIntersectionObserver(
//     containerRef,
//     config.animated === "scroll"
//   );

//   const blurDivs = useMemo(() => {
//     const divs = [];
//     const divCount = config.divCount ?? 5;
//     const increment = 100 / divCount;
//     const currentStrength =
//       isHovered && config.hoverIntensity
//         ? (config.strength ?? 2) * config.hoverIntensity
//         : (config.strength ?? 2);

//     const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;

//     for (let i = 1; i <= divCount; i++) {
//       let progress = i / divCount;
//       progress = curveFunc(progress);

//       let blurValue;
//       if (config.exponential) {
//         blurValue = math.pow(2, progress * 4) * 0.0625 * currentStrength;
//       } else {
//         blurValue = 0.0625 * (progress * config.divCount + 1) * currentStrength;
//       }
//       const p1 = math.round((increment * i - increment) * 10) / 10;
//       const p2 = math.round(increment * i * 10) / 10;
//       const p3 = math.round((increment * i + increment) * 10) / 10;
//       const p4 = math.round((increment * i + increment * 2) * 10) / 10;
//       let gradient = `transparent ${p1}%, black ${p2}%`;
//       if (p3 <= 100) gradient += `, black ${p3}%`;
//       if (p4 <= 100) gradient += `, transparent ${p4}%`;

//       const direction = getGradientDirection(config.position);

//       const divStyle = {
//         position: "absolute",
//         inset: "0",
//         maskImage: `linear-gradient(${direction}, ${gradient})`,
//         WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
//         backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
//         WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
//         opacity: config.opacity,
//         transition:
//           config.animated && config.animated !== "scroll"
//             ? `backdrop-filter ${config.duration} ${config.easing}`
//             : undefined,
//       };

//       divs.push(<div key={i} style={divStyle} />);
//     }

//     return divs;
//   }, [config, isHovered]);

//   const containerStyle = useMemo(() => {
//     const isVertical = ["top", "bottom"].includes(config.position);
//     const isHorizontal = ["left", "right"].includes(config.position);
//     const isPageTarget = config.target === "page";

//     const baseStyle = {
//       position: isPageTarget ? "fixed" : "absolute",
//       pointerEvents: config.hoverIntensity ? "auto" : "none",
//       opacity: isVisible ? 1 : 0,
//       transition: config.animated
//         ? `opacity ${config.duration} ${config.easing}`
//         : undefined,
//       zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
//       ...config.style,
//     };

//     if (isVertical) {
//       baseStyle.height = responsiveHeight;
//       baseStyle.width = responsiveWidth || "100%";
//       baseStyle[config.position] = 0;
//       baseStyle.left = 0;
//       baseStyle.right = 0;
//     } else if (isHorizontal) {
//       baseStyle.width = responsiveWidth || responsiveHeight;
//       baseStyle.height = "100%";
//       baseStyle[config.position] = 0;
//       baseStyle.top = 0;
//       baseStyle.bottom = 0;
//     }

//     return baseStyle;
//   }, [config, responsiveHeight, responsiveWidth, isVisible]);

//   const { hoverIntensity, animated, onAnimationComplete, duration } = config;
//   useEffect(() => {
//     if (isVisible && animated === "scroll" && onAnimationComplete) {
//       const t = setTimeout(
//         () => onAnimationComplete(),
//         parseFloat(duration) * 1000
//       );
//       return () => clearTimeout(t);
//     }
//   }, [isVisible, animated, onAnimationComplete, duration]);

//   return (
//     <div
//       ref={containerRef}
//       className={`gradual-blur ${
//         config.target === "page" ? "gradual-blur-page" : "gradual-blur-parent"
//       } ${config.className}`}
//       style={containerStyle}
//       onMouseEnter={hoverIntensity ? () => setIsHovered(true) : undefined}
//       onMouseLeave={hoverIntensity ? () => setIsHovered(false) : undefined}
//     >
//       <div className="gradual-blur-inner relative w-full h-full">
//         {blurDivs}
//       </div>
//     </div>
//   );
// };
// const GradualBlurMemo = React.memo(GradualBlur);
// GradualBlurMemo.displayName = "GradualBlur";
// GradualBlurMemo.PRESETS = PRESETS;
// GradualBlurMemo.CURVE_FUNCTIONS = CURVE_FUNCTIONS;
// export default GradualBlurMemo;
