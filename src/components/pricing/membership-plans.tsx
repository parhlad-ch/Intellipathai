'use client';
import Link from "next/link";
import { CheckTwoSvg, UnCheckSvg } from "../svg";

const membershipPlans = [
	{
		id: 1,
		title: "Basic Plan",
		validity: "Perfect for beginners",
		price: 0,
		frequency: "Free Forever",
		benefits: [
			"Access to 3 disciplines",
			"Basic AI tools",
			"Community support",
			"Progress tracking"
		],
		inactiveBenefits: [
			"Advanced AI features",
			"All disciplines access",
			"Priority support",
			"Certification"
		],
		btnText: "Get Started",
		popular: false
	},
	{
		id: 2,
		title: "Premium Plan",
		validity: "Most popular choice",
		price: 499,
		frequency: "/ Month",
		benefits: [
			"Access to all 10 disciplines",
			"Advanced AI tools & assistants",
			"Priority support 24/7",
			"Progress analytics & insights",
			"Downloadable resources",
			"Mock tests & assessments"
		],
		inactiveBenefits: [
			"Industry certification",
			"Career guidance"
		],
		btnText: "Start Premium",
		popular: true
	},
	{
		id: 3,
		title: "Enterprise Plan",
		validity: "For institutions & teams",
		price: 2999,
		frequency: "/ Month",
		benefits: [
			"Everything in Premium",
			"Unlimited student accounts",
			"Custom AI training modules",
			"Dedicated account manager",
			"Advanced analytics dashboard",
			"Industry certifications",
			"Placement assistance",
			"Custom integrations"
		],
		inactiveBenefits: [],
		btnText: "Contact Sales",
		popular: false
	}
];

export default function MembershipPlans() {
	return (
		<section className="pricing-area pt-120 pb-90 grey-bg">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="tp-section text-center mb-65">
							<h5 className="tp-section-subtitle mb-15">Pricing Plans</h5>
							<h3 className="tp-section-title">Choose Your Perfect Plan</h3>
							<p className="mt-10">Start learning for free or unlock advanced features with Premium and Enterprise plans</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					{membershipPlans.map(plan => (
						<div className="col-lg-4 col-md-6" key={plan.id}>
							<div className={`tp-pricing-5-item ${plan.popular ? "active" : ""} mb-40 wow fadeInUp`} data-wow-delay={`.${plan.id}s`}>
								{plan.popular && (
									<div className="tp-pricing-badge">
										<span>Most Popular</span>
									</div>
								)}
								<div className="tp-pricing-5-head">
									<div className="tp-pricing-5-head-text">
										<h4 className="tp-pricing-5-head-title">{plan.title}</h4>
										<span>{plan.validity}</span>
									</div>
									<h2 className="tp-pricing-5-price">
										{plan.price === 0 ? (
											<span style={{ fontSize: '32px' }}>Free</span>
										) : (
											<>
												<span>₹</span>{plan.price}
												<b>{plan.frequency}</b>
											</>
										)}
									</h2>
								</div>
								<div className="tp-pricing-5-list">
									<ul>
										{plan.benefits.map((benefit, index) => (
											<li key={index}>
												<span>
													<CheckTwoSvg />
												</span>
												{benefit}
											</li>
										))}
										{plan.inactiveBenefits.map((benefit, index) => (
											<li className="inactive" key={index}>
												<span>
													<UnCheckSvg />
												</span>
												{benefit}
											</li>
										))}
									</ul>
								</div>
								<div className="tp-pricing-5-btn">
									<Link href={plan.id === 3 ? "/contact" : "/login-register"} className="tp-btn-3">
										{plan.btnText}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
