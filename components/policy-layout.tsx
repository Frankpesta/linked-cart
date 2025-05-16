"use client";

import type React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";

interface PolicyLayoutProps {
	title: string;
	lastUpdated: string;
	children: React.ReactNode;
}

export default function PolicyLayout({
	title,
	lastUpdated,
	children,
}: PolicyLayoutProps) {
	return (
		<div className="min-h-screen pt-24 pb-16">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row gap-8">
					{/* Sidebar */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="md:w-64 flex-shrink-0">
						<div className="sticky top-24 space-y-6">
							<h3 className="text-lg font-semibold">Legal Documents</h3>
							<nav className="flex flex-col space-y-1">
								<Link
									href="/privacy-policy"
									className="flex items-center px-3 py-2 rounded-md hover:bg-muted transition-colors">
									<ChevronRight className="h-4 w-4 mr-2" />
									<span>Privacy Policy</span>
								</Link>
								<Link
									href="/terms-conditions"
									className="flex items-center px-3 py-2 rounded-md hover:bg-muted transition-colors">
									<ChevronRight className="h-4 w-4 mr-2" />
									<span>Terms and Conditions</span>
								</Link>
								<Link
									href="/cookie-policy"
									className="flex items-center px-3 py-2 rounded-md hover:bg-muted transition-colors">
									<ChevronRight className="h-4 w-4 mr-2" />
									<span>Cookie Policy</span>
								</Link>
								<Link
									href="/faq"
									className="flex items-center px-3 py-2 rounded-md hover:bg-muted transition-colors">
									<ChevronRight className="h-4 w-4 mr-2" />
									<span>FAQ</span>
								</Link>
							</nav>

							<div className="pt-4 border-t">
								<Link
									href="/"
									className="text-primary hover:text-primary/80 transition-colors">
									← Back to Home
								</Link>
							</div>
						</div>
					</motion.div>

					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex-1 max-w-3xl">
						<div className="bg-card border rounded-xl p-8 shadow-sm">
							<div className="mb-8">
								<h1 className="text-3xl font-bold mb-4">{title}</h1>
								<div className="flex items-center text-sm text-muted-foreground">
									<Clock className="h-4 w-4 mr-1" />
									<span>Last updated: {lastUpdated}</span>
								</div>
							</div>

							<div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
								{children}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
