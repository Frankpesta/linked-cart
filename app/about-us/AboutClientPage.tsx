"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Clock,
	Truck,
	Search,
	MapPin,
	Sparkles,
	Lightbulb,
	Heart,
	Leaf,
	Zap,
	Layers,
	Store,
	BarChart,
	Mail,
	Phone,
	MessageSquare,
} from "lucide-react";

export default function AboutClientPage() {
	const introRef = useRef(null);
	const howItWorksRef = useRef(null);
	const valuesRef = useRef(null);
	const whyChooseRef = useRef(null);
	const communityRef = useRef(null);

	const introInView = useInView(introRef, { once: true, amount: 0.3 });
	const howItWorksInView = useInView(howItWorksRef, {
		once: true,
		amount: 0.3,
	});
	const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
	const whyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.3 });
	const communityInView = useInView(communityRef, { once: true, amount: 0.3 });

	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<div className="min-h-screen pt-24 pb-16">
			{/* Hero Section */}
			<section className="relative py-20 overflow-hidden bg-primary/5">
				<div className="absolute inset-0 overflow-hidden -z-10">
					<div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-blob"></div>
					<div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-blob animation-delay-2000"></div>
				</div>

				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-4xl md:text-5xl font-bold mb-6">
							About LinkedCart
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-xl md:text-2xl font-medium text-primary mb-8">
							Revolutionizing Your Shopping Experience, One Delivery at a Time
						</motion.p>
					</div>
				</div>
			</section>

			{/* Introduction Section */}
			<section ref={introRef} className="py-20">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							variants={fadeInUp}
							initial="hidden"
							animate={introInView ? "visible" : "hidden"}
							className="space-y-6">
							<p className="text-lg">
								At LinkedCart, we believe shopping should be simple, fast, and
								convenient. Whether it's your favorite store, a local
								restaurant, or a mall across town, we've built a platform to
								bring everything you want, right to your doorstep.
							</p>
							<p className="text-lg">
								Founded with a passion for innovation and convenience,
								LinkedCart is an AI-powered logistics delivery platform that
								connects customers with local stores, restaurants, and delivery
								drivers. Our mission is to make shopping more accessible by
								offering a seamless, reliable delivery experience for
								everyone—without the hassle.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={
								introInView
									? { opacity: 1, scale: 1 }
									: { opacity: 0, scale: 0.9 }
							}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="relative">
							<div className="relative w-full aspect-square max-w-md mx-auto">
								<Image
									src="/placeholder.svg?height=500&width=500"
									alt="LinkedCart Team"
									width={500}
									height={500}
									className="object-cover rounded-2xl shadow-xl"
								/>

								{/* Floating elements */}
								<div className="absolute -top-6 -right-6 bg-background rounded-xl shadow-lg p-4 animate-float">
									<div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
										<Sparkles className="h-8 w-8 text-primary" />
									</div>
								</div>

								<div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-lg p-4 animate-float animation-delay-1000">
									<div className="w-24 h-12 flex items-center justify-center">
										<span className="text-sm font-medium">Innovation</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section ref={howItWorksRef} className="py-20 bg-muted/50">
				<div className="container mx-auto px-4">
					<motion.div
						variants={fadeInUp}
						initial="hidden"
						animate={howItWorksInView ? "visible" : "hidden"}
						className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							How It Works
						</h2>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						animate={howItWorksInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								icon: <Search className="h-10 w-10 text-primary" />,
								title: "Order Anything, Anytime",
								description:
									"Simply log in to LinkedCart, search for your favorite store, restaurant, or shop, and place your order. You'll find everything you need in just a few clicks.",
							},
							{
								icon: <Truck className="h-10 w-10 text-primary" />,
								title: "Connect with a Delivery Driver",
								description:
									"Once your order is placed, our AI-powered system matches your request with the best available driver in your area for quick and efficient delivery.",
							},
							{
								icon: <MapPin className="h-10 w-10 text-primary" />,
								title: "Get Your Order Delivered Fast",
								description:
									"Track your delivery in real-time through the LinkedCart app. You'll receive updates at every step until your order arrives at your doorstep.",
							},
						].map((step, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								className="bg-card border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
								<div className="mx-auto mb-6 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
									{step.icon}
								</div>
								<h3 className="text-xl font-semibold mb-4">{step.title}</h3>
								<p className="text-muted-foreground">{step.description}</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Our Values Section */}
			<section ref={valuesRef} className="py-20">
				<div className="container mx-auto px-4">
					<motion.div
						variants={fadeInUp}
						initial="hidden"
						animate={valuesInView ? "visible" : "hidden"}
						className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						animate={valuesInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: <Clock className="h-8 w-8 text-primary" />,
								title: "Convenience",
								description:
									"We understand the value of time. LinkedCart makes shopping and delivery as easy as possible, allowing you to focus on what matters most.",
							},
							{
								icon: <Lightbulb className="h-8 w-8 text-primary" />,
								title: "Innovation",
								description:
									"Powered by AI, our platform is always improving to deliver smarter, faster, and more efficient solutions.",
							},
							{
								icon: <Heart className="h-8 w-8 text-primary" />,
								title: "Customer Satisfaction",
								description:
									"Your satisfaction is our top priority. We go above and beyond to ensure every order is completed on time and in perfect condition.",
							},
							{
								icon: <Leaf className="h-8 w-8 text-primary" />,
								title: "Sustainability",
								description:
									"We're committed to minimizing our environmental impact by optimizing delivery routes and encouraging eco-friendly practices.",
							},
						].map((value, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								className="bg-card border rounded-xl p-6 hover:shadow-md transition-all duration-300">
								<div className="mb-4 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
									{value.icon}
								</div>
								<h3 className="text-lg font-semibold mb-2">{value.title}</h3>
								<p className="text-sm text-muted-foreground">
									{value.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Why Choose LinkedCart Section */}
			<section ref={whyChooseRef} className="py-20 bg-muted/50">
				<div className="container mx-auto px-4">
					<motion.div
						variants={fadeInUp}
						initial="hidden"
						animate={whyChooseInView ? "visible" : "hidden"}
						className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Why Choose LinkedCart?
						</h2>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="hidden"
						animate={whyChooseInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: <Zap className="h-8 w-8 text-primary" />,
								title: "AI-Optimized Delivery",
								description:
									"Our platform uses advanced AI technology to match your orders with the best drivers and optimize routes for fast delivery.",
							},
							{
								icon: <Layers className="h-8 w-8 text-primary" />,
								title: "Seamless Experience",
								description:
									"From ordering to delivery, we make the process smooth, quick, and hassle-free.",
							},
							{
								icon: <Store className="h-8 w-8 text-primary" />,
								title: "Wide Selection",
								description:
									"Choose from any store, restaurant, or mall. If it's out there, it's available to you through LinkedCart.",
							},
							{
								icon: <MapPin className="h-8 w-8 text-primary" />,
								title: "Real-Time Tracking",
								description:
									"Get live updates on your order's status with our user-friendly app.",
							},
							{
								icon: <Truck className="h-8 w-8 text-primary" />,
								title: "Reliable Service",
								description:
									"With a dedicated team of professional drivers and top-notch customer support, we ensure your experience is seamless from start to finish.",
							},
							{
								icon: <BarChart className="h-8 w-8 text-primary" />,
								title: "Data-Driven Decisions",
								description:
									"We continuously analyze performance data to improve our service and provide you with the best possible experience.",
							},
						].map((reason, index) => (
							<Card
								key={index}
								className="overflow-hidden hover:shadow-lg transition-all duration-300">
								<CardContent className="p-6 pt-6">
									<div className="flex items-start space-x-4">
										<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
											{reason.icon}
										</div>
										<div>
											<h3 className="text-lg font-semibold mb-2">
												{reason.title}
											</h3>
											<p className="text-sm text-muted-foreground">
												{reason.description}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</motion.div>
				</div>
			</section>

			{/* Join the Community Section */}
			<section ref={communityRef} className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<motion.div
							variants={fadeInUp}
							initial="hidden"
							animate={communityInView ? "visible" : "hidden"}
							className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Join the LinkedCart Community
							</h2>
							<p className="text-lg text-muted-foreground">
								Whether you're a shopper, a store, or a driver, LinkedCart is
								creating new possibilities for everyone. As we continue to grow,
								we invite you to join our journey—whether you're looking for the
								latest deals, need a reliable delivery driver, or want to
								partner with us as a merchant.
							</p>
							<p className="text-xl font-medium mt-6">
								Be a part of the LinkedCart revolution.
							</p>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							initial="hidden"
							animate={communityInView ? "visible" : "hidden"}
							transition={{ delay: 0.2 }}
							className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
							<Button size="lg" asChild>
								<Link href="/#waitlist">Join Our Waitlist</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/contact">Contact Us</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 bg-primary/5">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Contact Us
							</h2>
							<p className="text-lg text-muted-foreground">
								For any questions or inquiries, feel free to reach out to us.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
							<Card className="bg-card/50 hover:bg-card transition-colors duration-300">
								<CardContent className="pt-6 p-6">
									<div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<Mail className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-lg font-semibold mb-2">Email</h3>
									<a
										href="mailto:info@linkedcart.com"
										className="text-primary hover:underline">
										info@linkedcart.com
									</a>
								</CardContent>
							</Card>

							<Card className="bg-card/50 hover:bg-card transition-colors duration-300">
								<CardContent className="pt-6 p-6">
									<div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<Phone className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-lg font-semibold mb-2">Phone</h3>
									<a
										href="tel:+1234567890"
										className="text-primary hover:underline">
										+1 (234) 567-890
									</a>
								</CardContent>
							</Card>

							<Card className="bg-card/50 hover:bg-card transition-colors duration-300">
								<CardContent className="pt-6 p-6">
									<div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<MessageSquare className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-lg font-semibold mb-2">Support</h3>
									<Link
										href="/contact"
										className="text-primary hover:underline">
										Visit our Contact Page
									</Link>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
}
