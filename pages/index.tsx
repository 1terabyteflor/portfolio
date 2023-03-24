import Head from 'next/head'
import { Inter } from '@next/font/google'
import Splash from '@/components/Splash'
import Principal from '@/components/Principal'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Presentation from '@/components/Presentation'
import Works from '@/components/Works'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>PLANTASIA</title>
        
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash/>
      <main>
        <Navbar/>
        <Presentation/>
        <Works image='/insmnio.mp4' title="Insomnio" description="Integer a nibh metus. Maecenas dictum turpis nec magna elementum, imperdiet rutrum dui rhoncus. Aliquam fermentum maximus felis, eu vulputate lacus vulputate et. Pellentesque suscipit vehicula nulla ac auctor. " date="/ 2023"/>
        <Works image='/gavu.mp4' title="Gavu x Plantasia" description="Live A/V set with Gavu, musician and producer who presented his new EP 'Contemplation'. Audioreactive patches and another monochromatic textures made with Touchdesigner were played. The location was in Tecnópolis - Arte, Ciencia y Tecnología. " date="/ 2022"/>
        <Works image='/fucsia.mp4' title="Sáccea x Plantasia" description="Live A/V set with the producer Sáccea in the PULSO Festival, directed by the University of Tres de Febrero (UNTREF). " date="/ 2022"/>        <About/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}
