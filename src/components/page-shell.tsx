import { Sidebar } from "@/components/nav";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-65px)]">
      <Sidebar />
      <main className="w-full px-4 py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
