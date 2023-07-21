import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { GlobalContextProvider } from "@/app/context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "This is a Nextjs+Shadcn/ui demo",
  keywords: "AI,artificial intelligence,Machine Learning,Deep Learning",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
