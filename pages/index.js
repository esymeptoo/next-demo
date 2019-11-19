import Link from 'next/link'
import Head from 'next/head'

import './index.scss'

export const delay = ts => new Promise(resolve => setTimeout(resolve, ts))

function Home({ title }) {
  return <div className="index-page">
    <Head>
      <title>hello next.js</title>
    </Head>
    <h1>Welcome to {title}!</h1>
    <img className="kenan" src="/pic1.jpeg" alt=""/>
    <br/>
    <Link href="/test?from=index">
      <a>Test Page</a>
    </Link><br/>
    <Link href="/profile">
      <a>profile page</a>
    </Link>
    <br/>
    <Link href="/profile/[id]" as="/profile/1">
      <a>1 page</a>
    </Link>
    <style>{`
      .kenan {
        width: 100px;
      }
    `}</style>
  </div>
}

Home.getInitialProps = function (req) {
  const { id } = req.query
  return {
    title: 'next.js',
  }
}

export default Home
