import Especialistas from './components/Especialistas'
import FAQSection from './components/FAQSection'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Market_place from './components/Market_place'
import Modules from './components/Modules'
import Modules_grid from './components/Modules_grid'
import PostGraduationBenefits from './components/PostGraduationBenefits'

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Hero />
      <Especialistas />
      <Features />
      <Modules />
      <Modules_grid />
      <Market_place />
      <PostGraduationBenefits />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
