import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gemini Agent Framework | Google Cloud Rapid Agent Hackathon 2026",
  description: "Building agents that don't just answer questions — they accomplish missions. Powered by Gemini 3 and partner MCP servers.",
  keywords: ["Gemini", "AI Agents", "Google Cloud", "Agent Builder", "MCP", "GitLab", "DevOps", "Automation"],
  authors: [{ name: "Gemini Agent Framework Team" }],
  openGraph: {
    title: "Gemini Agent Framework",
    description: "Building agents that accomplish missions, not just answer questions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
