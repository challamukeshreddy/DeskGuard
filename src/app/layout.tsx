import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeskGuard | Smart Library Seat Booking",
  description: "A hackathon MVP for real-time library seat booking, QR check-ins, and anti-hoarding workflows."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
