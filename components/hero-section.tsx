"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { animate } from "animejs";
import Link from "next/link";

export default function HeroSection() {
	const animationRef = useRef<ReturnType<typeof animate> | null>(null);

	useEffect(() => {
		if (animationRef.current) return;

		animationRef.current = animate(".hero-animation-element", {
			translateY: [-20, 0],
			opacity: [0, 1],
			delay: 200,
			easing: "easeOutQuad",
		});

		animate(".hero-image", {
			scale: [0.9, 1],
			opacity: [0, 1],
			easing: "easeOutQuad",
			duration: 1000,
			delay: 600,
		});
	}, []);

	return (
		<section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background dark:from-primary/10 dark:to-background -z-10"></div>

			{/* Animated shapes */}
			<div className="absolute inset-0 overflow-hidden -z-10">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-blob"></div>
				<div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-blob animation-delay-2000"></div>
				<div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-blob animation-delay-4000"></div>
			</div>

			<div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div className="space-y-8">
					<motion.h1
						className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed hero-animation-element"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}>
						Shop Anywhere. <br />
						<span className="text-primary">Get It Delivered.</span>
					</motion.h1>

					<motion.p
						className="text-xl text-muted-foreground hero-animation-element"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						LinkedCart connects you to every store, mall, and restaurant in your
						city — all in one app. From clothing to groceries, gadgets to
						gourmet — if it's in your city, we'll get it to your doorstep.
					</motion.p>
					<motion.div
						className="flex flex-col sm:flex-row gap-4 pt-4 hero-animation-element"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}>
						<Button size="lg" asChild>
							<Link href="#waitlist">Join the Waitlist</Link>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<Link href="#how-it-works">How It Works</Link>
						</Button>
					</motion.div>

					<motion.p
						className="text-sm text-muted-foreground hero-animation-element"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}>
						Be first to access LinkedCart when we launch. Get exclusive early
						access + discounts.
					</motion.p>
				</div>

				<motion.div
					className="relative hero-image"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.6 }}>
					<div className="relative w-full aspect-square max-w-md mx-auto">
						<Image
							src="/appsamp3.svg"
							alt="LinkedCart App Screenshot"
							width={600}
							height={600}
							className="object-contain rounded-2xl shadow-xl rotate-[12deg] hover:rotate-0 transition-transform duration-500 hero-image"
							priority
						/>

						{/* Floating elements */}
						<div className="absolute -top-6 -right-6 bg-background rounded-xl shadow-lg p-4 animate-float">
							<div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
								<span className="text-primary font-bold dark:text-white">
									24/7
								</span>
							</div>
						</div>

						<div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-lg p-4 animate-float animation-delay-1000">
							<div className="w-24 h-12 flex items-center justify-center">
								<span className="text-sm font-medium">Any Store</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
