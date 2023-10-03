//1. Import Area
import Head from 'next/head'
// Import something from 'some library/location';
import styles from '../styles/Home.module.css'

// 2. Function Defination Area
function Home() {
  return (
    <>
      <Head>
        <title>Welcome to My First NextJs Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        Header Component
      </header>
      
      <main>
        <aside>Aside Component</aside>
        <section>Section Component</section>
      </main>

      <footer>
        Footer Component
      </footer>
    </>
  )
}

// 3. Export Area
export default Home;