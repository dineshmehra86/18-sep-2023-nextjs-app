//1. Import Area
import Head from 'next/head'
// Import something from 'some library/location';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Aside from '../components/Aside';
import Section from '../components/Section';
import Footer from '../components/Footer';

// 2. Function Defination Area
function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My First NextJs Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <main>
        <Aside/>
        <Section/>
      </main>
      <Footer/>
    </>
  )
}

// 3. Export Area
export default Home;