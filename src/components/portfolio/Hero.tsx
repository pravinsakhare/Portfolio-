import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { ArrowDownRight, MapPin, Sparkles } from "lucide-react";
import { profile } from "./data";

const HeroScene = lazy(() => import("./HeroScene"));

function SceneFallback() {
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-[12%]">
      <div className="size-72 animate-pulse rounded-full bg-violet/40 blur-3xl" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-grid">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute inset-0">
        <ClientOnly fallback={<SceneFallback />}>
          <Suspense fallback={<SceneFallback />}>
            <HeroScene />
          </Suspense>
        </ClientOnly>
      </div>

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 md:px-8">
        <div className="pointer-events-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex -rotate-3 items-center gap-2 rounded-full bg-primary px-4 py-1.5 font-mono text-xs font-bold text-primary-foreground shadow-pop-pink">
              👋 hey, i'm
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              open to Systems Engineer roles
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,11vw,8.5rem)] font-black leading-[0.85] tracking-tight">
            <span className="block">{profile.first}</span>
            <span className="block text-stroke">{profile.last}</span>
          </h1>

          <p className="mt-6 font-display text-lg font-semibold md:text-2xl">
            <span className="text-gradient">{profile.role}</span>
          </p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            I keep production alive at 3am so your users never notice. AWS, Kubernetes, Linux &amp; a lot of
            dashboards. <span className="text-foreground">99.8% uptime, zero drama.</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground shadow-pop-pink transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
            >
              see the receipts <ArrowDownRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 font-display text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
            >
              slide into my inbox
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" /> {profile.location} · {profile.relocation}</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles className="size-3.5" /> AWS Certified Cloud Practitioner</span>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-28 right-6 z-10 hidden rotate-6 animate-float rounded-2xl border border-border bg-card/80 p-4 font-mono text-xs backdrop-blur md:block"
        style={{ ["--r" as string]: "6deg" }}
      >
        <div className="text-muted-foreground">$ uptime --prod</div>
        <div className="mt-1 text-2xl font-bold text-primary">99.8%</div>
        <div className="text-muted-foreground">multi-region · 24/7</div>
      </div>
    </section>
  );
}
