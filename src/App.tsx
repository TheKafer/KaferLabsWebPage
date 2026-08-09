import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Clients from './components/Clients'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090c] mesh-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Clients />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
