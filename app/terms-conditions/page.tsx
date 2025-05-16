import PolicyLayout from "@/components/policy-layout";

export const metadata = {
	title: "Terms and Conditions | LinkedCart",
	description:
		"LinkedCart's Terms and Conditions - The rules and guidelines for using our services.",
};

export default function TermsConditionsPage() {
	return (
		<PolicyLayout title="Terms and Conditions" lastUpdated="May 15, 2025">
			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Introduction</h2>
				<p>
					These terms and conditions outline the rules and regulations for the
					use of LinkedCart's website and services. By accessing this website
					and using our services, we assume you accept these terms and
					conditions in full. Do not continue to use LinkedCart's website and
					services if you do not accept all of the terms and conditions stated
					on this page.
				</p>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">License to Use</h2>
				<p>
					Unless otherwise stated, LinkedCart and/or its licensors own the
					intellectual property rights for all material on LinkedCart. All
					intellectual property rights are reserved. You may view and/or print
					pages from https://www.linkedcart.com for your own personal use
					subject to restrictions set in these terms and conditions.
				</p>
				<p>You must not:</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Republish material from https://www.linkedcart.com</li>
					<li>
						Sell, rent or sub-license material from https://www.linkedcart.com
					</li>
					<li>
						Reproduce, duplicate or copy material from
						https://www.linkedcart.com
					</li>
					<li>
						Redistribute content from LinkedCart (unless content is specifically
						made for redistribution)
					</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">User Accounts</h2>
				<p>
					When you create an account with us, you guarantee that the information
					you provide us is accurate, complete, and current at all times.
					Inaccurate, incomplete, or obsolete information may result in the
					immediate termination of your account on the Service.
				</p>
				<p>
					You are responsible for maintaining the confidentiality of your
					account and password, including but not limited to the restriction of
					access to your computer and/or account. You agree to accept
					responsibility for any and all activities or actions that occur under
					your account and/or password, whether your password is with our
					Service or a third-party service. You must notify us immediately upon
					becoming aware of any breach of security or unauthorized use of your
					account.
				</p>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Service Terms</h2>
				<p>
					LinkedCart connects users with local stores, malls, and restaurants
					for delivery services. By using our services, you agree to the
					following terms:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						You will provide accurate and complete information when placing
						orders through our platform.
					</li>
					<li>
						You are responsible for ensuring that the delivery address provided
						is correct and accessible.
					</li>
					<li>
						You will pay for all orders placed through our platform, including
						applicable taxes, delivery fees, and gratuities.
					</li>
					<li>
						You understand that delivery times are estimates and may vary based
						on factors outside of our control.
					</li>
					<li>
						You will treat delivery personnel with respect and will not engage
						in any abusive or threatening behavior.
					</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Limitations of Liability</h2>
				<p>
					In no event shall LinkedCart, nor its directors, employees, partners,
					agents, suppliers, or affiliates, be liable for any indirect,
					incidental, special, consequential or punitive damages, including
					without limitation, loss of profits, data, use, goodwill, or other
					intangible losses, resulting from:
				</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Your access to or use of or inability to access or use the Service;
					</li>
					<li>Any conduct or content of any third party on the Service;</li>
					<li>
						Any content obtained from the Service; and unauthorized access, use
						or alteration of your transmissions or content, whether based on
						warranty, contract, tort (including negligence) or any other legal
						theory, whether or not we have been informed of the possibility of
						such damage.
					</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Governing Law</h2>
				<p>
					These Terms shall be governed and construed in accordance with the
					laws of Canada, without regard to its conflict of law provisions. Our
					failure to enforce any right or provision of these Terms will not be
					considered a waiver of those rights. If any provision of these Terms
					is held to be invalid or unenforceable by a court, the remaining
					provisions of these Terms will remain in effect.
				</p>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Changes to Terms</h2>
				<p>
					We reserve the right, at our sole discretion, to modify or replace
					these Terms at any time. If a revision is material we will provide at
					least 30 days' notice prior to any new terms taking effect. What
					constitutes a material change will be determined at our sole
					discretion. By continuing to access or use our Service after any
					revisions become effective, you agree to be bound by the revised
					terms. If you do not agree to the new terms, you are no longer
					authorized to use the Service.
				</p>
			</section>

			<section className="space-y-6">
				<h2 className="text-2xl font-semibold">Contact Us</h2>
				<p>
					If you have any questions about these Terms, please contact us at:
					legal@linkedcart.com
				</p>
			</section>
		</PolicyLayout>
	);
}
