"use client";

import { AlertTriangle, Armchair, Clock3, Users } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Navbar } from "@/components/nav";
import { PageShell } from "@/components/page-shell";
import { StatCard } from "@/components/stat-card";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusPill } from "@/components/status-pill";
import { analytics, notifications, seats } from "@/data/mock";

export default function LibrarianDashboardPage() {
  const occupied = seats.filter((seat) => seat.status === "occupied").length;
  const away = seats.filter((seat) => seat.status === "away").length;
  const abandoned = seats.filter((seat) => seat.status === "abandoned").length;

  return (
    <>
      <Navbar />
      <PageShell>
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-sm text-primary">Librarian Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Operational view for fair seat access.</h1>
            <p className="mt-2 text-muted-foreground">Monitor desk utilization, away timers, abandoned desks, and trend analytics.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard label="Total desks" value="50" icon={Armchair} hint="Main Library Floor 2" />
            <StatCard label="Occupied desks" value={`${occupied}`} icon={Users} hint="Mock real-time count" />
            <StatCard label="Away desks" value={`${away}`} icon={Clock3} hint="Countdown active" />
            <StatCard label="Abandoned desks" value={`${abandoned}`} icon={AlertTriangle} hint="Needs staff review" />
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Occupancy Analytics</CardTitle>
                  <CardDescription>Demo chart showing peak utilization by hour.</CardDescription>
                </div>
              </CardHeader>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analytics}>
                    <defs>
                      <linearGradient id="occupied" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="5%" stopColor="#33d69f" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#33d69f" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip contentStyle={{ background: "#07100f", border: "1px solid rgba(255,255,255,.12)", borderRadius: 8 }} />
                    <Area type="monotone" dataKey="occupied" stroke="#33d69f" fill="url(#occupied)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Seat State Mix</CardTitle>
                  <CardDescription>Away and auto-release activity by hour.</CardDescription>
                </div>
              </CardHeader>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analytics}>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip contentStyle={{ background: "#07100f", border: "1px solid rgba(255,255,255,.12)", borderRadius: 8 }} />
                    <Bar dataKey="away" fill="#fde047" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="released" fill="#38bdf8" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Staff Alerts</CardTitle>
                  <CardDescription>Prioritized demo notifications.</CardDescription>
                </div>
              </CardHeader>
              <div className="space-y-3">
                {notifications.map((item) => (
                  <div key={item.title} className="rounded-md bg-white/8 p-3">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <CardHeader>
                <div>
                  <CardTitle>Desk Review Queue</CardTitle>
                  <CardDescription>Seats that need a nudge, release, or staff review.</CardDescription>
                </div>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead className="text-muted-foreground">
                    <tr className="border-b border-white/10">
                      <th className="py-3 font-medium">Desk</th>
                      <th className="py-3 font-medium">Zone</th>
                      <th className="py-3 font-medium">Status</th>
                      <th className="py-3 font-medium">Away</th>
                      <th className="py-3 font-medium">Confidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seats
                      .filter((seat) => seat.status === "away" || seat.status === "abandoned")
                      .slice(0, 8)
                      .map((seat) => (
                        <tr key={seat.id} className="border-b border-white/5">
                          <td className="py-3 font-medium">{seat.id}</td>
                          <td className="py-3 text-muted-foreground">{seat.zone}</td>
                          <td className="py-3"><StatusPill status={seat.status} /></td>
                          <td className="py-3">{seat.awayMinutes ?? 0} min</td>
                          <td className="py-3">{seat.confidence}%</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </PageShell>
    </>
  );
}
