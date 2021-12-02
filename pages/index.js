import Head from 'next/head'
import Link from 'next/link'

export default function Home({ giphys }) {
  return (
    <div className="container">
      <Head>
        <title>Web nâng cao demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Giphy search</h1>
      <ul>
        <li><Link href="/search/poodle">Xem các GIF về poodle</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>      
    </div>
  )
}
