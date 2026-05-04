import { useState, lazy, Suspense } from 'react'

import Navbar from './components/navbar'
import Highlights from './components/Highlights.jsx'
import Footer from './components/Footer.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

//  Heavy components — lazy loaded
const Hero = lazy(() => import('./components/hero'))
const ProductView = lazy(() => import('./components/product'))
const Performance = lazy(() => import('./components/performance.jsx'))
const Feature = lazy(() => import('./components/Features.jsx'))
const Showcase = lazy(()=>import('./components/Showcase.jsx'))

gsap.registerPlugin(ScrollTrigger)

function useSelection(initialvalue) {
  const [val, setVal] = useState(initialvalue)
  const select = (newval) => setVal(newval)
  const isSelected = (compareval) => val === compareval
  const reset = () => setVal(initialvalue)
  return { val, select, isSelected, reset }
}

function App() {
  const size = useSelection(0.06)
  const color = useSelection('space-black')

  return (
    <>
      <Navbar />

      <Suspense fallback={
        <div style={{
          width: '100vw',
          height: '100vh',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem'
        }}>
          Loading...
        </div>
      }>
        <Hero />
        <ProductView
          sizeHook={size}
          colorHook={color}
        />
          <ShowCase />
        <Performance />
        <Feature />
      </Suspense>
     <Highlights />
      <Footer />
    </>
  )
}

export default App