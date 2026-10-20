import {
  Monitor, MapPinned, MessageSquare, Palette, Check, Wrench,
} from "lucide-react";
import { site, slides, waLink } from "@/config/site";
import { IconCircle, Reveal, SectionHead } from "./common";

const ic = { strokeWidth: 1.5, className: "h-5 w-5" };

export function Commitments() {
  const items = [
    ["5 to 7 days", "Typical time from go-ahead to launch"],
    ["Same day", "WhatsApp replies, Monday to Saturday"],
    ["50 / 50", "Half to start, half when you approve"],
    ["100% yours", "Domain, files and logins handed over"],
  ];
  return (
    <section aria-label="Our commitments" className="bg-ink py-16 text-on-dark md:py-20">
      <div className="container-x">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {items.map(([h, c]) => (
            <Reveal as="li" key={h} className="border-t border-graphite-line pt-6">
              <p className="font-display text-3xl font-medium tracking-tight md:text-[2.6rem] md:leading-none">{h}</p>
              <p className="mt-3 text-sm text-muted-dark md:text-base">{c}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const industries = [
  ["Cafés", "Menu, timings, location and a one-tap WhatsApp order button."],
  ["Restaurants", "Menu, photos, location, and a button for table bookings or delivery enquiries."],
  ["Gyms and fitness studios", "Membership plans, trainers, class timings and a trial-session button."],
  ["Salons and spas", "Services with prices, a gallery of your work and simple appointment requests."],
  ["Clinics and dentists", "Doctors, treatments, timings and a number patients can tap to call."],
  ["Boutiques and fashion", "A tidy catalogue that looks as good as your Instagram, with enquiries on WhatsApp."],
];

export function Industries() {
  const chips = ["academies and tutors", "event and wedding services", "real estate agents", "interior designers", "workshops and repair shops", "photographers"];
  const industryImages = [
    ["Café interior with a bright communal table", site.industryImages.cafe],
    ["Restaurant table setting in a refined dining room", site.industryImages.restaurant],
    ["Modern gym with functional training equipment", site.industryImages.gym],
    ["Bright salon interior with styling stations", site.industryImages.salon],
    ["Modern clinic waiting room", site.industryImages.clinic],
    ["Curated clothing display in a boutique", site.industryImages.boutique],
  ] as const;
  return (
    <section id="industries" className="section-pad bg-ivory text-on-light">
      <div className="container-x">
        <SectionHead eyebrow="Who we build for" title="Before they walk in, they look you up." intro="Cafés, clinics, salons, gyms, boutiques and more. For most customers the first visit happens on a phone, in Google or Instagram, long before they see your door. We build the page they land on." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(([t, d], i) => {
            const [alt, image] = industryImages[i]!;
            return (
              <Reveal as="li" key={t}>
                <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-sand bg-graphite shadow-soft card-lift">
                  {image ? (
                    <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  ) : (
                    <div role="img" aria-label={`Photo placeholder: ${t}`} className="flex h-full w-full items-start justify-end p-6">
                      <span className="font-display text-3xl italic text-muted-dark/40">{t}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-on-dark">
                    <h3 className="text-2xl">{t}</h3>
                    <p className="mt-2 text-sm text-on-dark/80 transition-all duration-500 [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:max-h-24 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:max-h-24 [@media(hover:hover)]:group-focus-within:opacity-100">{d}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-semibold">Also:</span>
            {chips.map((c) => <span key={c} className="rounded-full border border-sand bg-paper px-3.5 py-1.5 text-sm text-muted-light">{c}</span>)}
          </div>
          <p className="mt-6 text-muted-light">Don't see your trade? Message us and we'll tell you if we're a good fit.</p>
          <p className="mt-3 text-xs text-muted-light">Photography is for illustration and does not show client work.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  const items = [
    [<Monitor {...ic} />, "Website design and build", "Fast, clear, and built around what your customers check first, including what you offer, where you are, and how to reach you."],
    [<MapPinned {...ic} />, "Google Business Profile", "When someone searches for your kind of business nearby, they find the right address, timings and photos."],
    [<MessageSquare {...ic} />, "WhatsApp enquiries", "One tap opens a chat with your message already typed. Customers reach you the way they already prefer."],
    [<Palette {...ic} />, "Logo and brand basics", "No logo yet, or three different ones? We sort out a simple logo, colours and fonts so your site, signboard and Instagram look like one business."],
  ] as const;
  return (
    <section id="services" className="section-pad bg-ivory-deep text-on-light">
      <div className="container-x">
        <SectionHead eyebrow="What we do" title="A website that brings in enquiries." intro="Anyone can put up a page. We focus on the parts that make people call, message or walk in." />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map(([icon, t, d]) => (
            <Reveal as="li" key={t} className="h-full">
              <div className="h-full rounded-2xl border border-sand bg-paper p-7 shadow-soft card-lift md:p-9">
                <IconCircle>{icon}</IconCircle>
                <h3 className="mt-6 text-2xl">{t}</h3>
                <p className="mt-3 text-muted-light">{d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function WhyOpenlane() {
  const items = [
    ["A real draft first", "We build it before you pay, so you judge a working site, not a promise."],
    ["Meet us your way", "Over WhatsApp or a video call, whichever you prefer. Either way, you talk directly to the people building your site."],
    ["Made for phones", "Most of your customers will open your site on a phone, often on mobile data. We build for that first and keep pages light."],
    ["Easy to find", "Clean page structure, proper titles and a Google listing, so a search for your kind of business nearby has something to show."],
    ["Prices in writing", "You get the full price and what it includes before work starts. No surprise invoices later."],
    ["It's yours", "Domain, files and logins are handed over when we finish. If you ever want to move on, you can."],
  ] as const;
  return (
    <section aria-labelledby="why-title" className="section-pad bg-ink text-on-dark">
      <div className="container-x">
        <SectionHead dark eyebrow="Why Openlane" title="You'll know what you're getting before you commit." intro="A real draft, a written price and no surprises." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([t, d]) => (
            <Reveal as="li" key={t} className="h-full">
              <div className="h-full rounded-2xl border border-graphite-line bg-graphite p-7 card-lift">
                <h3 className="text-xl text-amber">{t}</h3>
                <p className="mt-3 text-[0.95rem] text-muted-dark">{d}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["Say hello", "Message us on WhatsApp or book a call. Tell us what you do and who your customers are."],
    ["See your draft", "We build a working preview with your name and branding and send it to you, or show it on your own phone."],
    ["Make it right", "Tell us what to change: wording, photos, colours, layout. Revision rounds are included in every package."],
    ["Go live", "We connect your domain, publish the site, sort out your Google listing and stay on WhatsApp for questions."],
  ];
  return (
    <section id="how-it-works" className="section-pad bg-ivory text-on-light">
      <div className="container-x">
        <SectionHead eyebrow="How it works" title="From message to live website in about a week." intro="You see something real at step two, before any money changes hands." />
        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden="true" className="lane-light absolute left-7 right-7 top-7 hidden lg:block" />
          <span aria-hidden="true" className="lane-light-v absolute bottom-8 left-7 top-8 lg:hidden" />
          {steps.map(([t, d], i) => (
            <Reveal as="li" key={t} className="relative flex gap-6 lg:block">
              <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-amber bg-ivory font-display text-lg text-amber-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl lg:mt-6">{t}</h3>
                <p className="mt-3 text-muted-light">{d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Pricing() {
  const p = site.pricing;
  const plans = [
    {
      name: "Essentials", sub: "For shops and first-time websites", price: p.essentials, suffix: "one-time", cta: "Choose Essentials", featured: false,
      items: ["One-page site: hero, about, services or menu, gallery, contact", "Works on phones, tablets and desktops", "WhatsApp button and Google Maps location", "Basic search setup: page title, description, sharing image", "Domain and hosting set up for you, billed at cost", "Two rounds of revisions"],
    },
    {
      name: "Business", sub: "For businesses that need more than one page", price: p.business, suffix: "one-time", cta: "Choose Business", featured: true,
      items: ["Up to five pages: Home, About, Services or Menu, Gallery, Contact", "Domain and hosting included for the first year", "Google Business Profile set up or tidied", "WhatsApp enquiry form with the message pre-filled", "Light help with wording and photo editing", "Three rounds of revisions"],
    },
    {
      name: "Custom", sub: "For ordering, booking or a bigger catalogue", price: p.custom, suffix: "", cta: "Talk to us", featured: false,
      items: ["Everything in Business", "Online menu with WhatsApp ordering, appointment booking, or a larger product catalogue", "Extra languages, including Urdu", "As many pages as the project needs", "Written scope and delivery date before we start"],
    },
  ];
  return (
    <section id="pricing" className="section-pad bg-ivory-deep text-on-light">
      <div className="container-x">
        <SectionHead eyebrow="Pricing" title="Simple pricing, agreed before we start." intro="Pick a package, or tell us what you need and we'll quote it. You pay half to start and half when you approve the finished site." />
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((pl) => (
            <Reveal key={pl.name} className={pl.featured ? "lg:-translate-y-3" : ""}>
              <div className={`relative flex h-full flex-col rounded-2xl border p-8 card-lift ${pl.featured ? "border-amber/50 bg-ink text-on-dark shadow-[0_20px_50px_rgb(15_18_20/0.25)]" : "border-sand bg-paper shadow-soft"}`}>
                {pl.featured && <span className="eyebrow absolute -top-3 left-8 rounded-full bg-amber px-3 py-1 !text-[11px] text-ink">Recommended</span>}
                <h3 className="text-3xl">{pl.name}</h3>
                <p className={`mt-2 text-sm ${pl.featured ? "text-muted-dark" : "text-muted-light"}`}>{pl.sub}</p>
                <p className="mt-6 font-display text-4xl tracking-tight">
                  {pl.price} {pl.suffix && <span className={`font-sans text-sm tracking-normal ${pl.featured ? "text-muted-dark" : "text-muted-light"}`}>{pl.suffix}</span>}
                </p>
                <div className={`my-6 ${pl.featured ? "lane-dark" : "lane-light"}`} />
                <ul className="flex-1 space-y-3">
                  {pl.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[0.95rem]">
                      <Check strokeWidth={1.5} className={`mt-1 h-4 w-4 shrink-0 ${pl.featured ? "text-amber" : "text-amber-text"}`} />
                      <span className={pl.featured ? "text-on-dark/90" : ""}>{it}</span>
                    </li>
                  ))}
                </ul>
                <a href={waLink(`Hello Openlane TechServices, I'm interested in the ${pl.name} package.`)} target="_blank" rel="noopener noreferrer" className={`btn mt-8 w-full ${pl.featured ? "btn-primary" : "btn-outline-light"}`}>{pl.cta}</a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-6 rounded-2xl border border-sand bg-paper p-8 shadow-soft md:flex-row md:items-start md:gap-10">
            <IconCircle><Wrench {...ic} /></IconCircle>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-2xl">Website Care</h3>
                <p className="font-display text-xl text-amber-text">{p.care} per month</p>
              </div>
              <p className="mt-3 text-muted-light">We keep your site running and make small changes when your menu, prices, timings or photos change. Hosting, security updates and your yearly domain renewal are handled for you. Optional, and you can cancel with 30 days' notice.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <h3 className="text-xl">Extras for any package</h3>
          <ul className="mt-4 divide-y divide-sand border-y border-sand">
            {[`Logo and colours, ${p.extras.logo}`, `Google Business Profile setup (included in Business), ${p.extras.gbp}`, `Second language version, ${p.extras.urdu}`].map((e) => (
              <li key={e} className="py-3.5 text-[0.95rem]">{e}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-light">In Pakistan, pay by bank transfer, Easypaisa or JazzCash.</p>
        </Reveal>
      </div>
    </section>
  );
}
