import Head from 'next/head'
import { Layout } from '@/components/Layout/Layout'

export default function Home() {
  return (
    <div className='bg-slate-900 dark:bg-black text-white'>
      <Head>
        <title>Nanite Systems</title>
        <meta name="Nanite Systems" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />

    </div>
  )
}