import { useState, type FormEvent } from "react";
import { Instagram, Linkedin, Mail, MapPin, Clock, Phone } from "lucide-react";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { igLink, isFilled, site, waLink } from "@/config/site";
import { Logo, Reveal, SectionHead, WhatsAppGlyph } from "./common";
import { navLinks } from "./Header";

const ic = { strokeWidth: 1.5, className: "h-5 w-5" };
const initials = (n: string) => (isFilled(n) ? n.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase() : "");

export function About() {
  return (
    <section id="about" className="section-pad bg-ink text-on-dark">
      <div className="container-x">
        <SectionHead dark eyebrow="About" title="Two friends, building for businesses everywhere." />
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-5 text-on-dark/85">
            <p>We started Openlane TechServices after noticing how many good businesses have no website at all. They run on Instagram, Facebook and a WhatsApp number, and lose customers to whoever shows up first on Google.</p>
            <p>So we work the other way around. We build a draft first, with your name and branding on it, and show it to you before we ask for any payment.</p>
            <p>We work with businesses over WhatsApp and video calls, wherever they are. You deal directly with the two of us, and we make sure that every project gets our full attention.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {site.founders.map((f, i) => (
              <Reveal key={i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-graphite-line bg-graphite p-6 card-lift">
                  {f.photo ? (
                    <img src={f.photo} alt={`Portrait of ${f.name}`} className="h-20 w-20 rounded-full object-cover ring-2 ring-amber" />
                  ) : (
                    <span aria-hidden="true" className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-ink font-display text-2xl text-on-dark ring-2 ring-amber">{initials(f.name)}</span>
                  )}
                  <h3 className="mt-5 text-xl">{f.name}</h3>
                  <p className="mt-1 text-sm text-on-dark">{f.role}</p>
                  <p className="mt-3 text-sm text-amber">{f.bio}</p>
                  <div className="mt-auto flex gap-2 pt-4">
                    {isFilled(f.instagram) && <a href={igLink(f.instagram)} target="_blank" rel="noopener noreferrer" aria-label={`${f.name} on Instagram`} className="text-muted-dark hover:text-amber"><Instagram {...ic} /></a>}
                    {isFilled(f.linkedin) && <a href={f.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${f.name} on LinkedIn`} className="text-muted-dark hover:text-amber"><Linkedin {...ic} /></a>}
                    {isFilled(f.whatsapp) && <a href={waLink(site.defaultMessage, f.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label={`Message ${f.name} on WhatsApp`} className="inline-flex items-center gap-2 text-sm text-muted-dark hover:text-amber"><span>WhatsApp</span><WhatsAppGlyph /></a>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-12 flex items-center gap-3 text-muted-dark">
          <MapPin strokeWidth={1.5} className="h-5 w-5 text-amber" />
          <p>Based in Pakistan. We work with businesses anywhere.</p>
        </Reveal>
      </div>
    </section>
  );
}

const faqs = [
  ["I already get customers from Instagram. Do I still need a website?", "Instagram is good for showing what you do, but you don't control it, and people searching on Google rarely land there. A website puts your address, timings, prices and contact details in one place that belongs to you. It works alongside Instagram, not instead of it."],
  ["What if I don't like the draft?", "Then you've lost nothing. The draft is free, and you only pay when you decide to go ahead."],
  ["How long does it take?", "Once we have your details and photos, most one-page sites are ready in 5 to 7 days. Larger sites take longer, and we give you a date before we start."],
  ["What do you need from me?", "Your business name, your logo if you have one, a few photos, your timings and contact details, and a short note on what you offer. If something is missing, we'll help you put it together."],
  ["How do payments work?", "Half to start and half when you approve the finished site. In Pakistan you can pay by bank transfer, Easypaisa or JazzCash. From abroad: [INTERNATIONAL PAYMENT OPTIONS]."],
  ["Will I own the website?", "Yes. When the project is finished we hand over your domain, files and logins. Nothing is held back."],
  ["What happens after the first year?", "Your domain and hosting renew each year at cost. Website Care is optional. If you skip it, you can still message us whenever you need a change, and we'll quote it before we start."],
  ["Do you work with businesses outside Pakistan?", "Yes. The work happens over WhatsApp and video calls, so where you are doesn't matter."],
];

export function Faq() {
  return (
    <section id="faq" className="section-pad bg-ivory text-on-light">
      <div className="container-x">
        <div className="mx-auto max-w-[760px]">
          <SectionHead eyebrow="Questions" title="Straight answers to common questions." />
          <Reveal className="mt-10">
            <Accordion type="single" collapsible className="border-t border-sand">
              {faqs.map(([q, a], i) => (
                <AccordionItem key={i} value={`q${i}`} className="border-sand">
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-medium hover:no-underline hover:text-amber-text md:text-xl">{q}</AccordionTrigger>
                  <AccordionContent className="pb-5 text-base text-muted-light">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const fieldCls = "mt-2 block w-full rounded-xl border border-graphite-line bg-ink px-4 py-3 text-on-dark placeholder:text-muted-dark/60 focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/40";

export function Contact() {
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    const name = v("name"), business = v("business"), type = v("type"), phone = v("phone"), message = v("message");
    const errs: { name?: string; phone?: string } = {};
    if (!name) errs.name = "Please add your name.";
    if (!phone) errs.phone = "Please add your WhatsApp number.";
    else if (!/^[+\d][\d\s-]{6,}$/.test(phone)) errs.phone = "Please check this number.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    let intro = `Hello Openlane TechServices, I'm ${name}`;
    if (business) intro += ` from ${business}`;
    if (type) intro += business ? ` (${type})` : ` (${type})`;
    intro += ".";
    const parts = [intro];
    if (message) parts.push(/[.!?]$/.test(message) ? message : `${message}.`);
    parts.push(`You can reach me on ${phone}.`);
    window.open(waLink(parts.join(" ")), "_blank", "noopener,noreferrer");
    toast("Opening WhatsApp");
  };

  const cards = [
    { icon: <WhatsAppGlyph />, label: "WhatsApp", value: site.phoneDisplay, href: waLink() },
    { icon: <Mail {...ic} />, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: <MapPin {...ic} />, label: "Location", value: "Based in Pakistan. Working remotely with businesses anywhere." },
    { icon: <Clock {...ic} />, label: "Hours", value: site.hours },
  ];

  return (
    <section id="contact" className="section-pad bg-ink text-on-dark">
      <div className="container-x">
        <SectionHead dark eyebrow="Contact" title="Tell us what you do. We'll show you what it could look like." intro="Message us on WhatsApp or fill in the short form. We reply the same day, Monday to Saturday, Pakistan time." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <ul className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="text-amber">{c.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-dark">{c.label}</span>
                    {c.label === "Email" ? (
                      <a href={c.href} className="mt-1 block whitespace-nowrap text-on-dark underline decoration-amber underline-offset-4 select-text">{c.value}</a>
                    ) : (
                      <span className="mt-1 block text-on-dark">{c.value}</span>
                    )}
                  </span>
                </>
              );
              return (
                <Reveal as="li" key={c.label}>
                  {c.href && c.label !== "Email" ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border border-graphite-line bg-graphite p-5 card-lift">{inner}</a>
                  ) : (
                    <div className="flex items-start gap-4 rounded-2xl border border-graphite-line bg-graphite p-5">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </ul>
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-graphite-line bg-graphite p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">Name <span className="text-amber">*</span>
                  <input name="name" autoComplete="name" required aria-invalid={!!errors.name} className={fieldCls} />
                  {errors.name && <span className="mt-1.5 block text-sm text-amber" role="alert">{errors.name}</span>}
                </label>
                <label className="block text-sm font-medium">Business name
                  <input name="business" autoComplete="organization" className={fieldCls} />
                </label>
                <label className="block text-sm font-medium">Type of business
                  <select name="type" defaultValue="" className={fieldCls}>
                    <option value="">Choose one</option>
                    {["Café", "Restaurant", "Gym", "Salon", "Clinic", "Boutique", "Academy", "Other"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </label>
                <label className="block text-sm font-medium">WhatsApp number <span className="text-amber">*</span>
                  <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="03XX XXXXXXX" required aria-invalid={!!errors.phone} className={fieldCls} />
                  {errors.phone && <span className="mt-1.5 block text-sm text-amber" role="alert">{errors.phone}</span>}
                </label>
                <label className="block text-sm font-medium sm:col-span-2">Message <span className="text-muted-dark">(optional)</span>
                  <textarea name="message" rows={4} className={fieldCls} />
                </label>
              </div>
              <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto"><WhatsAppGlyph />Send on WhatsApp</button>
              <p className="mt-5 text-sm text-muted-dark">Prefer email? <a href={`mailto:${site.email}`} className="text-on-dark underline decoration-amber underline-offset-4">{site.email}</a></p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-footer-ink py-16 text-on-dark">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-dark">Web design for all businesses, worldwide.</p>
          </div>
          <nav aria-label="Footer">
            <h2 className="eyebrow !font-sans !text-[12px] !tracking-[0.16em] text-amber">Explore</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => <li key={l.id}><a href={`#${l.id}`} className="text-muted-dark hover:text-on-dark">{l.label}</a></li>)}
            </ul>
          </nav>
          <div>
            <h2 className="eyebrow !font-sans !text-[12px] !tracking-[0.16em] text-amber">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-dark">
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-on-dark"><Phone strokeWidth={1.5} className="h-4 w-4" />WhatsApp</a></li>
              <li><a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 whitespace-nowrap text-[13px] hover:text-on-dark"><Mail strokeWidth={1.5} className="h-4 w-4 shrink-0" />{site.email}</a></li>
              <li className="inline-flex items-center gap-2"><MapPin strokeWidth={1.5} className="h-4 w-4" />{site.location}</li>
            </ul>
          </div>
          {isFilled(site.instagram) && (
            <div>
              <h2 className="eyebrow !font-sans !text-[12px] !tracking-[0.16em] text-amber">Follow</h2>
              <a href={igLink(site.instagram)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-dark hover:text-on-dark"><Instagram strokeWidth={1.5} className="h-4 w-4" />Instagram</a>
            </div>
          )}
        </div>
        <div className="lane-dark mt-12" />
        <p className="mt-6 text-sm text-muted-dark">© {new Date().getFullYear()} Openlane TechServices. Pakistan.</p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-wa-pulse fixed z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
      style={{ right: "max(20px, env(safe-area-inset-right))", bottom: "max(20px, env(safe-area-inset-bottom))" }}
    >
      <WhatsAppGlyph className="h-6 w-6" />
    </a>
  );
}
