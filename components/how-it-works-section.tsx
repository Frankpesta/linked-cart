"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, ShoppingCart, Truck, MapPin } from "lucide-react";

export default function HowItWorksSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const steps = [
		{
			icon: <Search className="h-6 w-6 text-primary" />,
			title: "Search any store, mall, or restaurant",
			description: "Find anything from any store in your city",
		},
		{
			icon: <ShoppingCart className="h-6 w-6 text-primary" />,
			title: "Place your order",
			description: "Describe what you need or browse listings",
		},
		{
			icon: <Truck className="h-6 w-6 text-primary" />,
			title: "We pick it up & deliver",
			description: "Using our intelligent logistics network",
		},
		{
			icon: <MapPin className="h-6 w-6 text-primary" />,
			title: "Track in real time",
			description: "Until it's at your doorstep",
		},
	];

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.4,
			},
		},
	};

	const stepVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: "easeOut" },
		},
	};

	// Horizontal line animation scaleX for large screens
	const horizontalLineVariants = {
		hidden: { scaleX: 0 },
		visible: { scaleX: 1, transition: { duration: 1, ease: "easeOut" } },
	};

	// Vertical line animation scaleY for small screens
	const verticalLineVariants = {
		hidden: { scaleY: 0 },
		visible: { scaleY: 1, transition: { duration: 1, ease: "easeOut" } },
	};

	return (
		<section
			ref={ref}
			id="how-it-works"
			className="relative py-20 bg-muted/60 flex justify-center"
			aria-label="How It Works Timeline">
			<div className="container max-w-6xl px-4">
				{/* Section Title */}
				<motion.h2
					className="text-4xl font-extrabold text-center mb-20 text-gray-900 dark:text-gray-100"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}>
					How It Works
				</motion.h2>

				{/* Timeline Container */}
				<motion.div
					className="relative flex flex-col lg:flex-row items-start lg:items-center"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}>
					{/* Connecting Line */}
					{/* Vertical line for mobile */}
					<motion.div
						className="absolute left-7 top-14 bottom-0 w-1 bg-primary origin-top rounded lg:hidden"
						variants={verticalLineVariants}
					/>

					{/* Horizontal line for large screens */}
					<motion.div
						className="hidden lg:block absolute top-14 left-20 right-20 h-1 bg-primary origin-left rounded"
						variants={horizontalLineVariants}
					/>

					{/* Steps */}
					{steps.map((step, idx) => (
						<motion.div
							key={idx}
							className="relative flex flex-col items-center text-center mb-16 lg:mb-0 lg:flex-1 lg:px-6"
							variants={stepVariants}>
							{/* Step Indicator */}
							<span
								className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-primary bg-white shadow-lg dark:bg-gray-900 relative z-10"
								aria-hidden="true">
								{/* Pulsating circle */}
								<motion.span
									className="absolute h-8 w-8 rounded-full bg-primary"
									animate={{
										scale: [1, 1.3, 1],
										opacity: [1, 0.6, 1],
									}}
									transition={{
										repeat: Infinity,
										duration: 2,
										ease: "easeInOut",
										delay: idx * 0.6,
									}}
								/>
								{/* Icon */}
								<span className="relative z-20">{step.icon}</span>
							</span>

							{/* Title */}
							<h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100 max-w-xs">
								{step.title}
							</h3>

							{/* Description */}
							<p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xs">
								{step.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
