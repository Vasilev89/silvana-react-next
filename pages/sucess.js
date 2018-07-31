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
    <section className='container-fluid ss-contact-section '>
      <Head title="Contact Silvana | Purchase Paintings" />
      <Header />
      <MobileMenu />
      <h1>We have received your form submission sucessfully!</h1>
    </section>
    <section>
      <SignUp />
    </section>
    <section>
      <Footer />
    </section>
  </main>
)