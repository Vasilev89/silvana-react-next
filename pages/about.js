import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'
import AboutSection from '../components/AboutSection'
import Hero from '../components/Hero'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'

export default () => (
  <main>
    <section className='container-fluid ss-about-section '>
      <Head title="About the Artist | Silvana Sahag Art" />
      <Header />
      
      <Hero />
      <AboutSection />
      <AboutSection />
      <AboutSection />
    </section>
    <section>
      <SignUp />
    </section>
    <section>
      <Footer />
    </section>
  </main>
)