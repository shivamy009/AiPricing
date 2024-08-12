import { useState } from 'react'
 
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Ainavbar from './pages/Ainavbar'
import AiHero from './pages/AiHero'
import Aifooter from './pages/Aifooter'
import PricingTable from './pages/PricingTable'
import ErrorPage from './pages/Error'
import video from './assets/vid.mp4'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 
    <div className=' min-h-screen flex flex-col'>
    <Ainavbar/>

    {/* </div> */}
    <main className='flex-grow'>
       <Routes>
        <Route path='/' element={<AiHero/>}/>
        <Route path='/pricing' element={<PricingTable/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      
    </Routes>

    </main>
    {/* <video autoPlay controls>
      <source src={video} type='video/mp4' />
    </video> */}
     
    <Aifooter/>
  {/* </div> */}
    </div>
    </BrowserRouter>
    
    </>
  )
}

export default App
