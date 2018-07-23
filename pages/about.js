import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'

export default () => (
  <main>
    <section className='container-fluid'>
      <Head title="About the Artist | Silvana Sahag Art" />
      <Header />
      <MobileMenu />
    </section>
    <section>
      <SignUp />
    </section>
    <section>
      <Footer />
    </section>
  </main>
)