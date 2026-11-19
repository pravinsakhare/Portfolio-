import { useState, type ReactNode } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { credentials, experience, marquee, profile, projects, skillGroups, stats } from "./data";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { cn } from "@/lib/utils";

function SectionTitle({ index, kicker, children }: { index: string; kicker: string; children: ReactNode }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
        // {index} — {kicker}
      </p>
      <h2 className="mt-3 font-display text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">{children}</h2>
    </Reveal>
  );
}

export function Nav() {
  const links = [
    ["about", "#about"],
    ["work", "#work"],
    ["stack", "#stack"],
    ["journey", "#journey"],
  ] as const;
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-border bg-background/70 py-2 pl-5 pr-2 backdrop-blur-xl">
        <a href="#top" className="font-display text-sm font-black tracking-tight">
          gzz<span className="text-primary">/</span>monk
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="rounded-full px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="shrink-0 rounded-full bg-primary px-4 py-2 font-display text-xs font-bold text-primary-foreground transition-transform hover:scale-105">
          hire me ✦
        </a>
      </nav>
    </header>
  );
}

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative z-20 -mt-10 -rotate-2 border-y-2 border-foreground bg-primary py-4 text-primary-foreground">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-2xl font-black uppercase md:text-3xl">
        {items.map((m, i) => (
          <span key={`${m}-${i}`} className="flex items-center gap-8">
            {m} <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <SectionTitle index="01" kicker="about">
        on-call era, <span className="text-gradient">main character</span> energy.
      </SectionTitle>
      <div className="grid gap-5 md:grid-cols-6">
        <Reveal className="md:col-span-4">
          <TiltCard className="h-full rounded-3xl border border-border bg-card p-7 md:p-10" max={5}>
            <p className="text-lg leading-relaxed md:text-2xl">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Linux", "Bash", "Python", "AWS", "Kubernetes", "Incident Response"].map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                  #{t.toLowerCase().replace(/\s/g, "")}
                </span>
              ))}
            </div>
          </TiltCard>
        </Reveal>
        <Reveal className="md:col-span-2" delay={100}>
          <TiltCard className="flex h-full flex-col justify-between rounded-3xl bg-secondary p-7 text-secondary-foreground shadow-pop">
            <span className="text-5xl">☁️</span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest opacity-80">certified</p>
              <p className="mt-1 font-display text-2xl font-black leading-tight">AWS Cloud Practitioner</p>
              <p className="mt-2 font-mono text-xs opacity-80">valid 2025 – 2028</p>
            </div>
          </TiltCard>
        </Reveal>
        {stats.map((s, i) => (
          <Reveal key={s.value} className="md:col-span-3 lg:col-span-3 xl:col-span-3" delay={i * 80}>
            <TiltCard
              className={cn(
                "h-full rounded-3xl border border-border p-7",
                i === 0 ? "bg-primary text-primary-foreground" : "bg-card",
              )}
            >
              <p className={cn("font-display text-5xl font-black md:text-6xl", i === 0 ? "" : "text-gradient")}>{s.value}</p>
              <p className={cn("mt-3 font-mono text-sm", i === 0 ? "opacity-80" : "text-muted-foreground")}>{s.label}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const toneClass = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
} as const;

export function Work() {
  return (
    <section id="work" className="relative border-t border-border bg-card/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle index="02" kicker="work">
          things i <span className="text-stroke">shipped</span> 🚀
        </SectionTitle>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <TiltCard className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background" max={8}>
                <div className={cn("relative p-5", toneClass[p.tone])}>
                  <div className="mb-3 flex gap-1.5" aria-hidden>
                    <span className="size-2.5 rounded-full bg-background/40" />
                    <span className="size-2.5 rounded-full bg-background/40" />
                    <span className="size-2.5 rounded-full bg-background/40" />
                  </div>
                  <div className="rounded-xl bg-background/90 p-4 font-mono text-[11px] leading-relaxed text-foreground [transform:translateZ(30px)]">
                    {p.terminal.map((line, li) => (
                      <div key={li} className={li === 0 ? "text-primary" : "text-muted-foreground"}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-black leading-tight">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-muted px-2.5 py-1 font-mono text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-xs transition-colors hover:border-primary hover:text-primary">
                      <Github className="size-3.5" /> code
                    </a>
                    {"live" in p && p.live ? (
                      <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 font-mono text-xs text-background transition-transform hover:scale-105">
                        live <ArrowUpRight className="size-3.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  const rot = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0", "-rotate-3"];
  return (
    <section id="stack" className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <SectionTitle index="03" kicker="stack">
        the stack i <span className="text-gradient">vibe</span> with.
      </SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 70}>
            <TiltCard className={cn("h-full rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-pop", rot[i % rot.length])}>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">0{i + 1}</p>
              <h3 className="mt-2 font-display text-xl font-black">{g.name}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:border-secondary hover:text-secondary">
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="border-t border-border bg-card/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle index="04" kicker="journey">
          the <span className="text-stroke">plot</span> so far.
        </SectionTitle>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="relative space-y-6 border-l-2 border-dashed border-border pl-6 md:pl-10">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 100}>
                <div className="relative">
                  <span className="absolute -left-[33px] top-2 size-4 rounded-full border-4 border-background bg-primary md:-left-[49px]" />
                  <TiltCard className="rounded-3xl border border-border bg-background p-6 md:p-8" max={4}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-primary px-3 py-1 font-mono text-[11px] font-bold text-primary-foreground">{e.period}</span>
                      <span className="font-mono text-xs text-muted-foreground">{e.place}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-black">{e.role}</h3>
                    <p className="text-secondary">{e.company}</p>
                    <ul className="mt-5 space-y-3">
                      {e.points.map((pt) => (
                        <li key={pt} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-1 text-primary">▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="space-y-5">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">certs &amp; school</p>
            </Reveal>
            {credentials.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <TiltCard className={cn("rounded-3xl border border-border bg-background p-6", i % 2 ? "rotate-1" : "-rotate-1")}>
                  <span className="text-3xl">{c.emoji}</span>
                  <h3 className="mt-3 font-display text-lg font-black leading-tight">{c.title}</h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{c.meta}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">// 05 — contact</p>
          <h2 className="mx-auto mt-4 max-w-5xl font-display text-[clamp(2.75rem,9vw,7.5rem)] font-black leading-[0.9] tracking-tight">
            let's keep <span className="text-gradient">prod</span> boring.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg">
            Open to Systems Engineer, Cloud Ops, DevOps and SRE roles — in Pune or anywhere I can relocate to.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex max-w-full items-center gap-3 rounded-full bg-primary px-6 py-4 font-display text-sm font-bold text-primary-foreground shadow-pop-pink transition-transform hover:-translate-y-1 md:text-base"
            >
              <Mail className="size-5 shrink-0" /> <span className="truncate">{profile.email}</span>
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-3.5 font-mono text-xs transition-colors hover:bg-foreground hover:text-background"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />} {copied ? "copied!" : "copy email"}
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-12 place-items-center rounded-full border border-border bg-card transition-transform hover:-rotate-6 hover:scale-110 hover:border-accent hover:text-accent">
              <Linkedin className="size-5" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-12 place-items-center rounded-full border border-border bg-card transition-transform hover:rotate-6 hover:scale-110 hover:border-primary hover:text-primary">
              <Github className="size-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted-foreground sm:flex-row">
        <span>© {profile.name} · built with caffeine &amp; kubectl</span>
        <span>status: <span className="text-primary">● all systems operational</span></span>
      </div>
    </footer>
  );
}
