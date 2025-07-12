

import "./ridesharing_section.css";
import InfoTile from "./info_tile";

function RidesharingSection() {
  return (
    <div className='ridesharing-section' id="ridesharing">
      <div className='ridesharing-div'>
        <h2 className="title">Smart Transportation Management</h2>
        <p className="section-intro">
          Ensure safe, efficient, and organized transportation for all school activities and events with our comprehensive transportation coordination system.
        </p>

        <div className="ridesharing-tiles">
          {/* <InfoTile
            title="For Transportation Coordinators"
            description="Streamline bus scheduling, track routes in real-time, manage driver assignments, and ensure all transportation meets safety standards. Automated notifications keep everyone informed of schedule changes."
          /> */}

          <InfoTile
            title="For Parents & Students"
            description="Students can easily carpool with classmates, share rides to school events, and coordinate transportation for extracurricular activities. Parents can monitor ride-sharing arrangements and ensure their children's safety."
          />
        </div>

        {/* <div className="safety-features">
          <h3>Safety & Compliance First</h3>
          <div className="safety-grid">
            <div className="safety-item">
              <span className="safety-icon">🛡️</span>
              <h4>Safety Monitoring</h4>
              <p>Real-time GPS tracking and emergency protocols</p>
            </div>
            <div className="safety-item">
              <span className="safety-icon">✅</span>
              <h4>Compliance Management</h4>
              <p>Automated reporting and regulatory compliance</p>
            </div>
            <div className="safety-item">
              <span className="safety-icon">📱</span>
              <h4>Emergency Communication</h4>
              <p>Instant alerts and emergency contact systems</p>
            </div>
            <div className="safety-item">
              <span className="safety-icon">📊</span>
              <h4>Performance Analytics</h4>
              <p>Route optimization and efficiency reporting</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default RidesharingSection