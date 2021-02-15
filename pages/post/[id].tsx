import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = ({post: serverPost}) => {
  const [post, setPost] = useState(serverPost)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data = await response.json()
      setPost(data)
    }
    if (!serverPost) load()
  }, [serverPost])

  if (!post) return <div>Loading...</div>

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

Post.getInitialProps = async ({query, req}) => {
  console.log('ctx.query', query)
  if (!req) {
    return {post: null}
  }
  const response = await fetch(`http://localhost:4200/posts/${query.id}`)
  const data = await response.json()
  return {
    post: data
  }
}

export default Post
