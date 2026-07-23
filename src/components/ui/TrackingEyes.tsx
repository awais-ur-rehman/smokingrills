"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

function useEyeTracking(
  eyeRefs: React.RefObject<HTMLDivElement | null>[],
  pupilRefs: React.RefObject<HTMLDivElement | null>[],
  maxDistance = 6,
) {
  useEffect(() => {
    function handleMove(e: MouseEvent) {
      eyeRefs.forEach((eyeRef, i) => {
        const eye = eyeRef.current;
        const pupil = pupilRefs[i].current;
        if (!eye || !pupil) return;
        const rect = eye.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.min(maxDistance, Math.hypot(dx, dy) / 10);
        const angle = Math.atan2(dy, dx);
        pupil.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [eyeRefs, pupilRefs, maxDistance]);
}

function Eye({
  eyeRef,
  pupilRef,
}: {
  eyeRef: React.RefObject<HTMLDivElement | null>;
  pupilRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 60 30"
        className="absolute -top-4 left-1/2 w-3/4 -translate-x-1/2"
        aria-hidden
      >
        <path
          d="M6 26C10 6 22 2 30 8"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div
        ref={eyeRef}
        className="flex h-16 w-12 items-center justify-center rounded-full bg-white sm:h-20 sm:w-14"
      >
        <div
          ref={pupilRef}
          className="h-1/3 w-1/3 rounded-full bg-black transition-transform duration-75 ease-out"
        />
      </div>
    </div>
  );
}

export function TrackingEyes({ className }: { className?: string }) {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  useEyeTracking(
    [leftEyeRef, rightEyeRef],
    [leftPupilRef, rightPupilRef],
  );

  return (
    <div className={cn("flex items-end justify-center gap-6", className)}>
      <Eye eyeRef={leftEyeRef} pupilRef={leftPupilRef} />
      <Eye eyeRef={rightEyeRef} pupilRef={rightPupilRef} />
    </div>
  );
}
