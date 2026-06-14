"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, LayoutDashboard, Library, LogIn, MapPinned, QrCode, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: ShieldCheck },
  { href: "/map", label: "Map", icon: MapPinned },
  { href: "/student", label: "Student", icon: BookOpenCheck },
  { href: "/librarian", label: "Librarian", icon: LayoutDashboard },
  { href: "/qr", label: "QR Demo", icon: QrCode }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground shadow-glow">
            <Library className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">DeskGuard</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/8 hover:text-white",
                  pathname === item.href && "bg-white/10 text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Button asChild size="sm" variant="secondary">
          <Link href="/login">
            <LogIn className="h-4 w-4" />
            Demo Login
          </Link>
        </Button>
      </div>
    </header>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-black/20 p-4 backdrop-blur-xl lg:block">
      <div className="mb-8 flex items-center gap-2 px-2">
        <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
          <Library className="h-5 w-5" />
        </span>
        <div>
          <p className="font-semibold">DeskGuard</p>
          <p className="text-xs text-muted-foreground">Hackathon MVP</p>
        </div>
      </div>
      <nav className="space-y-1">
        {navItems.slice(1).map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/8 hover:text-white",
                pathname === item.href && "bg-white/10 text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
