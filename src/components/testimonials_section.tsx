import "./testimonials_section.css";

function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            title: "Principal",
            school: "Lincoln High School",
            content: "Campus Connect has revolutionized how we manage student activities. Our engagement rates have increased by 40% since implementation.",
            image: "👩‍🏫"
        },
        {
            name: "Mike Rodriguez",
            title: "Activities Director",
            school: "Riverside Academy",
            content: "The transportation coordination feature alone has saved us countless hours. Parents love the real-time updates.",
            image: "👨‍💼"
        },
        {
            name: "Dr. Emily Chen",
            title: "Superintendent",
            school: "Valley School District",
            content: "We've rolled out Campus Connect across all our high schools. The analytics help us make data-driven decisions about student engagement.",
            image: "👩‍🔬"
        }
    ];

    return (
        <div className='testimonials-section' id="testimonials">
            <div className='testimonials-container'>
                <div className="testimonials-header">
                    <h2 className="section-title">Trusted by Education Leaders</h2>
                    <p className="section-description">
                        See how schools across the country are transforming student engagement with Campus Connect.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-content">
                                <p className="testimonial-text">"{testimonial.content}"</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.image}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-title">{testimonial.title}</p>
                                    <p className="author-school">{testimonial.school}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="stats-section">
                    <div className="stat-item">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Schools Using Campus Connect</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">250K+</div>
                        <div className="stat-label">Active Students</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Customer Satisfaction</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Support Available</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSection
