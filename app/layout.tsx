import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Creative Technologist",
  description: "Senior CS Major exploring systems and expression through code and art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Simple Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-bold text-neutral-900">
                Your Name
              </a>
              
              <div className="flex gap-8">
                <a href="/projects" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Projects
                </a>
                <a href="/studio" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Studio
                </a>
                <a href="/about" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Add top padding to account for fixed nav */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}