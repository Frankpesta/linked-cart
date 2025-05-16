"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Store, TrendingUp, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

export default function MerchantsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const benefits = [
		{
			icon: <TrendingUp className="h-8 w-8 text-primary" />,
			title: "Expand Your Reach",
			description:
				"Connect with new customers in your area without marketing costs",
		},
		{
			icon: <Store className="h-8 w-8 text-primary" />,
			title: "No Tech Headaches",
			description: "We handle the technology, you focus on your business",
		},
		{
			icon: <Clock className="h-8 w-8 text-primary" />,
			title: "Quick Setup",
			description: "Get started in minutes, not weeks",
		},
		{
			icon: <DollarSign className="h-8 w-8 text-primary" />,
			title: "No Delivery Team Needed",
			description: "We handle all logistics and delivery",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section ref={ref} id="merchants" className="py-24">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						For Local Stores & Restaurants
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Have a Store or Restaurant? Let Us Help You Grow.
					</p>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
						LinkedCart connects local merchants with new customers and handles
						all logistics. No tech headaches. No delivery team? No problem.
						We'll help you scale your business without extra overhead.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}>
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							className="bg-card border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
							variants={itemVariants}>
							<div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
								{benefit.icon}
							</div>
							<h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
							<p className="text-sm text-muted-foreground">
								{benefit.description}
							</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6, delay: 0.4 }}>
					<Button size="lg" asChild>
						<Link href="#waitlist">Join as a Merchant</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
