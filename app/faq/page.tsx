"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function FAQPage() {
	const [searchQuery, setSearchQuery] = useState("");

	const faqs = [
		{
			category: "General",
			questions: [
				{
					question: "What is LinkedCart?",
					answer:
						"LinkedCart is an on-demand delivery platform that connects you to every store, mall, and restaurant in your city. We allow you to order anything from any store and have it delivered to your doorstep.",
				},
				{
					question: "When will LinkedCart launch?",
					answer:
						"LinkedCart is currently in pre-launch phase. Join our waitlist to be notified when we launch in your area and to receive exclusive early access offers and discounts.",
				},
				{
					question: "Which cities will LinkedCart be available in?",
					answer:
						"We're planning to launch initially in major Canadian cities, with plans to expand to more locations soon after. Join our waitlist to be notified when we launch in your area.",
				},
				{
					question: "How is LinkedCart different from other delivery apps?",
					answer:
						"LinkedCart allows you to order from ANY store or restaurant, not just those that have partnered with us. We use AI to match your order with the most efficient delivery person, and our hyperlocal approach ensures fast delivery times.",
				},
			],
		},
		{
			category: "Orders & Delivery",
			questions: [
				{
					question: "How does ordering work?",
					answer:
						"Simply search for any store, mall, or restaurant in the app, place your order by describing what you need or browsing listings, and we'll pick it up and deliver it to your doorstep. You can track your order in real-time until it arrives.",
				},
				{
					question: "How much does delivery cost?",
					answer:
						"Delivery fees vary based on distance, order size, and time of day. You'll always see the exact delivery fee before confirming your order, with no hidden charges.",
				},
				{
					question: "How long does delivery take?",
					answer:
						"Delivery times depend on your location, the store's location, and current demand. Most deliveries arrive within 30-60 minutes, and you can track your order's progress in real-time through the app.",
				},
				{
					question: "Can I schedule a delivery for later?",
					answer:
						"Yes, LinkedCart will allow you to schedule deliveries in advance for a specific date and time that works for you.",
				},
			],
		},
		{
			category: "For Merchants",
			questions: [
				{
					question: "How can my store or restaurant join LinkedCart?",
					answer:
						"Join our waitlist as a merchant, and we'll contact you with details on how to get your business set up on LinkedCart when we launch in your area.",
				},
				{
					question: "Are there any fees for merchants?",
					answer:
						"LinkedCart offers flexible fee structures for merchants. We'll work with you to find a plan that suits your business needs and volume.",
				},
				{
					question: "Do I need my own delivery team?",
					answer:
						"No, LinkedCart handles all delivery logistics. You focus on preparing the orders, and we'll take care of getting them to customers.",
				},
				{
					question: "How will I receive orders?",
					answer:
						"You'll receive orders through our merchant app or web portal. We can also integrate with many popular POS systems.",
				},
			],
		},
		{
			category: "For Drivers",
			questions: [
				{
					question: "How can I become a LinkedCart driver?",
					answer:
						"Join our waitlist as a driver, and we'll contact you with details on how to apply when we launch in your area.",
				},
				{
					question: "What are the requirements to be a driver?",
					answer:
						"Requirements include being at least 18 years old, having a valid driver's license, access to a vehicle (car, bike, or scooter), a smartphone, and passing a background check.",
				},
				{
					question: "How much can I earn as a driver?",
					answer:
						"Earnings depend on how many deliveries you complete, the distance traveled, and peak times. Drivers keep 100% of their tips and can see potential earnings before accepting an order.",
				},
				{
					question: "Can I choose my own schedule?",
					answer:
						"Yes, LinkedCart offers complete flexibility. Work when you want, for as long as you want, and accept only the orders you want to deliver.",
				},
			],
		},
		{
			category: "Account & Payment",
			questions: [
				{
					question: "What payment methods are accepted?",
					answer:
						"LinkedCart will accept all major credit cards, debit cards, and digital wallets like Apple Pay and Google Pay.",
				},
				{
					question: "Is my payment information secure?",
					answer:
						"Yes, LinkedCart uses industry-standard encryption and security measures to protect your payment information. We never store your full credit card details on our servers.",
				},
				{
					question: "Can I save multiple delivery addresses?",
					answer:
						"Yes, you can save multiple addresses in your profile, such as home, work, or other frequently used locations.",
				},
				{
					question: "How do I contact customer support?",
					answer:
						"Once launched, LinkedCart will offer in-app support, email support, and phone support for urgent issues.",
				},
			],
		},
	];

	const filteredFAQs = searchQuery
		? faqs
				.map((category) => ({
					...category,
					questions: category.questions.filter(
						(faq) =>
							faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
							faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
					),
				}))
				.filter((category) => category.questions.length > 0)
		: faqs;

	return (
		<div className="min-h-screen pt-24 pb-16">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold mb-4">
							Frequently Asked Questions
						</h1>
						<p className="text-lg text-muted-foreground mb-8">
							Find answers to common questions about LinkedCart's services, how
							it works, and more.
						</p>
						<div className="relative max-w-md mx-auto">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
							<Input
								type="text"
								placeholder="Search questions..."
								className="pl-10"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</div>
					</div>

					<div className="space-y-10">
						{filteredFAQs.map(
							(category, index) =>
								category.questions.length > 0 && (
									<motion.div
										key={category.category}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}>
										<h2 className="text-2xl font-semibold mb-4">
											{category.category}
										</h2>
										<Accordion
											type="single"
											collapsible
											className="border rounded-lg">
											{category.questions.map((faq, faqIndex) => (
												<AccordionItem
													key={faqIndex}
													value={`${category.category}-${faqIndex}`}>
													<AccordionTrigger className="px-4 hover:no-underline hover:bg-muted/50">
														<span className="text-left">{faq.question}</span>
													</AccordionTrigger>
													<AccordionContent className="px-4 pb-4 pt-2">
														<p className="text-muted-foreground">
															{faq.answer}
														</p>
													</AccordionContent>
												</AccordionItem>
											))}
										</Accordion>
									</motion.div>
								)
						)}

						{filteredFAQs.length === 0 ||
						filteredFAQs.every(
							(category) => category.questions.length === 0
						) ? (
							<div className="text-center py-10">
								<p className="text-lg text-muted-foreground">
									No results found for "{searchQuery}"
								</p>
								<p className="mt-2">
									Try a different search term or browse the categories
								</p>
							</div>
						) : null}
					</div>

					<div className="mt-16 p-6 bg-primary/5 rounded-xl text-center">
						<h3 className="text-xl font-semibold mb-2">
							Still have questions?
						</h3>
						<p className="text-muted-foreground mb-4">
							Can't find the answer you're looking for? Please contact our
							support team.
						</p>
						<div className="flex justify-center">
							<a
								href="mailto:support@linkedcart.com"
								className="text-primary hover:text-primary/80 transition-colors">
								support@linkedcart.com
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
