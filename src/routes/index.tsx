import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About, Contact, Footer, Journey, Marquee, Nav, Stack, Work } from "@/components/portfolio/Sections";

const title = "Pravin Sakhare — Systems Engineer · Cloud Ops";
const description =
  "Cloud Operations Engineer keeping multi-region SaaS on AWS & Kubernetes at 99.8% uptime. AWS Certified, open to Systems Engineer roles.";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Stack />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
