import HeroSection from "@/components/hero-section";
import MissionSection from "@/components/mission-section";
import FeaturesSection from "@/components/features-section";
import HowItWorksSection from "@/components/how-it-works-section";
import AudienceSection from "@/components/audience-section";
import WaitlistSection from "@/components/waitlist-section";
import MerchantsSection from "@/components/merchants-section";
import DriversSection from "@/components/drivers-section";
import TestimonialsSection from "@/components/testimonials-section";
import FinalCTA from "@/components/final-cta";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<HeroSection />
			<MissionSection />
			<FeaturesSection />
			{/* <HowItWorksSection /> */}
			<AudienceSection />
			<WaitlistSection />
			<MerchantsSection />
			<DriversSection />
			{/* <TestimonialsSection /> */}
			<FinalCTA />
		</main>
	);
}
