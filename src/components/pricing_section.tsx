import "./pricing_section.css";

function PricingSection() {
    const plans = [
        // {
        //     name: "Essential",
        //     price: "$299",
        //     period: "per month",
        //     description: "Perfect for small high schools",
        //     features: [
        //         "Up to 500 students",
        //         "Basic activity management",
        //         "Student communication tools",
        //         "Parent notifications",
        //         "Email support",
        //         "Mobile app access"
        //     ],
        //     popular: false
        // },
        {
            name: "Essential",
            price: "Custom",
            period: "pricing",
            description: "Ideal for every school",
            features: [

                "Advanced activity management",
                "Transportation coordination",
                "Career development center",
                "Analytics & reporting",
                "Priority support",
                "Custom integrations"
            ],
            popular: true
        },
        // {
        //     name: "Enterprise",
        //     price: "Custom",
        //     period: "pricing",
        //     description: "For large school districts",
        //     features: [
        //         "Unlimited students",
        //         "Full feature access",
        //         "Multi-school management",
        //         "Advanced analytics",
        //         "Custom development",
        //         "24/7 dedicated support",
        //         "On-premise options"
        //     ],
        //     popular: false
        // }
    ];

    return (
        <div className='pricing-section' id="pricing">
            <div className='pricing-container'>
                <div className="pricing-header">
                    <h2 className="section-title">Simple, Transparent Pricing</h2>
                    <p className="section-description">
                        Choose the plan that fits your school's needs. All plans include a 30-day free trial with no setup fees.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                            {plan.popular && <div className="popular-badge">Most Popular</div>}

                            <div className="plan-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price">
                                    <span className="price">{plan.price}</span>
                                    <span className="period">{plan.period}</span>
                                </div>
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <ul className="features-list">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="feature-item">
                                        <span className="checkmark">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`cta-button ${plan.popular ? 'primary' : 'secondary'}`} onClick={() => window.location.href = '#contact'}>
                                Contact Sales
                            </button>
                        </div>
                    ))}
                </div>

                {/* <div className="pricing-footer">
                    {/* <p>All plans include SSL security, regular backups, and compliance with educational data privacy regulations.</p> */}
                {/* <div className="contact-sales">
                    <p>Need a custom solution? <a href="#contact">Contact our sales team</a> for personalized pricing.</p>
                </div> 
            </div> */}
            </div>
        </div >
    )
}

export default PricingSection
