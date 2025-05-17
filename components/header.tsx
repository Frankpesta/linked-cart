"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "Features", href: "#features" },
		{ name: "How It Works", href: "#how-it-works" },
		{ name: "For Merchants", href: "#merchants" },
		{ name: "For Drivers", href: "#drivers" },
	];

	return (
		<header
			className={cn(
				"fixed top-0 w-full z-50 transition-all duration-300",
				isScrolled
					? "bg-background/80 backdrop-blur-md shadow-sm"
					: "bg-transparent"
			)}>
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<Image
						src={"/logo.svg"}
						alt="logo"
						width={120}
						height={120}
						objectFit="cover"
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={cn(
								"text-lg font-medium transition-colors hover:text-primary",
								pathname === link.href
									? "text-primary"
									: "text-muted-foreground"
							)}>
							{link.name}
						</Link>
					))}
				</nav>

				<div className="flex items-center space-x-4">
					<ModeToggle />
					<Button asChild className="hidden md:inline-flex">
						<Link href="#waitlist" className="dark:text-white">
							Join Waitlist
						</Link>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background border-b">
						<div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className={cn(
										"text-lg font-medium transition-colors hover:text-primary py-2",
										pathname === link.href
											? "text-primary"
											: "text-muted-foreground"
									)}
									onClick={() => setMobileMenuOpen(false)}>
									{link.name}
								</Link>
							))}
							<Button asChild className="w-full">
								<Link
									href="#waitlist"
									onClick={() => setMobileMenuOpen(false)}
									className="dark:text-white">
									Join Waitlist
								</Link>
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
