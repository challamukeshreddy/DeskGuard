import { cn } from "@/lib/utils";
import type { SeatStatus } from "@/data/mock";

const styles: Record<SeatStatus, string> = {
  free: "bg-emerald-400/15 text-emerald-300 ring-emerald-400/30",
  occupied: "bg-red-400/15 text-red-300 ring-red-400/30",
  away: "bg-amber-300/15 text-amber-200 ring-amber-300/30",
  abandoned: "bg-zinc-300/15 text-zinc-200 ring-zinc-300/30"
};

export function StatusPill({ status, className }: { status: SeatStatus; className?: string }) {
  return (
    <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium capitalize ring-1", styles[status], className)}>
      {status}
    </span>
  );
}
