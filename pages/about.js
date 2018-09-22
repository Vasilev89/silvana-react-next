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
      <AboutSection openingParagraph='It’s difficult to describe the thinking process behind an artist - especially when that artist is myself.
      The feeling  of self-exploration that I aim to elicit within the viewers when they see my art is perhaps the best way to describe both my work 
      and myself.
      It is my utmost aim to encourage whoever is viewing my art to journey into their own soul and provoke their own inner critic to unveil a part of their c
      haracter which they hadn’t even thought existed.' />
    </section>
    <section>
      <SignUp />
    </section>
    <section>
      <Footer />
    </section>
  </main>
)