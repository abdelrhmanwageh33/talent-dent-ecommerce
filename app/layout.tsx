import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import NavBar from "./shared/NavBar/NavBar";
import ThemeProvider from "../provider/ThemeProvider";
import ReduxProvider from "../provider/ReduxProvider";
          import { Toaster } from "@/components/ui/toast"
import MobileBottomNav from "./shared/NavBar/_components/MobileBottomNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talent Dent",
  description: "Talent Dent Dental Supplies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full max-w-7xl mx-auto px-5 pb-20 lg:pb-0 sm:px-6 lg:px-8 flex flex-col bg-white dark:bg-[#06111F]">
        <ThemeProvider>
          <ReduxProvider>
 <NavBar />
          {children}

  <MobileBottomNav />
        <Toaster  />

          </ReduxProvider>

         
        </ThemeProvider>
      </body>
    </html>
  );
}