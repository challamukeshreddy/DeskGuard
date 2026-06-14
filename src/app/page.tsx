"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";
import { features, stats, workflow } from "@/data/mock";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section className="relative min-h-[calc(100vh-65px)] px-4 pb-14 pt-16 sm:px-6 lg:px-8">
          <div className="grid-mask absolute inset-0" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-sm text-muted-foreground backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary" />
                Smart Library Seat Booking & Anti-Hoarding System
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                DeskGuard
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                A demonstration-ready MVP that helps students find open desks, check in with QR codes, and prevents
                seat hoarding with transparent away timers and automated release.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/map">
                    Open Live Map
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/qr">Try QR Demo</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="glass rounded-lg p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">North Hall live occupancy</p>
                  <p className="text-2xl font-semibold">84% capacity</p>
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary">Live</span>
              </div>
              <div className="grid grid-cols-10 gap-2">
                {Array.from({ length: 50 }, (_, index) => {
                  const tone =
                    index % 7 === 0 ? "bg-amber-300" : index % 5 === 0 ? "bg-red-400" : index % 3 === 0 ? "bg-emerald-400" : "bg-white/20";
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.012 }}
                      className={`aspect-square rounded-md ${tone} shadow-sm`}
                    />
                  );
                })}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-md bg-emerald-400/10 p-3 text-emerald-300">18 Free</div>
                <div className="rounded-md bg-red-400/10 p-3 text-red-300">25 Occupied</div>
                <div className="rounded-md bg-amber-300/10 p-3 text-amber-200">7 Away</div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <p className="text-sm font-medium text-red-300">Problem</p>
              <h2 className="mt-3 text-2xl font-semibold">Bags reserve seats while students disappear.</h2>
              <p className="mt-4 text-muted-foreground">
                Students reserve library desks using bags and disappear for hours, making it difficult for others to
                find study spaces.
              </p>
            </Card>
            <Card>
              <p className="text-sm font-medium text-primary">Solution</p>
              <h2 className="mt-3 text-2xl font-semibold">Real-time tracking with QR check-ins.</h2>
              <p className="mt-4 text-muted-foreground">
                DeskGuard provides a real-time seat tracking and booking system using QR check-ins, occupancy
                monitoring, and automated seat release.
              </p>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-primary">Key features</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Built for a 2-minute winning demo.</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="transition hover:-translate-y-1 hover:bg-white/12">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.body}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm text-primary">How it works</p>
              <h2 className="mt-2 text-3xl font-semibold">A fair seat lifecycle students can understand instantly.</h2>
            </div>
            <div className="grid gap-3">
              {workflow.map((step, index) => (
                <Card key={step.title} className="flex items-start gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-white/10 text-sm font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                  </div>
                  <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-primary" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="glass flex flex-col items-start justify-between gap-6 rounded-lg p-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Ready to impress judges?</h2>
              <p className="mt-2 text-muted-foreground">Jump into the live map, student flow, librarian analytics, or QR check-in demo.</p>
            </div>
            <Button asChild size="lg">
              <Link href="/student">Launch Demo</Link>
            </Button>
          </div>
        </section>

        <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-muted-foreground">
          DeskGuard hackathon prototype. Mock data, simulated updates, and demo-only workflows.
        </footer>
      </main>
    </>
  );
}
