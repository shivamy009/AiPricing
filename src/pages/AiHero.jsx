import React from 'react'
import video from '../assets/vid.mp4'

const AiHero = () => {
  return (
    <section className="text-white bg-purple-800 p-8 text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-4">Explore the Possibilities of AI Book Writing with BookAI</h2>
    <p className="mb-6">Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books.</p>
    <div className="space-x-4">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">Get AI Access</button>
    </div>
    <div className=' mt-8'>
    <video autoPlay controls>
      <source src={video} type='video/mp4' />
    </video>

    </div>
  </section>
  )
}

export default AiHero