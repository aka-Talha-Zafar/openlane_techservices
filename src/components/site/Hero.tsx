import { useCallback, useEffect, useState } from "react";
import { slides, waLink } from "@/config/site";
import { WhatsAppGlyph } from "./common";

function usePrefersReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(m.matches);
    const f = () => setR(m.matches);
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return r;
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [visitedSlides, setVisitedSlides] = useState<Set<number>>(() => new Set([0]));
  const paused = reduced;

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearTimeout(t);
  }, [index, paused]);

  useEffect(() => {
    setVisitedSlides((visited) => {
      if (visited.has(index)) return visited;
      const next = new Set(visited);
      next.add(index);
      return next;
    });
  }, [index]);

  // fetch the next photo ahead of the transition
  useEffect(() => {
    const next = slides[(index + 1) % slides.length]?.img;
    if (next) { const im = new Image(); im.src = next; }
  }, [index]);

  const go = useCallback((i: number) => setIndex(i), []);

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[max(100svh,640px)] items-center overflow-hidden bg-ink text-on-dark"
    >
      <div className="absolute inset-0" aria-hidden={false}>
        {slides.map((s, i) => {
          const isActive = i === index;
          return (
            <div key={s.key} className={`absolute inset-0 transition-opacity duration-[1200ms] ${isActive ? "opacity-100" : "opacity-0"}`} aria-hidden={!isActive}>
              {s.img ? (
                <img
                  src={i === 0 || isActive || i === (index + 1) % slides.length ? s.img : undefined}
                  alt={s.alt}
                  fetchPriority={i === 0 ? "high" : "low"}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`h-full w-full object-cover ${visitedSlides.has(i) && !reduced ? "animate-hero-zoom" : ""}`}
                  style={{ animationPlayState: paused ? "paused" : "running" }}
                />
              ) : (
                <div role="img" aria-label={`Photo placeholder: ${s.label}`} className="flex h-full w-full items-center justify-end bg-graphite pr-[8%]">
                  <span className="font-display text-5xl italic text-muted-dark/40 md:text-7xl">{s.label}</span>
                </div>
              )}
            </div>
          );
        })}
        <div className="absolute inset-0 bg-ink/70 md:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent md:hidden" />
        <div className="hero-readable-zone absolute inset-y-0 left-0 hidden w-[62%] md:block" />
        <div className="absolute inset-0 hidden md:block" style={{ background: "linear-gradient(90deg, rgba(15,18,20,.88) 0%, rgba(15,18,20,.62) 45%, rgba(15,18,20,.25) 100%)" }} />
      </div>

      <div className="container-x relative z-10 pb-28 pt-28">
        <div className="max-w-[640px]">
          <p className="eyebrow text-amber">Web design studio for your business</p>
          <h1 className="mt-5 text-on-dark">See your website <em className="text-amber">before</em> you pay for it.</h1>
          <p className="mt-6 max-w-xl text-[1.05rem] text-on-dark/85 md:text-lg">
            Tell us about your business and we'll build a working draft with your name, logo and services on it. If you like it, we finish it and launch within about a week. If you don't, you owe us nothing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><WhatsAppGlyph />Get your free draft</a>
            <a href="#how-it-works" className="btn btn-ghost-dark">See how it works</a>
          </div>
          <p className="mt-5 text-sm text-muted-dark">Free draft · No payment until you approve · Available worldwide</p>
        </div>
      </div>

      <div className="container-x absolute inset-x-0 bottom-6 z-10 flex flex-wrap items-center gap-x-6 gap-y-3 md:bottom-10">
        <p className="text-base font-medium text-on-dark/85 md:text-[1.05rem]" aria-live="polite">
          We build websites for <span className="font-display text-lg italic text-on-dark">{slides[index]?.label.toLowerCase()}</span>
        </p>
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button key={s.key} type="button" onClick={() => go(i)} aria-label={`Show ${s.label}`} aria-current={i === index} className="flex h-7 items-center">
              <span className="relative block h-[3px] w-8 overflow-hidden rounded bg-on-dark/25 md:w-10">
                {i === index && (
                  <span
                    key={`${index}-${reduced}`}
                    className={`absolute inset-0 bg-amber ${reduced ? "" : "animate-bar-fill"}`}
                    style={{ animationPlayState: paused ? "paused" : "running" }}
                  />
                )}
                {i < index && <span className="absolute inset-0 bg-on-dark/50" />}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
