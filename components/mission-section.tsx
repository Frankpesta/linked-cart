"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Adjust import path accordingly

export default function MissionSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	// Animation variants for content fade + slide
	const contentVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section ref={ref} id="mission" className="py-24">
			<div className="container mx-auto px-4 max-w-3xl">
				<Tabs defaultValue="mission" className="space-y-8">
					{/* Tabs List */}
					<TabsList className="grid w-full grid-cols-2 rounded-md bg-background p-1 text-muted-foreground">
						<TabsTrigger
							value="mission"
							className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2">
							Our Mission
						</TabsTrigger>
						<TabsTrigger
							value="vision"
							className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2">
							Our Vision
						</TabsTrigger>
					</TabsList>

					{/* Mission Content */}
					<TabsContent value="mission" className="focus:outline-none">
						<motion.div
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							variants={contentVariants}
							key="mission"
							className="space-y-4 text-center">
							<h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
							<p className="text-lg text-muted-foreground">
								To simplify everyday shopping by using smart logistics and local
								delivery networks to bring anything - from any store - right to
								your door.
							</p>
						</motion.div>
					</TabsContent>

					{/* Vision Content */}
					<TabsContent value="vision" className="focus:outline-none">
						<motion.div
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							variants={contentVariants}
							key="vision"
							className="space-y-4 text-center">
							<h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
							<p className="text-lg text-muted-foreground">
								To become the most trusted on-demand delivery and shopping
								platform in Canada - empowering users with convenience,
								retailers with reach, and drivers with opportunity.
							</p>
						</motion.div>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
