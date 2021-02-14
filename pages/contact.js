import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Contact = ({ posts }) => {
  const router = useRouter()
  // console.log('router', router)
  return (
    <>
      <h1>
        <b>Contacts: </b>
      </h1>
      <hr />
      <ul>
        <li>Phone: +555990033</li>
      </ul>
    </>
  )
}

export default Contact
