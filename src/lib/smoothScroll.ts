export const smoothScrollTo = (target: string, duration: number = 1000) => {
  // Only handle anchor links (starting with #)
  if (!target.startsWith('#') && target !== 'body') {
    console.warn('smoothScrollTo only handles anchor links (#) or "body"');
    return;
  }

  // Start animation immediately
  let startTime: number | null = null;
  let startPosition: number;
  let targetPosition: number;
  let distance: number;

  // easeOutQuad - starts fast, ends smooth
  const easeOutQuad = (t: number): number => {
    return t * (2 - t);
  };

  const animation = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime;
      startPosition = window.pageYOffset;
      
      const element = target === "body" ? document?.body : document?.querySelector(target);
      if (!element) return;
      
      targetPosition = target === "body" ? 0 : element?.getBoundingClientRect().top + window.pageYOffset;
      distance = targetPosition - startPosition - (target === "body" ? 0 : 80);
    }

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOutQuad(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
