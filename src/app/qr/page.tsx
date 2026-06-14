"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, QrCode, ScanLine, Smartphone } from "lucide-react";
import { Navbar } from "@/components/nav";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusPill } from "@/components/status-pill";

function DemoQr({ seed }: { seed: number }) {
  const cells = useMemo(
    () =>
      Array.from({ length: 121 }, (_, index) => {
        const row = Math.floor(index / 11);
        const col = index % 11;
        const finder =
          (row < 3 && col < 3) || (row < 3 && col > 7) || (row > 7 && col < 3);
        return finder || ((index * 17 + seed * 31) % 5 < 2);
      }),
    [seed]
  );

  return (
    <div className="grid w-full max-w-[220px] grid-cols-11 gap-1 rounded-lg bg-white p-4">
      {cells.map((on, index) => (
        <div key={index} className={`aspect-square rounded-[2px] ${on ? "bg-black" : "bg-white"}`} />
      ))}
    </div>
  );
}

export default function QrDemoPage() {
  const [step, setStep] = useState(0);
  const [seat, setSeat] = useState("B4");
  const steps = ["Select desk", "Scan QR", "Verify account", "Checked in"];

  return (
    <>
      <Navbar />
      <PageShell>
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-sm text-primary">QR Check-In Demo</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Simulate the full seat claim workflow.</h1>
            <p className="mt-2 text-muted-foreground">Generate sample QR codes, scan them, and show judges a clean check-in flow.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="flex flex-col items-center text-center">
              <CardHeader className="w-full">
                <div>
                  <CardTitle>Desk {seat} QR Code</CardTitle>
                  <CardDescription>Sample visual QR for prototype demonstration.</CardDescription>
                </div>
                <QrCode className="h-5 w-5 text-primary" />
              </CardHeader>
              <DemoQr seed={seat.charCodeAt(0) + Number(seat.slice(1))} />
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {["A3", "B4", "C7", "D2", "E9"].map((item) => (
                  <Button key={item} variant={seat === item ? "default" : "secondary"} size="sm" onClick={() => setSeat(item)}>
                    {item}
                  </Button>
                ))}
              </div>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Scanner Mockup</CardTitle>
                  <CardDescription>Mobile-style QR scanner with simulated state transitions.</CardDescription>
                </div>
                <Smartphone className="h-5 w-5 text-primary" />
              </CardHeader>
              <div className="mx-auto max-w-sm rounded-[2rem] border border-white/15 bg-black/40 p-4">
                <div className="rounded-[1.5rem] bg-[#07100f] p-4">
                  <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>DeskGuard</span>
                    <span>9:41</span>
                  </div>
                  <div className="relative grid aspect-square place-items-center overflow-hidden rounded-lg border border-primary/40 bg-white/5">
                    <ScanLine className="absolute h-16 w-16 text-primary/80" />
                    <div className="absolute left-6 right-6 top-1/2 h-px bg-primary shadow-glow" />
                    {step === 3 ? <CheckCircle2 className="h-20 w-20 text-primary" /> : <DemoQr seed={12} />}
                  </div>
                  <div className="mt-4 rounded-md bg-white/8 p-3 text-left">
                    <p className="text-sm font-medium">{steps[step]}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {step === 3 ? `Seat ${seat} is now occupied by the mock student account.` : "Tap continue to advance the demo workflow."}
                    </p>
                  </div>
                  <Button className="mt-4 w-full" onClick={() => setStep((value) => Math.min(3, value + 1))}>
                    Continue Scan
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-5">
            <CardHeader>
              <div>
                <CardTitle>Demo Workflow</CardTitle>
                <CardDescription>Progress updates a judge can follow at a glance.</CardDescription>
              </div>
            </CardHeader>
            <div className="grid gap-3 md:grid-cols-4">
              {steps.map((label, index) => (
                <div key={label} className="rounded-md bg-white/8 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-white/10 text-sm">{index + 1}</span>
                    {index < step ? <CheckCircle2 className="h-5 w-5 text-primary" /> : null}
                  </div>
                  <p className="font-medium">{label}</p>
                  <div className="mt-3">
                    <StatusPill status={index <= step ? (index === 3 ? "occupied" : "away") : "free"} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </PageShell>
    </>
  );
}
