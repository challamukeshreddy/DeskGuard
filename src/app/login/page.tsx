"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, GraduationCap, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="grid min-h-[calc(100vh-65px)] place-items-center px-4 py-12">
        <div className="w-full max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-sm text-primary">Mock Login</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Choose a demo account.</h1>
            <p className="mt-3 text-muted-foreground">No auth backend. Just fast paths for hackathon storytelling.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="mt-5 text-2xl font-semibold">Student Account</h2>
              <p className="mt-3 text-muted-foreground">View the active seat, away timer, booking history, and notifications.</p>
              <div className="mt-5 rounded-md bg-white/8 p-4 text-sm">
                <p className="font-medium">maya@student.edu</p>
                <p className="text-muted-foreground">Password: demo123</p>
              </div>
              <Button asChild className="mt-5 w-full">
                <Link href="/student">
                  Continue as student
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h2 className="mt-5 text-2xl font-semibold">Librarian Account</h2>
              <p className="mt-3 text-muted-foreground">Monitor desk counts, abandoned seats, charts, and alert queues.</p>
              <div className="mt-5 rounded-md bg-white/8 p-4 text-sm">
                <p className="font-medium">librarian@campus.edu</p>
                <p className="text-muted-foreground">Password: demo123</p>
              </div>
              <Button asChild className="mt-5 w-full">
                <Link href="/librarian">
                  Continue as librarian
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <BadgeCheck className="h-4 w-4 text-primary" />
            Simulated accounts, fake API data, and prototype-only flows.
          </div>
        </div>
      </main>
    </>
  );
}
