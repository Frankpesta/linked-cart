"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WaitlistForm from "./waitlist-form";
import Image from "next/image";

export default function WaitlistSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	return (
		<section ref={ref} id="waitlist" className="py-24">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
						transition={{ duration: 0.6 }}
						className="space-y-6">
						<h2 className="text-3xl md:text-4xl font-bold">
							Coming Soon – Be First in Line
						</h2>
						<p className="text-lg text-muted-foreground">
							We're launching soon. Want in early?
						</p>
						<p className="text-lg text-muted-foreground">
							Join the waitlist to be the first to try LinkedCart. Get notified
							at launch + receive exclusive early access offers and discounts.
						</p>

						<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
							<Image
								src="hero1.svg"
								alt="LinkedCart App Preview"
								width={600}
								height={600}
								className="object-cover"
							/>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-card border rounded-xl p-8 shadow-lg">
						<h3 className="text-2xl font-semibold mb-6">Join Our Waitlist</h3>
						<WaitlistForm />
						<p className="text-xs text-muted-foreground mt-4 text-center">
							Early access. First delivery discounts. No spam.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
