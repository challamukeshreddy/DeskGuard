"use client";

import { useEffect, useState } from "react";
import { Bell, Clock, History, Timer, Wifi } from "lucide-react";
import { Navbar } from "@/components/nav";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusPill } from "@/components/status-pill";
import { history, notifications } from "@/data/mock";

export default function StudentDashboardPage() {
  const [seconds, setSeconds] = useState(42 * 60 + 18);
  const [away, setAway] = useState(9 * 60);
  const [toast, setToast] = useState("Seat B4 checked in successfully.");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((value) => value + 1);
      setAway((value) => Math.max(0, value - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const session = `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m ${seconds % 60}s`;
  const awayTime = `${Math.floor(away / 60)}:${String(away % 60).padStart(2, "0")}`;

  return (
    <>
      <Navbar />
      <PageShell>
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm text-primary">Student Dashboard</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Welcome back, Maya.</h1>
              <p className="mt-2 text-muted-foreground">Your current booking, away timer, history, and notifications.</p>
            </div>
            <Button onClick={() => setToast("Away Mode started. Return before the timer expires.")}>Start Away Mode</Button>
          </div>

          {toast ? (
            <div className="mb-5 flex items-center justify-between rounded-md border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-primary">
              <span>{toast}</span>
              <button onClick={() => setToast("")} className="text-primary/70 hover:text-primary">
                Dismiss
              </button>
            </div>
          ) : null}

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <div>
                  <CardTitle>Current Seat</CardTitle>
                  <CardDescription>Quiet Wing / Desk B4 / active QR session</CardDescription>
                </div>
                <StatusPill status="occupied" />
              </CardHeader>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-md bg-white/8 p-4">
                  <Clock className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">Session timer</p>
                  <p className="mt-2 text-2xl font-semibold">{session}</p>
                </div>
                <div className="rounded-md bg-white/8 p-4">
                  <Timer className="mb-3 h-5 w-5 text-amber-200" />
                  <p className="text-sm text-muted-foreground">Away time left</p>
                  <p className="mt-2 text-2xl font-semibold">{awayTime}</p>
                </div>
                <div className="rounded-md bg-white/8 p-4">
                  <Wifi className="mb-3 h-5 w-5 text-sky-300" />
                  <p className="text-sm text-muted-foreground">Live sync</p>
                  <p className="mt-2 text-2xl font-semibold">Online</p>
                </div>
              </div>
              <div className="mt-5 rounded-md bg-black/20 p-4">
                <div className="mb-3 flex justify-between text-sm">
                  <span className="text-muted-foreground">2 hour booking limit</span>
                  <span>35% used</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[35%] rounded-full bg-primary" />
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Sample live alerts for the student account.</CardDescription>
                </div>
                <Bell className="h-5 w-5 text-primary" />
              </CardHeader>
              <div className="space-y-3">
                {notifications.slice(0, 3).map((item) => (
                  <div key={item.title} className="rounded-md bg-white/8 p-3">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="mt-5">
            <CardHeader>
              <div>
                <CardTitle>Booking History</CardTitle>
                <CardDescription>Fake data for repeat-demo credibility.</CardDescription>
              </div>
              <History className="h-5 w-5 text-primary" />
            </CardHeader>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="text-muted-foreground">
                  <tr className="border-b border-white/10">
                    <th className="py-3 font-medium">Date</th>
                    <th className="py-3 font-medium">Seat</th>
                    <th className="py-3 font-medium">Duration</th>
                    <th className="py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((row) => (
                    <tr key={`${row.date}-${row.seat}`} className="border-b border-white/5">
                      <td className="py-3">{row.date}</td>
                      <td className="py-3">{row.seat}</td>
                      <td className="py-3">{row.duration}</td>
                      <td className="py-3 text-muted-foreground">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </PageShell>
    </>
  );
}
