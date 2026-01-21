"use client";

import { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  skeleton,
  minHeight = 300,
}: {
  children: React.ReactNode;
  skeleton?: React.ReactNode;
  minHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px" },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight }}>
      {ready ? children : skeleton}
    </div>
  );
}
