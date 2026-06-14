import {
  BarChart3,
  Bell,
  Clock3,
  LayoutDashboard,
  MapPinned,
  QrCode,
  ShieldCheck,
  TimerReset
} from "lucide-react";

export type SeatStatus = "free" | "occupied" | "away" | "abandoned";

export type Seat = {
  id: string;
  zone: string;
  status: SeatStatus;
  student?: string;
  course?: string;
  checkIn?: string;
  awayMinutes?: number;
  confidence: number;
};

const statuses: SeatStatus[] = [
  "free",
  "occupied",
  "free",
  "away",
  "occupied",
  "free",
  "abandoned",
  "occupied",
  "free",
  "away"
];

const students = ["Aarav M.", "Maya S.", "Isha R.", "Kabir P.", "Neha K.", "Rohan V.", "Sara D."];

export const seats: Seat[] = Array.from({ length: 50 }, (_, index) => {
  const row = String.fromCharCode(65 + Math.floor(index / 10));
  const status = statuses[index % statuses.length];
  const isTaken = status !== "free";

  return {
    id: `${row}${(index % 10) + 1}`,
    zone: ["Quiet Wing", "North Hall", "Window Row", "Focus Pods", "Reference Bay"][Math.floor(index / 10)],
    status,
    student: isTaken ? students[index % students.length] : undefined,
    course: isTaken ? ["CS Lab", "Finals Prep", "Design Studio", "Research", "MBA Notes"][index % 5] : undefined,
    checkIn: isTaken ? `${8 + (index % 5)}:${index % 2 ? "45" : "10"} AM` : undefined,
    awayMinutes: status === "away" ? 7 + (index % 4) * 3 : status === "abandoned" ? 28 : undefined,
    confidence: 72 + ((index * 7) % 26)
  };
});

export const features = [
  { title: "Live Library Map", icon: MapPinned, body: "See every desk status instantly across floors and study zones." },
  { title: "QR Seat Check-In", icon: QrCode, body: "Students claim desks by scanning a seat QR code in seconds." },
  { title: "Away Mode", icon: Clock3, body: "Short breaks are allowed while the system tracks the return timer." },
  { title: "Auto Seat Release", icon: TimerReset, body: "Expired away sessions become available without awkward manual policing." },
  { title: "Librarian Dashboard", icon: LayoutDashboard, body: "Staff get real-time signals for occupancy, alerts, and intervention." },
  { title: "Analytics", icon: BarChart3, body: "Peak hours, abandonment trends, and usage patterns are demo-ready." }
];

export const notifications = [
  { title: "Seat C7 away timer expiring", body: "2 minutes left before auto-release.", tone: "warning" },
  { title: "Seat A4 checked in", body: "Mock student Maya S. started a 2 hour session.", tone: "success" },
  { title: "Seat D7 flagged abandoned", body: "Bag detected, no QR renewal after 28 minutes.", tone: "danger" },
  { title: "North Hall occupancy high", body: "82% of desks are currently in use.", tone: "info" }
];

export const history = [
  { date: "Today", seat: "B4", duration: "1h 42m", status: "Active" },
  { date: "Yesterday", seat: "A8", duration: "2h 15m", status: "Completed" },
  { date: "Jun 12", seat: "D2", duration: "54m", status: "Released" },
  { date: "Jun 11", seat: "C9", duration: "1h 20m", status: "Completed" }
];

export const analytics = [
  { time: "8 AM", occupied: 18, away: 2, released: 1 },
  { time: "10 AM", occupied: 32, away: 5, released: 3 },
  { time: "12 PM", occupied: 41, away: 8, released: 4 },
  { time: "2 PM", occupied: 37, away: 6, released: 7 },
  { time: "4 PM", occupied: 45, away: 9, released: 5 },
  { time: "6 PM", occupied: 29, away: 4, released: 8 }
];

export const workflow = [
  { title: "Scan desk QR", body: "Student scans a unique QR mounted on the desk." },
  { title: "Start session", body: "DeskGuard marks the desk occupied and starts the session timer." },
  { title: "Take a break", body: "Away Mode preserves the seat briefly with a visible countdown." },
  { title: "Release fairly", body: "Expired sessions move back to the free pool for the next student." }
];

export const stats = [
  { label: "Desks tracked", value: "50", icon: ShieldCheck },
  { label: "Seat-finding time", value: "-62%", icon: TimerReset },
  { label: "Hoarding incidents", value: "-38%", icon: Bell },
  { label: "Peak occupancy", value: "84%", icon: BarChart3 }
];
