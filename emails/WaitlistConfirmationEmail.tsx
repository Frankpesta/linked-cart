import * as React from "react";
import {
	Html,
	Head,
	Preview,
	Body,
	Container,
	Section,
	Text,
} from "@react-email/components";

export function WaitlistConfirmationEmail({ name }: { name: string }) {
	return (
		<Html lang="en">
			<Head />
			<Preview>You’re In! Welcome to the Future of Grocery Delivery 🛒</Preview>
			<Body
				style={{
					background: "#f9fafb",
					fontFamily: "Arial, sans-serif",
					margin: 0,
					padding: 0,
				}}>
				<Container
					style={{
						background: "#ffffff",
						padding: "32px",
						borderRadius: "8px",
						margin: "40px auto",
						maxWidth: "600px",
						boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
					}}>
					{/* Header */}
					<Section style={{ marginBottom: "24px", textAlign: "center" }}>
						<Text
							style={{
								fontSize: "22px",
								fontWeight: "bold",
								color: "#3b82f6",
								marginBottom: "8px",
							}}>
							Thanks for Joining the LinkedCart Waitlist
						</Text>
					</Section>

					{/* Body */}
					<Section>
						<Text
							style={{
								fontSize: "16px",
								color: "#111827",
								lineHeight: "26px",
								marginBottom: "16px",
							}}>
							Hi {name},
						</Text>
						<Text
							style={{
								fontSize: "16px",
								color: "#6b7280",
								lineHeight: "26px",
								marginBottom: "16px",
							}}>
							We’re thrilled to welcome you to the LinkedCart community - a
							smarter, faster, and more local way to get groceries delivered.
							You’ve just taken the first step toward experiencing grocery
							delivery reimagined.
						</Text>
						<Text
							style={{
								fontSize: "16px",
								color: "#111827",
								lineHeight: "26px",
								marginBottom: "16px",
							}}>
							At LinkedCart, we believe that convenience, affordability, and
							dignity should define every household’s food journey. That’s why
							we’re building a powerful platform that connects you to multiple
							local vendors in a single order - delivered with care by trusted
							community agents.
						</Text>

						<Text
							style={{
								fontSize: "16px",
								color: "#111827",
								lineHeight: "26px",
								marginBottom: "12px",
							}}>
							As part of our early access list, you’ll be the first to:
						</Text>
						<ul
							style={{
								color: "#10b981",
								fontSize: "16px",
								margin: "0 0 16px 20px",
								padding: 0,
							}}>
							<li>✅ Try our beta app</li>
							<li>✅ Access exclusive launch perks</li>
							<li>
								✅ Help shape a better shopping experience for your neighborhood
							</li>
						</ul>

						<Text
							style={{
								fontSize: "16px",
								color: "#6b7280",
								lineHeight: "26px",
								marginBottom: "16px",
							}}>
							Stay tuned - we’ll be in touch soon with updates on your launch
							city, app previews, and how to refer your friends to move up the
							waitlist.
						</Text>

						<Text
							style={{
								fontSize: "16px",
								color: "#6b7280",
								lineHeight: "26px",
								marginBottom: "24px",
							}}>
							In the meantime, follow us on{" "}
							<a
								href="https://www.linkedin.com/company/linkedcart/"
								style={{ color: "#3b82f6", textDecoration: "underline" }}
								target="_blank"
								rel="noopener noreferrer">
								LinkedIn
							</a>
							,{" "}
							<a
								href="https://www.instagram.com/linkedcartapp?igsh=MXVrM2dtZ3RtaHBrcg%3D%3D&utm_source=qr"
								style={{ color: "#3b82f6", textDecoration: "underline" }}
								target="_blank"
								rel="noopener noreferrer">
								Instagram
							</a>
							,{" "}
							<a
								href="https://x.com/linkedcartapp?s=21&t=SYrog4wVA60S1Y5_epinEg"
								style={{ color: "#3b82f6", textDecoration: "underline" }}
								target="_blank"
								rel="noopener noreferrer">
								Twitter
							</a>{" "}
							for behind-the-scenes looks and product drops.
						</Text>

						<Text
							style={{
								fontSize: "16px",
								color: "#111827",
								lineHeight: "26px",
								marginBottom: "8px",
							}}>
							Welcome to the cart that connects it all.
						</Text>

						<Text
							style={{
								fontSize: "16px",
								color: "#3b82f6",
								fontWeight: "bold",
								marginBottom: "4px",
							}}>
							- Team LinkedCart
						</Text>
						<Text
							style={{
								fontSize: "14px",
								color: "#6b7280",
								fontStyle: "italic",
							}}>
							Delivering groceries. One cart. One family.
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}
