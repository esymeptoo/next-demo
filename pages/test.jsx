import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'

function Test() {
  const router = useRouter()
  const { query: { from } } = router

  useEffect(() => {
    router.prefetch('/')
    // fetch('http://localhost:3000/api/test')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(res => {
    //     console.log(res)
    //   })
  }, [])

  return <div>
    <h1>testPage</h1>
    <p>from: {from}</p>
    <div>
      <Link href="/"><a>跳到首页</a></Link>
      <button
        onClick={() => Router.push({
          pathname: '/',
        })}
      >返回</button>
    </div>
  </div>
}

export default Test
