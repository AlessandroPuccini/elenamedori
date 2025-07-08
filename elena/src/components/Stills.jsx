import React from 'react'

function Stills() {
  return (
    <>
    <div className='gallery-stills-wrapper'>
      <figure className='item-wrapper-stills'>
        <div className='gallery-item'>
          <img className='rosa' 
           src="https://res.cloudinary.com/dmxjn7rsc/image/upload/docs/rosa.jpg" alt="pinkbag">
          </img>
        </div>
        <figcaption className='gallery-caption'>
          <div className='gallery-caption-wrapper'>
            <p>productiondesigner @L'OSPITE Featurefilm</p>
          </div>
        </figcaption>
      </figure>
      
      <figure className='item-wrapper-stills'>
        <div className='gallery-item'>
          <img className='rosa' 
           src="https://res.cloudinary.com/dmxjn7rsc/image/upload/docs/apple.png" alt="L'OSPITE">
          </img>
        </div>
        <figcaption className='gallery-caption'>
          <div className='gallery-caption-wrapper'>
            <p>productiondesigner @L'OSPITE Featurefilm</p>
          </div>
        </figcaption>
      </figure>

      <figure className='item-wrapper-stills'>
        <div className='gallery-item'>
          <img className='rosa' 
           src="https://res.cloudinary.com/dmxjn7rsc/image/upload/docs/rosa2.jpg" alt="magnolia">
          </img>
        </div>
        <figcaption className='gallery-caption'>
          <div className='gallery-caption-wrapper'>
            <p>productiondesigner @MAGNOLIA Shortfilm</p>
          </div>
        </figcaption>
      </figure>

      <figure className='item-wrapper-stills'>
        <div className='gallery-item'>
          <img className='rosa' 
           src="https://res.cloudinary.com/dmxjn7rsc/image/upload/movies/mg1.png" alt="magnolia">
          </img>
        </div>
        <figcaption className='gallery-caption'>
          <div className='gallery-caption-wrapper'>
            <p>productiondesigner @MAGNOLIA Shortfilm</p>
          </div>
        </figcaption>
      </figure>


    </div>
    </>
  )
}

export default Stills
