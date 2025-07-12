

import "./features_section.css";

function FeaturesSection() {
  const features = [
    {
      title: "Activity Management",
      description: "Streamline all student activities, clubs, and events with our comprehensive management system.",
      icon: "📅"
    },
    {
      title: "Smart Transportation",
      description: "Coordinate safe and efficient transportation for students and school events.",
      icon: "🚌"
    },
    {
      title: "Career Center",
      description: "Connect students with job and volunteer opportunities.",
      icon: "💼"
    },
    {
      title: "Communication Hub",
      description: "Centralized communication platform for students, teachers, and parents.",
      icon: "💬"
    },

    {
      title: "Mobile App",
      description: "Native mobile apps for iOS and Android with full feature parity.",
      icon: "📱"
    }
  ];

  return (
    <div className='features-section' id="features">
      <div className='features-container'>
        <div className="features-header">
          <h2 className="section-title">Comprehensive Solutions for Modern High Schools</h2>
          <p className="section-description">
            Everything you need to enhance student engagement, streamline operations, and improve communication in one powerful platform.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection