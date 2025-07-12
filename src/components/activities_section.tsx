

import "./activities_section.css";
import InfoTile from "./info_tile";

function ActivitiesSection() {
  return (
    <div className='activities-section' id="activities">
      <div className='activities-div'>
        <h2 className="title">Activity Management Suite</h2>
        <p className="section-intro">
          Empower your school with comprehensive tools to manage all student activities, from clubs to athletics to academic competitions.
        </p>

        <div className="activities-tiles">

          <InfoTile
            title="For Activity Coordinators"
            description="Intuitive tools to create events, manage rosters, communicate with participants, and track attendance. Automated scheduling prevents conflicts and integrates with your existing calendar systems."
          />
          <InfoTile
            title="For Students & Parents"
            description="Easy-to-use interface for students to discover activities, register for events, and stay updated. Parents receive real-time notifications and can sync schedules with their personal calendars."
          />
        </div>

        <div className="features-showcase">
          <h3>Key Features</h3>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">🗓️</span>
              <span>Smart Scheduling & Conflict Resolution</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📅 </span>
              <span>Synced to Device Calendars</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💬</span>
              <span>Multi-channel Communication</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivitiesSection