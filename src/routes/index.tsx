import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Industries, Services, WhyOpenlane, HowItWorks, Pricing } from "@/components/site/Sections";
import { About, Faq, Contact, Footer, FloatingWhatsApp } from "@/components/site/Sections2";

const title = "Openlane TechServices | Websites for small businesses";
const description =
  "Openlane TechServices builds fast, mobile-friendly websites for small businesses anywhere. See a free working draft with your business name on it before you pay.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Industries />
        <Services />
        <WhyOpenlane />
        <HowItWorks />
        <Pricing />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" theme="dark" />
    </>
  );
}
