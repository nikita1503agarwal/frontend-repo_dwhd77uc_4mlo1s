import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Partners from './components/Partners'
import Team from './components/Team'
import FAQs from './components/FAQs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1520] text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Partners />
        <Team />
        <FAQs />
      </main>
      <Footer />
    </div>
  )
}

export default App
