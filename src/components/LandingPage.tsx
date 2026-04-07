import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  Github,
  GitBranch,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";
import { AnvilIcon } from "./ui/anvil-icon";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Workflow", href: "#workflow" },
  { label: "Platform", href: "#platform" },
  { label: "Start", href: "#start" },
];

const heroStats = [
  {
    label: "Workflow",
    value: "1 command",
    detail: "sync, validate, and land work without hopping between tools",
  },
  {
    label: "Coverage",
    value: "AI drafted",
    detail: "test suggestions generated from the actual code diff",
  },
  {
    label: "History",
    value: "Linear first",
    detail: "rebasing and merge prep designed to keep branches readable",
  },
];

const valueCards = [
  {
    title: "Reduce Git overhead",
    description:
      "Forge turns repetitive branch maintenance into a cleaner default, so engineering time goes back into shipping product.",
  },
  {
    title: "Bring quality closer to the work",
    description:
      "AI-assisted test drafting helps teams catch the obvious gaps while context is still fresh and easy to act on.",
  },
  {
    title: "Keep release context visible",
    description:
      "Checks, summaries, and merge readiness sit in one place instead of being spread across terminal history and team memory.",
  },
];

const workflowSteps = [
  {
    title: "Sync branch state",
    description:
      "Start from an up-to-date branch without the usual rebasing ceremony or command memorization.",
  },
  {
    title: "Draft targeted tests",
    description:
      "Forge reads the diff and suggests coverage areas that match the change instead of a generic checklist.",
  },
  {
    title: "Review merge readiness",
    description:
      "Validation, branch status, and release notes are packaged into a calmer final step before shipping.",
  },
];

const platformCards = [
  {
    icon: GitBranch,
    title: "Opinionated branch hygiene",
    description:
      "Strong defaults help teams avoid tangled histories and review fatigue before they build up.",
  },
  {
    icon: Bot,
    title: "AI where it actually helps",
    description:
      "Use machine help for repetitive quality work, not for bloating a simple release flow.",
  },
  {
    icon: LayoutDashboard,
    title: "One release workspace",
    description:
      "See sync state, validation, suggested tests, and final readiness in a single product surface.",
  },
  {
    icon: ShieldCheck,
    title: "Local-first confidence",
    description:
      "Keep speed high and code private while still adding the process discipline teams usually bolt on later.",
  },
];

const proofPoints = [
  "Built for startup shipping velocity",
  "Designed for small engineering teams",
  "Made for teams tired of Git cleanup",
  "Open source on GitHub",
];

