"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Armchair, Clock3, UserCheck } from "lucide-react";
import { Navbar } from "@/components/nav";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { StatusPill } from "@/components/status-pill";
import { seats, type Seat, type SeatStatus } from "@/data/mock";
import { cn } from "@/lib/utils";

const colorMap: Record<SeatStatus, string> = {
  free: "bg-emerald-400/90 text-emerald-950 shadow-emerald-400/20",
  occupied: "bg-red-400/90 text-red-950 shadow-red-400/20",
  away: "bg-amber-300/90 text-amber-950 shadow-amber-300/20",
  abandoned: "bg-zinc-300/85 text-zinc-950 shadow-zinc-300/20"
};

export default function LibraryMapPage() {
  const [selected, setSelected] = useState<Seat | null>(null);
  const [filter, setFilter] = useState<SeatStatus | "all">("all");
  const filteredSeats = useMemo(() => (filter === "all" ? seats : seats.filter((seat) => seat.status === filter)), [filter]);

  return (
    <>
      <Navbar />
      <PageShell>
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm text-primary">Interactive Library Map</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">50 monitored desks across five zones</h1>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Green desks are free, red desks are occupied, yellow desks are away, and grey desks are abandoned alerts.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["all", "free", "occupied", "away", "abandoned"] as const).map((item) => (
                <Button
                  key={item}
                  size="sm"
                  variant={filter === item ? "default" : "secondary"}
                  onClick={() => setFilter(item)}
                  className="capitalize"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
            <Card className="p-4">
              <div className="mb-4 flex items-center justify-between rounded-md border border-white/10 bg-black/20 px-4 py-3">
                <span className="text-sm text-muted-foreground">Main Library / Floor 2</span>
                <span className="text-sm text-primary">Simulated live updates</span>
              </div>
              <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
                {filteredSeats.map((seat, index) => (
                  <motion.button
                    key={seat.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.012 }}
                    onClick={() => setSelected(seat)}
                    className={cn(
                      "aspect-square rounded-md p-2 text-left shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary",
                      colorMap[seat.status]
                    )}
                  >
                    <div className="flex h-full flex-col justify-between">
                      <Armchair className="h-4 w-4" />
                      <span className="text-sm font-bold">{seat.id}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>

            <div className="grid gap-4">
              {(["free", "occupied", "away", "abandoned"] as SeatStatus[]).map((status) => (
                <Card key={status} className="flex items-center justify-between">
                  <div>
                    <StatusPill status={status} />
                    <p className="mt-2 text-2xl font-semibold">{seats.filter((seat) => seat.status === status).length}</p>
                  </div>
                  <div className={cn("h-12 w-12 rounded-md shadow-lg", colorMap[status])} />
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent>
            {selected ? (
              <>
                <DialogHeader>
                  <DialogTitle>Desk {selected.id}</DialogTitle>
                  <DialogDescription>{selected.zone} seat details and demo actions.</DialogDescription>
                </DialogHeader>
                <div className="mt-5 grid gap-4">
                  <div className="flex items-center justify-between rounded-md bg-white/8 p-4">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <StatusPill status={selected.status} />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-md bg-white/8 p-4">
                      <UserCheck className="mb-2 h-5 w-5 text-primary" />
                      <p className="text-sm text-muted-foreground">Student</p>
                      <p className="font-medium">{selected.student ?? "Available now"}</p>
                    </div>
                    <div className="rounded-md bg-white/8 p-4">
                      <Clock3 className="mb-2 h-5 w-5 text-primary" />
                      <p className="text-sm text-muted-foreground">Check-in</p>
                      <p className="font-medium">{selected.checkIn ?? "Not checked in"}</p>
                    </div>
                  </div>
                  <div className="rounded-md bg-white/8 p-4">
                    <p className="text-sm text-muted-foreground">Occupancy confidence</p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${selected.confidence}%` }} />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{selected.confidence}% simulated sensor confidence</p>
                  </div>
                  <Button>{selected.status === "free" ? "Book this desk" : "Send friendly reminder"}</Button>
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </PageShell>
    </>
  );
}
