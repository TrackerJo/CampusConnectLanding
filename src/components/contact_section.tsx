

import "./contact_section.css";

function ContactSection() {
  return (
    <div className='contact-section' id="contact">
      <div className='contact-container'>
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Ready to Transform Your School?</h2>
            <p className="section-description">
              Join hundreds of high schools already using Campus Connect to enhance student engagement and streamline operations.
            </p>

            <div className="contact-methods">


              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h3>Email Support</h3>
                  <p>
                    <a href="mailto:kazoom.apps+campusconnect@gmail.com">kazoom.apps@gmail.com</a>
                  </p>

                </div>
              </div>


            </div>
          </div>

          <div className="contact-form">
            <h3>Request a Demo</h3>
            <p>See how Campus Connect can work for your school</p>

            <form className="demo-form">
              <div className="form-group">
                <input type="text" placeholder="School Name" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">School Size</option>
                  <option value="small">Under 500 students</option>
                  <option value="medium">500-1,500 students</option>
                  <option value="large">1,500+ students</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Schedule Demo
              </button >
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection