import React,{useEffect} from 'react'
import "./App.scss"
// import {useSelector,useDispatch} from "react-redux"
// import { decrement, increment } from './redux/reducer/counterSlices'

import AOS from 'aos';
import 'aos/dist/aos.css';

// import Navbar from './component/navbar/Navbar'
import About from "./pages/about/about"
import Home from './pages/home/home';
import Services from "./pages/services/Services"
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navigation/navbar/Navbar';
import Navigation from './component/Navigation/Navigation';
import DevOps from './pages/services/devops/DevOps';


const App = () => {



  

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()
  return (

    <Router>
   
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Home />}/>
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dev-Ops" element={<DevOps />} />

        <Route path="/dev-Ops" element={<DevOps />} />
        <Route path="/blog" element={<Blog />} />

        
        

        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  
  )
}

export default App