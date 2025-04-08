
import Header from './Components/Header'
import Hero from './Components/Hero'
import './sass/main.scss'
import Footer from './Components/Footer'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Rector from './pages/Rector'
import { useEffect, useState } from 'react'
import Loader from './Components/Loader'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from './Components/Login'
import RegistrationPage from './Components/RegistrationPage'
import { useSelector } from 'react-redux'







function App() {

const [time, setTime] = useState(false)

const {user} = useSelector(state => state.user)

const navigate = useNavigate()

useEffect(() => {
  if(user){
    navigate('/')
  }else {
    navigate('login')
  }
  
}, [])






useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false,     
  });
}, []);
  

useEffect(() => {
 setTimeout(() => {
  setTime(true)
 }, 1000);
}, [time])

useEffect(() => {
  const mouse = document.querySelector(".mouse");

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let speed = 0.2; 

  const animate = () => {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;
    mouse.style.left = `${currentX}px`;
    mouse.style.top = `${currentY}px`;
    requestAnimationFrame(animate);
  };

  const moveCursor = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener("mousemove", moveCursor);
  requestAnimationFrame(animate);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
}, []);


  return (
    <>
  <div className="wrapper">
   <div className="mouse"></div>
  {time ? (
      <>
        <Header />
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<RegistrationPage/>}/> 
          <Route time={time} path='/' element={ <Hero />} />
          <Route path='/rector' element={<Rector />} />
        </Routes>
        <Footer />
      </>
    ) : (
      <Loader />
    )}
  </div>
  </>
  )}  

export default App
