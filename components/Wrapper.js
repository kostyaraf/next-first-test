import Link from 'next/link'

export default function ({ children }) {
  return (
    <>
      <div>
        <nav>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/posts'>
            <a>Posts</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </nav>
        {children}
        <style jsx>{`
          nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 60px;
            background: blue;
          }
          a {
            font-size: 30px;
            color: #ffffff;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    </>
  )
}
