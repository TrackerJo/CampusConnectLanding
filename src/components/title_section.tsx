
import "./title_section.css";

function TitleSection() {
  return (
    <div className='title-section' id="title">
      <div className='title-div'>
        <h1>Campus Connect for High Schools</h1>
        <p className="subtitle">The Complete Student Engagement Platform</p>
        <p className="description">
          Empower your students, streamline school operations, and strengthen your school community with our all-in-one platform designed to support high school administrators in fostering meaningful student engagement.
        </p>
        <div className="cta-buttons">
          <button className="cta-primary" onClick={() => window.location.href = '#contact'}>
            Request a Demo
          </button>
          <button className="cta-secondary" onClick={() => window.location.href = '#features'}>
            View Features
          </button>
        </div>
        <div className="benefits">
          <span>✓ 30-day free trial</span>
          <span>✓ No setup fees</span>
          <span>✓ 24/7 support</span>
        </div>
      </div>
    </div>
  )
}

export default TitleSection