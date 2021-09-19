import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import {Header, Banner, Footer, Map, Whatsapp} from '../components';

// Images
import ImgCoverDesktop from '../assets/images/cover.webp';
import ImgCoverMobile from '../assets/images/cover-mb.webp';
import Logo from '../assets/images/logo.webp';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DMC - Advocacia e Consultoria</title>
        <meta name="description" content="Direito da Família, Direito Esportivo" />
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
