import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LinkedCart - Shop Anywhere. Get It Delivered.",
	description:
		"LinkedCart connects you to every store, mall, and restaurant in your city — all in one app.",
	keywords: "delivery, shopping, local stores, restaurants, on-demand delivery",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange>
					<div className="flex min-h-screen flex-col">
						<Header />
						<div className="flex-1">{children}</div>
						<Footer />
						<BackToTop />
					</div>
					<Toaster position="top-right" />
				</ThemeProvider>
			</body>
		</html>
	);
}
