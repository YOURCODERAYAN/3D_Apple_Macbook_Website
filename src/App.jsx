import{useState} from 'react'

import Navbar from './components/navbar'
import Hero from './components/hero'
import ProductView from './components/product' 
import ShowCase from './components/Showcase'
import Performance from './components/performance.jsx'
import Feature from './components/Features.jsx'
import Highlights  from './components/Highlights.jsx'
import Footer from './components/Footer.jsx'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';


gsap.registerPlugin(ScrollTrigger)


function useSelection(initialvalue){

        const[val ,setVal] = useState(initialvalue)

        const select = (newval) => setVal(newval);
        const isSelected = (comapareval) => val === comapareval;
        const reset = ()=> setVal(initialvalue)


    return{val , select , isSelected , reset}
}




function App(){

    const size = useSelection(0.06);
    const color = useSelection('space-black')


   


    return(
        <>
        <Navbar />
        <Hero />
        <ProductView 
        
        sizeHook={size}
        colorHook={color}
        />

        <ShowCase/>
        <Performance />
        <Feature />
        <Highlights />
        <Footer />
        </>
    )
}

export default App;