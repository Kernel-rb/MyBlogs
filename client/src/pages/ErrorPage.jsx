import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <section className='error-page'>
      <div className="center">
        <h2>Oops! Page not found  🦊</h2>
        <Link to="/" className='btn primary'> Go Back Home </Link>
      </div>
   </section>
  )
}

export default ErrorPage