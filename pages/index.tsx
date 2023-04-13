import Head from 'next/head'
import Splash from '@/components/Splash'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Presentation from '@/components/Presentation'
import Works from '@/components/Works'
import { useState, useEffect } from 'react'

export default function Home() {
  const [presentation, setShowPresentation] = useState(false);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPresentation(true);
        window.scrollTo({ top: 800, behavior: "smooth" });
      }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <>
      <Head>
        <title>PLANTASIA</title>
        
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/3.png" />
      </Head>
      <main>
        <Navbar/>
        <Splash/>
        {presentation && <Presentation/>}

        {/* <Splash/>
        <Presentation/> */}
        <Works image='/insmnio.mp4' title="Insomnia" description="First single of homonym A/V project, Insomnia. Released by Tenebre. Unknown, oniric landscapes interfering with your dreams. " date="/ 2023"/>
        <Works image='/gavu.mp4' title="Contemplation A/V performance" description="Live set with Gavu who presented his new EP 'Contemplation'. We worked with Touchdesigner for audioreactive patches and monochromatic textures." date="/ 2022"/>
        <Works image='/fucsia.mp4' title="Sáccea x Plantasia" description="Live A/V set with Sáccea in the PULSO Festival, directed by the University of Tres de Febrero (UNTREF)" date="/ 2022"/>
        <Works image='/c7preview.mp4' title="C7 Studio" description="Live A/V set with Sáccea in the PULSO Festival, directed by the University of Tres de Febrero (UNTREF)" date="/ 2023"/>                
        <About/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}
