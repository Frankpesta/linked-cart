"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	const testimonials = [
		{
			quote: "Finally, an app that lets me order from literally anywhere!",
			name: "Sarah J.",
			initial: "SJ",
		},
		{
			quote: "I use LinkedCart for everything from coffee to clothing.",
			name: "Michael T.",
			initial: "MT",
		},
		{
			quote: "This will change how we shop forever.",
			name: "Priya K.",
			initial: "PK",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section ref={ref} id="testimonials" className="py-24">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Why People Are Excited About LinkedCart
					</h2>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}>
					{testimonials.map((testimonial, index) => (
						<motion.div key={index} variants={itemVariants}>
							<Card className="h-full">
								<CardContent className="p-6 flex flex-col h-full">
									<Quote className="h-8 w-8 text-primary/60 mb-4" />
									<p className="text-lg mb-6 flex-grow">
										"{testimonial.quote}"
									</p>
									<div className="flex items-center">
										<Avatar className="h-10 w-10 mr-3">
											<AvatarFallback className="bg-primary/10 text-primary">
												{testimonial.initial}
											</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-medium">{testimonial.name}</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
