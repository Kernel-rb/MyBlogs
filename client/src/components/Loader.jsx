import React from 'react'
import LoadingGif from '../images/lodaer.gif'

function Loader() {
  return (
      <div className='loader'>
          <div className="loader__image">
              <img src={LoadingGif} alt="the loader" />
          </div>
    </div>
  )
}

export default Loader