import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Job Dhudho – Find the right job for you",
    template: "%s | Job Dhudho"
  },
  description: "Discover verified job opportunities across India. Search by role, skills, location and experience on Job Dhudho.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
