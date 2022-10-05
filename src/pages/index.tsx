import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Soberana TV</title>
        <meta name="description" content="Coletivo marxista-leninista de criadores de conteúdo." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className='bg-black'>
          <h1 className='text-white font-bold text-4xl lg:text-6xl'>
            Coletivo marxista-leninista de criadores de conteúdo.
          </h1>
        </main>
    </>
  )
}

export default Home
