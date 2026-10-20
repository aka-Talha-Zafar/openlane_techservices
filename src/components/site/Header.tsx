import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { waLink } from "@/config/site";
import { Logo, WhatsAppGlyph } from "./common";

export const navLinks = [
  { id: "industries", label: "Industries" },
  { id: "services", label: "Services" },
  { id: "how-it-works", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
];

export function Header() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const linkCls = (id: string) =>
    `text-sm font-medium transition-colors hover:text-amber ${active === id ? "text-amber" : "text-on-dark"}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${solid ? "bg-ink/90 backdrop-blur-md border-b border-graphite-line" : "bg-transparent"}`}>
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" aria-label="Openlane TechServices, back to top"><Logo /></a>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={linkCls(l.id)} aria-current={active === l.id ? "true" : undefined}>{l.label}</a>
          ))}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary !h-10 !px-5 !text-sm">WhatsApp us</a>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber text-ink">
            <WhatsAppGlyph />
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-graphite-line text-on-dark">
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-graphite-line bg-ink text-on-dark sm:max-w-sm">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="pt-2"><Logo /></div>
              <nav aria-label="Mobile" className="mt-10 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={`border-b border-graphite-line py-4 font-display text-2xl ${active === l.id ? "text-amber" : "text-on-dark"}`}>{l.label}</a>
                ))}
              </nav>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 w-full">WhatsApp us</a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
