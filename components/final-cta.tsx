"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCTA() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.7 });

	return (
		<section ref={ref} className="py-24">
			<div className="container mx-auto px-4">
				<motion.div
					className="max-w-3xl mx-auto text-center space-y-8"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.8 }}>
					<h2 className="text-3xl md:text-4xl font-bold">
						Don't Miss the Launch
					</h2>
					<p className="text-xl text-muted-foreground">
						LinkedCart is almost here. Don't be last to know.
					</p>
					<p className="text-lg text-muted-foreground">
						Join our waitlist today and experience a smarter, faster, more
						flexible way to shop and receive anything from any store around you.
					</p>
					<div className="pt-4">
						<Button size="lg" asChild>
							<Link href="#waitlist" className="dark:text-white">
								Join the Waitlist
							</Link>
						</Button>
					</div>
					<p className="text-sm text-muted-foreground">
						Early access. First delivery discounts. No spam.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
