import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Process from '@/components/Process'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StickyCall from '@/components/StickyCall'
import ChatBubble from '@/components/ChatBubble'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
      <ChatBubble />
    </>
  )
}
