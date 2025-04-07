import React, { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        let start = 0;
        const increment = target / 200;

        const step = () => {
          start += increment;
          if (start < target) {
            setCount(Math.ceil(start));
            requestAnimationFrame(step);
          } else {
            setCount(target);
            setHasAnimated(true);
          }
        };

        step();
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <h2 ref={ref}>{count}</h2>
  );
};

export default AnimatedCounter;