const releaseItems = [
  "Branch synced with latest main",
  "Regression coverage drafted from diff",
  "Validation suite passed",
  "Release summary prepared",
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] overflow-hidden">
        <div className="hero-wash absolute inset-0" />
        <div className="absolute right-[-10rem] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-[rgba(235,75,147,0.15)] blur-3xl" />
        <div className="absolute left-[-8rem] top-28 h-[20rem] w-[20rem] rounded-full bg-[rgba(126,103,89,0.08)] blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-black/6 bg-[rgba(245,237,228,0.84)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-[0_14px_30px_rgba(235,75,147,0.28)]">
              <AnvilIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[-0.03em] text-[#12161d]">
                Forge
              </div>
              <div className="mono-label mt-0.5 text-[11px] text-muted-foreground">
                RELEASE INFRASTRUCTURE
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#544c49] transition-colors hover:text-[var(--brand-deep)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/rayhaanfarooq/Forge"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center rounded-full border border-[rgba(18,22,29,0.08)] bg-[rgba(255,248,243,0.75)] px-4 py-2 text-sm font-medium text-[#12161d] transition-colors hover:bg-white sm:inline-flex"
            >
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </a>
            <a
              href="#start"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white shadow-[0_16px_36px_rgba(235,75,147,0.28)] transition-transform hover:-translate-y-0.5"
            >
              Get started
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="px-4 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-3xl">
              <div className="section-eyebrow">
                Open source release infrastructure
              </div>

              <h1 className="mt-8 max-w-3xl text-balance text-5xl font-semibold tracking-[-0.06em] text-[#12161d] sm:text-6xl lg:text-[5.4rem] lg:leading-[0.96]">
                Git workflows that feel faster, cleaner, and far more under
                <span className="text-[var(--brand-deep)]"> control.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5663] sm:text-xl">
                Forge gives product teams a calmer release path with cleaner
                branch handling, AI-assisted test drafting, and one focused
                workflow from sync to ship.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://github.com/rayhaanfarooq/Forge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-base font-medium text-white shadow-[0_18px_42px_rgba(235,75,147,0.26)] transition-transform hover:-translate-y-0.5"
                >
                  Explore on GitHub
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#product"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(18,22,29,0.09)] bg-[rgba(255,249,244,0.82)] px-6 py-3 text-base font-medium text-[#12161d] transition-colors hover:bg-white"
                >
                  See the product flow
                </a>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[rgba(18,22,29,0.08)] bg-[rgba(255,250,246,0.82)] px-4 py-2 text-sm text-[#5c5552]">
                <Github className="h-4 w-4 text-[var(--brand-deep)]" />
                <span>Open source on GitHub. Contributions welcome.</span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.value}
                    className="surface-card rounded-[1.5rem] p-5"
                  >
                    <p className="mono-label text-[11px] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#12161d]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#5a6470]">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="dashboard-shell rounded-[2rem] p-4 sm:p-5">
                <div className="rounded-[1.7rem] border border-black/7 bg-white p-5 shadow-[0_30px_80px_rgba(17,23,31,0.08)] sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-black/7 pb-5">
                    <div>
                      <div className="mono-label text-[11px] text-muted-foreground">
                        RELEASE WORKSPACE
                      </div>
                      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#12161d] sm:text-[2rem]">
                        Faster shipping with less release drag
                      </h2>
                    </div>
                    <div className="rounded-full bg-[var(--success-soft)] px-3 py-1.5 text-sm font-medium text-[var(--success-deep)]">
                      Release ready
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.35rem] border border-black/7 bg-[#1f181b] px-4 py-4 text-white">
                      <div className="mono-label text-[11px] text-white/55">
                        Merge prep
                      </div>
                      <div className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                        92%
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/72">
                        workflow handled before the final release step
                      </p>
                    </div>
                    <div className="rounded-[1.35rem] border border-black/7 bg-[#f5ede7] px-4 py-4">
                      <div className="mono-label text-[11px] text-muted-foreground">
                        Suggested tests
                      </div>
                      <div className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#12161d]">
                        08
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#5a6470]">
                        focused coverage prompts created from the diff
                      </p>
                    </div>
                    <div className="rounded-[1.35rem] border border-black/7 bg-[#f5ede7] px-4 py-4">
                      <div className="mono-label text-[11px] text-muted-foreground">
                        Branch state
                      </div>
                      <div className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#12161d]">
                        Synced
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#5a6470]">
                        current branch aligned with latest main
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="rounded-[1.5rem] border border-black/7 bg-[#f9f2eb] p-4">
                      <div className="mono-label text-[11px] text-muted-foreground">
                        Active workflow
                      </div>
                      <div className="mt-4 space-y-3">
                        {releaseItems.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl border border-black/6 bg-white px-4 py-3"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--success)]" />
                            <span className="text-sm font-medium text-[#1f2933]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] border border-black/7 bg-[#f5ede7] p-4">
                        <div className="mono-label text-[11px] text-muted-foreground">
                          Release note
                        </div>
                        <p className="mt-3 text-base leading-7 text-[#27313b]">
                          Checkout refactor is merge-ready. Coverage suggestions
                          center on totals, discounts, and empty-cart edge
                          cases.
                        </p>
                      </div>

                      <div className="rounded-[1.5rem] border border-black/7 bg-[#1f181b] p-4 text-white">
                        <div className="mono-label text-[11px] text-white/55">
                          Quality signal
                        </div>
                        <div className="mt-5 space-y-3">
                          <div>
                            <div className="flex items-center justify-between text-sm text-white/72">
                              <span>Validation</span>
                              <span>100%</span>
                            </div>
                            <div className="mt-2 h-2 rounded-full bg-white/10">
                              <div className="h-2 w-full rounded-full bg-[var(--success)]" />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm text-white/72">
                              <span>Coverage depth</span>
                              <span>84%</span>
                            </div>
                            <div className="mt-2 h-2 rounded-full bg-white/10">
                              <div className="h-2 w-[84%] rounded-full bg-[var(--success)]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="surface-card absolute -bottom-5 left-8 hidden rounded-full border-[rgba(45,164,78,0.18)] bg-[var(--success-soft)] px-4 py-2.5 text-sm font-medium text-[var(--success-deep)] shadow-[0_20px_45px_rgba(17,23,31,0.08)] lg:block">
                Cleaner release path
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/6 bg-[rgba(250,244,238,0.86)] px-4 py-5 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 text-sm text-[#58616c]">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-full border border-black/7 bg-[#fbf4ee] px-4 py-2"
              >
                {point}
              </div>
            ))}
          </div>
        </section>

        <section id="product" className="px-4 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="section-eyebrow">Why teams switch to Forge</div>
              <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] text-[#12161d] sm:text-[3.35rem] sm:leading-[1.02]">
                A release system shaped like product software, not terminal
                folklore.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#55606c]">
                The visual direction is cleaner, but the real upgrade is
                operational. Forge reduces friction where modern engineering
                teams feel it most: Git overhead, fragmented quality checks, and
                merge anxiety.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {valueCards.map((card) => (
                <article
                  key={card.title}
                  className="surface-card rounded-[1.75rem] p-6 sm:p-7"
                >
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#12161d]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#5a6470]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="workflow"
          className="bg-[#1b1517] px-4 py-20 text-white sm:py-24 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="max-w-xl">
              <div className="section-eyebrow border-white/10 bg-white/5 text-white/75">
                Workflow
              </div>
              <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-[3.2rem] sm:leading-[1.02]">
                Every release step, tightened into one operating rhythm.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/68">
                Borrow the clarity of modern finance software: one screen, clear
                states, and just enough accent color to guide attention instead
                of decorating the interface.
              </p>

              <div className="mt-8 rounded-[1.9rem] border border-white/10 bg-white/5 p-6">
                <div className="mono-label text-[11px] text-white/45">
                  Example flow
                </div>
                <div className="mt-4 space-y-3 text-sm text-white/80">
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <span className="mono-label text-[11px] text-[var(--brand-light)]">
                      01
                    </span>
                    <p className="mt-2 font-medium text-white">
                      `forge sync` brings the branch current
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <span className="mono-label text-[11px] text-[var(--brand-light)]">
                      02
                    </span>
                    <p className="mt-2 font-medium text-white">
                      `forge test --ai` drafts focused coverage
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/5 px-4 py-3">
                    <span className="mono-label text-[11px] text-[var(--brand-light)]">
                      03
                    </span>
                    <p className="mt-2 font-medium text-white">
                      `forge ship` packages validation and release context
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="mono-label text-[11px] text-[var(--brand-light)]">
                    STEP 0{index + 1}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-white/68">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="px-4 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="max-w-2xl">
                <div className="section-eyebrow">Platform</div>
                <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-[#12161d] sm:text-[3.2rem] sm:leading-[1.02]">
                  Modern release tooling, without the visual noise.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#55606c]">
                The interface stays neutral, the hierarchy stays strong, and the
                hot-pink accent only appears where depth or status matters. That
                keeps Forge confident, structured, and unmistakably its own.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {platformCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="surface-card rounded-[1.75rem] p-6 sm:p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-[0_14px_32px_rgba(235,75,147,0.22)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#12161d]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#5a6470]">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="start" className="px-4 pb-20 pt-4 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] border border-black/8 bg-[#fffaf5] p-8 shadow-[0_28px_80px_rgba(17,23,31,0.06)] sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <div className="section-eyebrow">Start with Forge</div>
                  <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-[#12161d] sm:text-[3.2rem] sm:leading-[1.02]">
                    Give your release flow a product-grade operating surface.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-[#55606c]">
                    Explore the repo, try the workflow, and move your team
                    toward a release process that feels more like software and
                    less like cleanup.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="https://github.com/rayhaanfarooq/Forge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-base font-medium text-white shadow-[0_18px_42px_rgba(235,75,147,0.26)] transition-transform hover:-translate-y-0.5"
                  >
                    Start on GitHub
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-base font-medium text-[#12161d] transition-colors hover:bg-black/[0.03]"
                  >
                    Back to top
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/6 px-4 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#65707b] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-[0_12px_26px_rgba(235,75,147,0.24)]">
              <AnvilIcon className="h-4.5 w-4.5" />
            </div>
            <div>
              <p className="font-medium text-[#12161d]">Forge</p>
              <p>Git workflows with AI-assisted release preparation.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-[var(--brand-deep)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
