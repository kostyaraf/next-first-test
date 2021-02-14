import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = ({post}) => {

  const router = useRouter()
  console.log('router', router)

  return (
    <>
      <h1><b>{post.title}</b></h1>
      <hr/>
      <div>
        <p>{post.body}</p>
      </div>

      <Link href="/posts"><a>Back to all posts</a></Link>
    </>
  )
}

Post.getInitialProps = async (ctx) => {
  console.log('ctx.query', ctx.query)
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
  const post = await response.json()
  return {
    post
  }
}

export default Post
