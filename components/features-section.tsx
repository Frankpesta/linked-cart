"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
	ShoppingBag,
	Brain,
	MapPin,
	CreditCard,
	BarChart3,
} from "lucide-react";

export default function FeaturesSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	const features = [
		{
			icon: <ShoppingBag className="h-10 w-10 text-primary" />,
			title: "Order From *Any* Store or Restaurant",
			description: 'No restrictions. No "only on our platform" nonsense.',
		},
		{
			icon: <Brain className="h-10 w-10 text-primary" />,
			title: "AI-Powered Delivery Matching",
			description:
				"We use AI to pair your order with the most efficient delivery person.",
		},
		{
			icon: <MapPin className="h-10 w-10 text-primary" />,
			title: "Hyperlocal Reach",
			description:
				"Groceries, gifts, takeout, gadgets - if it's nearby, we'll bring it.",
		},
		{
			icon: <CreditCard className="h-10 w-10 text-primary" />,
			title: "Flexible Payment & Tracking",
			description: "Track your order in real-time and pay securely in the app.",
		},
		{
			icon: <BarChart3 className="h-10 w-10 text-primary" />,
			title: "Built to Scale",
			description:
				"Whether you're an individual or a business, LinkedCart works for you.",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section ref={ref} id="features" className="py-24">
			<div className="container mx-auto px-6 max-w-7xl">
				{/* Header */}
				<motion.div
					className="text-center max-w-3xl mx-auto mb-20"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.7 }}>
					<h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
						What Makes LinkedCart Different
					</h2>
					<p className="text-xl text-muted-foreground">
						LinkedCart isn't just another delivery app. It's a delivery
						revolution.
					</p>
				</motion.div>

				{/* Features Grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}>
					{features.map((feature, idx) => (
						<motion.article
							key={idx}
							className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default"
							variants={itemVariants}
							tabIndex={0} // Make card focusable for accessibility
							aria-labelledby={`feature-title-${idx}`}
							role="region">
							{/* Icon Container */}
							<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
								{feature.icon}
							</div>

							{/* Title */}
							<h3
								id={`feature-title-${idx}`}
								className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-primary">
								{feature.title}
							</h3>

							{/* Description */}
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								{feature.description}
							</p>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
}
