







import './App.css'
import Header from './components/header'

import TitleSection from './components/title_section'
import FeaturesSection from './components/features_section'
import ActivitiesSection from './components/activities_section'
import RidesharingSection from './components/ridesharing_section'
import OpportunitiesSection from './components/opportunites_section'
import TestimonialsSection from './components/testimonials_section'
import PricingSection from './components/pricing_section'
import ContactSection from './components/contact_section'

function App() {
  return (
    <>
      <Header />
      <TitleSection />
      <FeaturesSection />
      <ActivitiesSection />
      <RidesharingSection />
      <OpportunitiesSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <ContactSection />
    </>
  )
}

export default App
