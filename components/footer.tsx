import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-primary/15 border-t">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Image
							src={"/logo.svg"}
							width={120}
							height={120}
							alt="logo"
							objectFit="cover"
						/>
						<p className="text-sm text-muted-foreground">
							Shop Anywhere. Get It Delivered.
						</p>
						<div className="flex space-x-4">
							<Button
								variant="outline"
								className="text-primary"
								size="icon"
								asChild>
								<Link
									href="https://www.facebook.com/share/184KGxa631/?mibextid=wwXIfr"
									aria-label="Facebook">
									<Facebook className="h-5 w-5" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="icon"
								asChild
								className="text-primary">
								<Link
									href="https://x.com/linkedcartapp?s=21&t=SYrog4wVA60S1Y5_epinEg"
									aria-label="Twitter">
									<Twitter className="h-5 w-5" />
								</Link>
							</Button>
							<Button
								variant="outline"
								className="text-primary"
								size="icon"
								asChild>
								<Link
									href="https://www.instagram.com/linkedcartapp?igsh=MXVrM2dtZ3RtaHBrcg%3D%3D&utm_source=qr"
									aria-label="Instagram">
									<Instagram className="h-5 w-5" />
								</Link>
							</Button>
							<Button
								variant="outline"
								className="text-primary"
								size="icon"
								asChild>
								<Link
									href="https://www.linkedin.com/company/linkedcart/"
									aria-label="LinkedIn">
									<Linkedin className="h-5 w-5" />
								</Link>
							</Button>
							<Button
								variant="outline"
								className="text-primary"
								size="icon"
								asChild>
								<Link
									href="https://www.tiktok.com/@linkedcart?_t=ZS-8wPZ8ARDxuD&_r=1"
									aria-label="TikTok">
									<Image
										src={"/tiktok.svg"}
										width={20}
										height={20}
										alt="tiktok"
										sizes="icon"
										className="object-cover"
									/>
								</Link>
							</Button>
						</div>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-bold">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#mission"
									className="text-sm text-muted-foreground hover:text-primary transition-colors">
									Our Mission
								</Link>
							</li>
							<li>
								<Link
									href="/about-us"
									className="text-sm text-muted-foreground hover:text-primary transition-colors">
									About Us
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-bold">Resources</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/faq"
									className="text-sm text-muted-foreground hover:text-primary transition-colors">
									FAQ
								</Link>
							</li>
							<li>
								<Link
									href="#waitlist"
									className="text-sm text-muted-foreground hover:text-primary transition-colors">
									Support
								</Link>
							</li>
							<li>
								<Link
									href="#waitlist"
									className="text-sm text-muted-foreground hover:text-primary transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-lg font-bold">Legal</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/terms-conditions"
									className="text-sm text-muted-foreground hover:text-primary transition-colors">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="/privacy-policy"
									className="text-sm text-muted-foreground hover:text-primary transition-colors">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/cookie-policy"
									className="text-sm text-muted-foreground hover:text-primary transition-colors">
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t mt-12 pt-8 text-center">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} LinkedCart. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
