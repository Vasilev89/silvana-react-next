import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import MobileMenu from '../components/MobileMenu'
import Artworks from '../components/Artworks'
import ArtworksCTA from '../components/ArtworksCTA'
import SignUp from '../components/SignUp'
import Footer from '../components/Footer'
import '../styles/styles.scss'

export default () => (
  <section className='container-fluid'>
    <Head title="Home" />
    <Header />
    <MobileMenu />
    <Introduction />
    <Artworks />
    <ArtworksCTA />
    <SignUp />
    <Footer />
  </section>
)
