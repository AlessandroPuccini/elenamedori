import React from 'react'

function Home() {
  return (
    <>
    <div id='home-wrapper'>
    
    <div className='home-content'>  
      <h2>Qulacosa di figo qua nei paraggi!</h2>
      <p>Che dici?</p>
      </div>
      <div className='home-card'>
        <video
            className='home-image'
            src="https://res.cloudinary.com/dmxjn7rsc/video/upload/v1750858504/docs/gifEm.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        {/* <img className='home-image' src="https://res.cloudinary.com/dmxjn7rsc/image/upload/docs/model.jpg" alt="model" /> */}
      </div>
    

      </div>
    </>
  )
}

export default Home