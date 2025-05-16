"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
	Briefcase,
	Users,
	GraduationCap,
	Building2,
	Heart,
} from "lucide-react";

export default function AudienceSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const audiences = [
		{
			icon: <Briefcase className="h-8 w-8 text-primary" />,
			title: "Busy professionals",
			description: "Who need essentials without the errands",
		},
		{
			icon: <Users className="h-8 w-8 text-primary" />,
			title: "Parents",
			description: "Juggling work, kids, and home",
		},
		{
			icon: <GraduationCap className="h-8 w-8 text-primary" />,
			title: "Students",
			description: "Craving midnight snacks or last-minute supplies",
		},
		{
			icon: <Building2 className="h-8 w-8 text-primary" />,
			title: "Small businesses",
			description: "That need quick re-ups on inventory or tools",
		},
		{
			icon: <Heart className="h-8 w-8 text-primary" />,
			title: "Seniors",
			description: "Who prefer convenience from the comfort of home",
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
		<section ref={ref} id="audience" className="py-24">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Made for You. Built for Real Life.
					</h2>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}>
					{audiences.map((audience, index) => (
						<motion.div
							key={index}
							className="bg-card border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
							variants={itemVariants}>
							<div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
								{audience.icon}
							</div>
							<h3 className="text-lg font-semibold mb-2">{audience.title}</h3>
							<p className="text-sm text-muted-foreground">
								{audience.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
