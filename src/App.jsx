
import Header from './Components/Header'
import Hero from './Components/Hero'
import './sass/main.scss'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Rector from './pages/Rector'



function App() {


  



  


  return (
    <>
      <Header/>
      <Routes>
       <Route path='/' element ={<Hero/>}/>
       <Route path='/rector' element ={<Rector/>}/>
      
      </Routes>
      <Footer/>
        
      
    </>
  )
}

export default App
