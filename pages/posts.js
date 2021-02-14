import { useRouter } from 'next/router'
import Link from 'next/link'

const Posts = ({ posts }) => {
  const router = useRouter()
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

Posts.getInitialProps = async () => {
  const response = await fetch(`http://localhost:4200/posts/`)
  const posts = await response.json()
  return {
    posts,
  }
}

export default Post
