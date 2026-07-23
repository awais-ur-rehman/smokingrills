"use client";

import { useEffect } from "react";

const WORDS = ["Burgers", "Steaks", "Pizza"];

export function TitleCycler() {
  useEffect(() => {
    let i = 0;
    document.title = `Smokin' Grill | ${WORDS[i]}`;
    const id = setInterval(() => {
      i = (i + 1) % WORDS.length;
      document.title = `Smokin' Grill | ${WORDS[i]}`;
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return null;
}
