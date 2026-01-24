"use client";

import { Suspense, useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  skeleton,
  minHeight = 300,
  id,
}: {
  children: React.ReactNode;
  skeleton?: React.ReactNode;
  minHeight?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (id && window.location.hash === `#${id}`) {
        setReady(true);
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes
    window.addEventListener("hashchange", checkHash);

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

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", checkHash);
    };
  }, [id]);

  useEffect(() => {
    if (
      ready &&
      id &&
      typeof window !== "undefined" &&
      window.location.hash === `#${id}`
    ) {
      const element = ref.current;
      if (element) {
        // Slight delay to allow for rendering and layout calculation
        const timeout = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return () => clearTimeout(timeout);
      }
    }
  }, [ready, id]);

  return (
    <div
      id={id}
      ref={ref}
      style={{
        minHeight: ready ? "auto" : minHeight,
        scrollMarginTop: "100px",
      }}
      className="w-full"
    >
      {ready ? (
        <Suspense fallback={skeleton}>{children}</Suspense>
      ) : (
        <div
          style={{ height: minHeight }}
          className="flex items-center justify-center w-full"
        >
          {skeleton || (
            <div className="w-full h-full animate-pulse bg-gray-100 rounded-[3rem]" />
          )}
        </div>
      )}
    </div>
  );
}
