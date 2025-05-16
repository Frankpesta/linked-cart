"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DriversSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const benefits = [
		{
			icon: <Clock className="h-7 w-7 text-primary" />,
			title: "Flexible Hours",
			description: "Work when you want, as much as you want.",
		},
		{
			icon: <DollarSign className="h-7 w-7 text-primary" />,
			title: "Competitive Pay",
			description: "Earn competitive rates plus tips.",
		},
		{
			icon: <Calendar className="h-7 w-7 text-primary" />,
			title: "Choose Your Orders",
			description: "Accept only the orders you want to deliver.",
		},
		{
			icon: <MapPin className="h-7 w-7 text-primary" />,
			title: "Local Deliveries",
			description: "Stay in your neighborhood or explore the city.",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15 },
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
		<section
			ref={ref}
			id="drivers"
			className="relative py-24 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5">
			<div className="container mx-auto px-6 max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left: Image */}
					<motion.div
						initial={{ opacity: 0, x: -60 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/20">
						<Image
							src="/appsamp2.svg"
							alt="LinkedCart Driver App"
							width={600}
							height={600}
							className="object-cover w-full h-1/2"
							priority
						/>
					</motion.div>

					{/* Right: Content */}
					<motion.div
						initial={{ opacity: 0, x: 60 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
						className="space-y-10">
						<header className="max-w-xl">
							<h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
								For Drivers – Earn with Flexibility
							</h2>
							<p className="text-xl text-muted-foreground mb-2">
								Become a LinkedCart Driver. Work on Your Schedule.
							</p>
							<p className="text-lg text-muted-foreground leading-relaxed">
								Earn money by picking up and delivering orders in your area. Set
								your hours. Accept only the orders you want.
							</p>
						</header>

						{/* Benefits List */}
						<motion.div
							className="grid grid-cols-1 sm:grid-cols-2 gap-8"
							variants={containerVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}>
							{benefits.map((benefit, idx) => (
								<motion.div
									key={idx}
									className="flex items-start space-x-5 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
									variants={itemVariants}
									tabIndex={0}
									role="group"
									aria-labelledby={`benefit-title-${idx}`}>
									<div className="flex-shrink-0 rounded-lg bg-primary/20 p-3 text-primary">
										{benefit.icon}
									</div>
									<div>
										<h3
											id={`benefit-title-${idx}`}
											className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
											{benefit.title}
										</h3>
										<p className="text-muted-foreground text-sm">
											{benefit.description}
										</p>
									</div>
								</motion.div>
							))}
						</motion.div>

						{/* Call to Action */}
						<Button size="lg" className="mt-6" asChild>
							<Link href="#waitlist" aria-label="Join as a LinkedCart Driver">
								Join as a Driver
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
