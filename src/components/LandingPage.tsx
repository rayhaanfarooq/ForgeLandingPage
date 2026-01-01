import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Code,
  CheckCircle2,
  XCircle,
  Rocket,
  Sparkles,
  Terminal,
  GitMerge,
  TestTube,
  ArrowRight,
  Github,
  Heart,
} from "lucide-react";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { Meteors } from "./ui/meteors";
import { MagicCard } from "./ui/magic-card";
import { BorderBeam } from "./ui/border-beam";
import { GridPattern } from "./ui/grid-pattern";
import { LineShadowText } from "./ui/line-shadow-text";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navbar */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex w-full max-w-7xl items-center justify-between rounded-full border border-slate-200/50 bg-white/80 px-6 py-3 backdrop-blur-md shadow-lg dark:border-slate-800/50 dark:bg-slate-900/80">
          <a href="#" className="text-xl font-bold">
            <AnimatedGradientText
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"
              speed={0.8}
            >
              Forge
            </AnimatedGradientText>
          </a>
          <motion.a
            href="https://github.com/rayhaanfarooq/Forge"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white transition-all hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm">Get Started For Free</span>
          </motion.a>
        </nav>
      </div>
      {/* Hero Section */}
      <section className="relative overflow-visible px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/20" />
        <GridPattern className="opacity-20 dark:opacity-10" />
        <Meteors number={20} />

        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-visible text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/80 px-4 py-2 text-sm backdrop-blur-sm dark:border-blue-800/50 dark:bg-slate-900/80"
            >
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-slate-700 dark:text-slate-300">
                Simplified Git commands with AI-generated tests
              </span>
            </motion.div>

            <h1 className="mb-6 overflow-visible text-5xl font-bold tracking-tight leading-[1.2] md:text-7xl md:leading-[1.2] lg:text-8xl lg:leading-[1.2]">
              <span className="block text-slate-900 dark:text-slate-100">
                Ship <LineShadowText shadowColor="black">Faster</LineShadowText>{" "}
                with
              </span>
              <AnimatedGradientText
                className="block overflow-visible pb-2 md:pb-3 lg:pb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"
                speed={0.8}
              >
                Forge
              </AnimatedGradientText>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-400">
              Don’t let Git commands or testing slow you down. Forge simplifies
              your workflow by simplifying your Git commands and AI-generated
              tests so you can ship at lightning speed.
            </p>

            <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="#get-started"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="https://github.com/rayhaanfarooq/Forge"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex cursor-pointer items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 text-white transition-all hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <span>Open source</span>
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span>Contributions welcome</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-4 py-24">
        <GridPattern className="opacity-20 dark:opacity-10" />
        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Why Forge Exists
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Built from experience at high-velocity environments like Ross
              Video and Shopify, Forge addresses the pain points that slow
              developers down.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GitMerge,
                title: "No More Merge Conflicts",
                description:
                  "Automatic rebasing keeps your branches clean and in sync, eliminating manual conflict resolution.",
                gradientFrom: "#2563eb",
                gradientTo: "#3b82f6",
              },
              {
                icon: TestTube,
                title: "AI-Generated Tests",
                description:
                  "Tests are automatically generated based on your actual code changes, ensuring nothing is forgotten.",
                gradientFrom: "#4f46e5",
                gradientTo: "#6366f1",
              },
              {
                icon: Zap,
                title: "One Command Workflow",
                description:
                  "Sync, test, validate, commit, and push — all with a single command. Stay in flow.",
                gradientFrom: "#0891b2",
                gradientTo: "#06b6d4",
              },
              {
                icon: Shield,
                title: "Local-First",
                description:
                  "Everything runs locally. No cloud infrastructure or CI/CD overhead required.",
                gradientFrom: "#1e40af",
                gradientTo: "#2563eb",
              },
              {
                icon: Code,
                title: "Clean Git History",
                description:
                  "Enforces clean Git histories and test-first workflows automatically.",
                gradientFrom: "#0284c7",
                gradientTo: "#0ea5e9",
              },
              {
                icon: Rocket,
                title: "Ship Faster",
                description:
                  "Eliminate friction points and maintain quality at lightning speed.",
                gradientFrom: "#4338ca",
                gradientTo: "#6366f1",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-700">
                  <MagicCard
                    className="h-full"
                    gradientFrom={feature.gradientFrom}
                    gradientTo={feature.gradientTo}
                  >
                    <div className="relative h-full p-6">
                      <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 p-3 dark:from-blue-900/30 dark:to-indigo-900/30">
                        <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </MagicCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative px-4 py-24 bg-slate-50/50 dark:bg-slate-900/50">
        <GridPattern className="opacity-20 dark:opacity-10" />
        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Before vs. After
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              See how Forge transforms your development workflow
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-red-200 bg-red-50/50 p-8 dark:border-red-900 dark:bg-red-950/20"
            >
              <BorderBeam colorFrom="#ef4444" colorTo="#dc2626" />
              <div className="mb-4 flex items-center gap-2">
                <XCircle className="h-6 w-6 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">
                  Before Forge
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Manually create branches",
                  "Manually rebase and resolve conflicts",
                  "Write tests after the fact (or skip them)",
                  "Forget to push or push broken tests",
                  "Hours wasted on Git workflow",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                  >
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-green-200 bg-green-50/50 p-8 dark:border-green-900 dark:bg-green-950/20"
            >
              <BorderBeam colorFrom="#10b981" colorTo="#059669" />
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">
                  With Forge
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "One command handles rebase + tests + validation",
                  "Tests generated based on actual diffs",
                  "Branches stay clean and in sync",
                  "Safer commits by default",
                  "Ship faster with confidence",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative px-4 py-24">
        <GridPattern className="opacity-20 dark:opacity-10" />
        <div className="container relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Who Forge Is For
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Designed for developers who value speed, quality, and clean
              workflows
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Solo Developers",
                description: "Guardrails without heavy CI overhead",
              },
              {
                title: "Teams",
                description:
                  "Enforce clean Git histories and test-first workflows",
              },
              {
                title: "Hackathons",
                description: "Speed + correctness matter",
              },
              {
                title: "Startups",
                description: "Move fast without breaking things",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group rounded-xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-blue-700 dark:hover:bg-slate-900"
              >
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="get-started" className="relative px-4 py-24">
        <GridPattern className="opacity-20 dark:opacity-10" />
        <div className="container relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-cyan-50/50 p-8 shadow-xl shadow-blue-500/5 md:p-12 dark:border-blue-800/50 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-cyan-950/20"
          >
            <BorderBeam colorFrom="#2563eb" colorTo="#6366f1" duration={8} />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                  <Terminal className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
                  Quick Start
                </h2>
              </div>

              <div className="space-y-3 rounded-xl bg-slate-900 p-6 font-mono text-sm text-slate-100 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-blue-400">pip install -e .</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-blue-400">forge init</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-blue-400">
                    forge branch feature/my-change
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-blue-400">forge submit</span>
                </div>
              </div>

              <p className="mt-6 text-slate-600 dark:text-slate-400">
                That's it! Forge handles rebasing, test generation, validation,
                commit, and push — all automatically.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-12 dark:border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h3 className="mb-2 text-2xl font-bold">Forge</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Opinionated Git workflows with AI-generated tests
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="https://github.com/rayhaanfarooq/Forge"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white transition-all hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </motion.a>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                <span>Open source • Contributions welcome</span>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
            <p>© 2024 Forge. Built for developers who hate rebasing.</p>
            <p className="mt-2">
              <a
                href="https://github.com/rayhaanfarooq/Forge"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <Github className="h-4 w-4" />
                Star us on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
