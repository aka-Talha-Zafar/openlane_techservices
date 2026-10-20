import { useEffect, useRef, type ReactNode } from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" fill="none" stroke="var(--amber)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="50 9.7" transform="rotate(20 12 12)" />
      </svg>
      <span className="font-display text-[1.3rem] font-semibold leading-none tracking-tight text-on-dark">Openlane</span>
      <span className="text-[1.3rem] font-semibold leading-none tracking-tight text-muted-dark">TechServices</span>
    </span>
  );
}

export function Reveal({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tag ref={ref as any} className={`reveal ${className}`}>{children}</Tag>;
}

export function SectionHead({ eyebrow, title, intro, dark }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <Reveal className="max-w-2xl">
      <p className={`eyebrow ${dark ? "text-amber" : "text-amber-text"}`}>{eyebrow}</p>
      <h2 className={`mt-4 ${dark ? "text-on-dark" : "text-on-light"}`}>{title}</h2>
      {intro && <p className={`mt-5 ${dark ? "text-muted-dark" : "text-muted-light"}`}>{intro}</p>}
    </Reveal>
  );
}

export function IconCircle({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${dark ? "bg-amber/10 text-amber" : "bg-amber/15 text-amber-text"}`}>
      {children}
    </span>
  );
}

export function WhatsAppGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.25a9.72 9.72 0 0 0-8.4 14.6L2.3 21.7l5.04-1.27A9.72 9.72 0 1 0 12 2.25Zm0 17.75a7.98 7.98 0 0 1-4.07-1.11l-.29-.17-2.99.75.8-2.91-.19-.3A7.98 7.98 0 1 1 12 20Zm4.38-5.96c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
