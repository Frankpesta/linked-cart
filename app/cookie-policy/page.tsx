import PolicyLayout from "@/components/policy-layout";

export const metadata = {
	title: "Cookie Policy | LinkedCart",
	description:
		"LinkedCart's Cookie Policy - Learn how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
	return (
		<PolicyLayout title="Cookie Policy" lastUpdated="May 15, 2025">
			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Introduction</h2>
				<p>
					This Cookie Policy explains how LinkedCart ("we", "us", and "our")
					uses cookies and similar technologies to recognize you when you visit
					our website at https://www.linkedcart.com ("Website"). It explains
					what these technologies are and why we use them, as well as your
					rights to control our use of them.
				</p>
				<p>
					In some cases we may use cookies to collect personal information, or
					that becomes personal information if we combine it with other
					information.
				</p>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">What are cookies?</h2>
				<p>
					Cookies are small data files that are placed on your computer or
					mobile device when you visit a website. Cookies are widely used by
					website owners in order to make their websites work, or to work more
					efficiently, as well as to provide reporting information.
				</p>
				<p>
					Cookies set by the website owner (in this case, LinkedCart) are called
					"first party cookies". Cookies set by parties other than the website
					owner are called "third party cookies". Third party cookies enable
					third party features or functionality to be provided on or through the
					website (e.g. like advertising, interactive content and analytics).
					The parties that set these third party cookies can recognize your
					computer both when it visits the website in question and also when it
					visits certain other websites.
				</p>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Why do we use cookies?</h2>
				<p>
					We use first and third party cookies for several reasons. Some cookies
					are required for technical reasons in order for our Website to
					operate, and we refer to these as "essential" or "strictly necessary"
					cookies. Other cookies also enable us to track and target the
					interests of our users to enhance the experience on our Online
					Properties. Third parties serve cookies through our Website for
					advertising, analytics and other purposes. This is described in more
					detail below.
				</p>
				<p>
					The specific types of first and third party cookies served through our
					Website and the purposes they perform are described below:
				</p>
				<div className="space-y-4">
					<div>
						<h3 className="text-xl font-medium">Essential Cookies</h3>
						<p>
							These cookies are strictly necessary to provide you with services
							available through our Website and to use some of its features,
							such as access to secure areas. Because these cookies are strictly
							necessary to deliver the Website, you cannot refuse them without
							impacting how our Website functions.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-medium">
							Performance and Functionality Cookies
						</h3>
						<p>
							These cookies are used to enhance the performance and
							functionality of our Website but are non-essential to their use.
							However, without these cookies, certain functionality may become
							unavailable.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-medium">
							Analytics and Customization Cookies
						</h3>
						<p>
							These cookies collect information that is used either in aggregate
							form to help us understand how our Website is being used or how
							effective our marketing campaigns are, or to help us customize our
							Website for you.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-medium">Advertising Cookies</h3>
						<p>
							These cookies are used to make advertising messages more relevant
							to you. They perform functions like preventing the same ad from
							continuously reappearing, ensuring that ads are properly displayed
							for advertisers, and in some cases selecting advertisements that
							are based on your interests.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">How can you control cookies?</h2>
				<p>
					You have the right to decide whether to accept or reject cookies. You
					can exercise your cookie rights by setting your preferences in the
					Cookie Consent Manager. The Cookie Consent Manager allows you to
					select which categories of cookies you accept or reject. Essential
					cookies cannot be rejected as they are strictly necessary to provide
					you with services.
				</p>
				<p>
					The Cookie Consent Manager can be found in the notification banner and
					on our website. If you choose to reject cookies, you may still use our
					website though your access to some functionality and areas of our
					website may be restricted. You may also set or amend your web browser
					controls to accept or refuse cookies.
				</p>
				<p>
					The specific types of first and third party cookies served through our
					Website and the purposes they perform are described in the table
					below:
				</p>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">
					Changes to this Cookie Policy
				</h2>
				<p>
					We may update this Cookie Policy from time to time in order to
					reflect, for example, changes to the cookies we use or for other
					operational, legal or regulatory reasons. Please therefore re-visit
					this Cookie Policy regularly to stay informed about our use of cookies
					and related technologies.
				</p>
				<p>
					The date at the top of this Cookie Policy indicates when it was last
					updated.
				</p>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Contact Us</h2>
				<p>
					If you have any questions about our use of cookies or other
					technologies, please email us at privacy@linkedcart.com.
				</p>
			</section>
		</PolicyLayout>
	);
}
