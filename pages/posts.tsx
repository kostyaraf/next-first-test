import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Posts = ({ posts: serverPosts }) => {
  const [posts, setPosts] = useState(serverPosts)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/`)
      const data = await response.json()
      setPosts(data)
    }
    if (!serverPosts) load()
  }, [])

  if (!posts) return <div>Loading...</div>


  console.log('router', router)
  return (
    <>
      <h1>
        <b>Open Post: </b>
      </h1>
      <hr />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href='/post/[id]' as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

Posts.getInitialProps = async ({req}) => {
  if (!req) return {posts: null}
  const response = await fetch(`http://localhost:4200/posts/`)
  const data = await response.json()
  return {
    posts: data,
  }
}

export default Posts
