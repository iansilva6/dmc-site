import type { NextPage } from 'next';
import Head from 'next/head';
import { SEOHeader } from "../components/SEO";

// Components
import {
  Header, 
  Banner, 
  Footer, 
  Map, 
  Whatsapp, 
  About, 
  Squad, 
  Team,
  Services
} from '../components';

// Images
import ImgCoverDesktop from '../assets/images/cover.webp';
import ImgCoverMobile from '../assets/images/cover-mb.webp';
import Logo from '../assets/images/logo.webp';

const Home: NextPage = () => {
  
  return (
    <div>
      <Head>
        <SEOHeader />
        <title>DMC - Advocacia e Consultoria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header 
          logo={Logo}
          logoAlt="Duarte Matos e Carvalho"
        />
        <Banner
          srcDesktop={ImgCoverDesktop}
          srcMobile={ImgCoverMobile}
          alt="DMC"
        />
        <About/>
        <Squad/>
        <Team/>
        <Services/>
        <Map/>
        <Footer
          logo={Logo}
          logoAlt="Duarte Matos e Carvalho"
        />
        <Whatsapp/>
      </main>
    </div>
  )
}

export default Home
