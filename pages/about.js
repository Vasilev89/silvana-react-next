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
      <h2>About Silvana</h2>
      <AboutSection openingParagraph='It’s difficult to describe the thinking process behind an artist - especially when that artist is myself.
      The feeling  of self-exploration that I aim to elicit within the viewers when they see my art is perhaps the best way to describe both my work 
      and myself.
      It is my utmost aim to encourage whoever is viewing my art to journey into their own soul and provoke their own inner critic to unveil a part of their c
      haracter which they hadn’t even thought existed.' />
      <AboutSection openingParagraph='Perhaps this is also why regardless of how people interpret my style, the most important thing for me remains the sincerity with which I paint and my ability to communicate with my own soul.      
      It can be loosely described as knowing a foreign language - you always feel and think that you’re missing certain words - until one day you wake up and realize that you are dreaming in it.' />      
      <AboutSection openingParagraph='That is the main reason why I paint in the first place - to explore and communicate with my own soul and I hope that in doing so I can encourage others to do the same.I would describe my style as crisp abstract.
      All of my works represent the progressions of both, thoughts and emotions.
     My paintings tell a story - about certain parts of my life and the life of others.' />
     <h4>I am proud to be painting what I feel and when I feel creative. 

     Abiding by the rules and guidelines of mainstream art is something which stifles my creativity to the core so I choose to abandon these rules and instead paint only what I genuinely feel.
     
     And finally, as you will probably notice, I love the combination of black and white. I believe in their purity and in the notion that they are a platform for the truth.</h4>
    </section>
    <section>
      <SignUp />
    </section>
    <section>
      <Footer />
    </section>
  </main>
)