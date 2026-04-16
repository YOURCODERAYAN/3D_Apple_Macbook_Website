import { div } from "three/tsl";
import  features from '../constants/features'
import {Canvas} from '@react-three/fiber'
import StudioLight from "./three/StudioLight";
import clsx from 'clsx';
import {Suspense , useRef , useEffect} from 'react';
import {Html} from '@react-three/drei'
import MacbookModel from "./models/Macbook";
import useMacbookStore from "../constants/MacbookStore";
import { useMediaQuery } from "react-responsive";
import{useGSAP} from '@gsap/react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all'
import featureSequence from "../constants/feature2";

gsap.registerPlugin(ScrollTrigger)



const ModelScroll = ()=>{
const grpRef = useRef()
const isMobile  = useMediaQuery({query:'(max-width:1024px)'})
const {setTexture}  = useMacbookStore();

useEffect(()=>{

    featureSequence.forEach((feature)=>{

        const v = document.createElement('video')

        Object.assign(v,{

            src:feature.videoPath,
            muted:true,
            playsInline:true,
            preload:'auto',
            crossOrigin:'anonymous',

        })
        v.load()
    })


},[])

 const currentTexture = useRef('/videos/feature-1.mp4') // ✅ tracks current video

    useGSAP(() => {

        // ✅ set initial states
        gsap.set(['.box1', '.box2', '.box3', '.box4', '.box5'], {
            opacity: 0,
            y: 40
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#features',
                start: 'top top',
                end: '+=800',
                scrub: 1,
                pin: true,

                // ✅ only swap texture when video actually changes
                onUpdate: (self) => {
                    const p = self.progress

                    let newTexture
                    if (p < 0.25)      newTexture = '/videos/feature-1.mp4'
                    else if (p < 0.5)  newTexture = '/videos/feature-2.mp4'
                    else if (p < 0.7)  newTexture = '/videos/feature-3.mp4'
                    else if (p < 0.9)  newTexture = '/videos/feature-4.mp4'
                    else               newTexture = '/videos/feature-5.mp4'

                    // ✅ only call setTexture if video actually changed
                    if (newTexture !== currentTexture.current) {
                        currentTexture.current = newTexture
                        setTexture(newTexture)
                    }
                }
            }
        })

        // ✅ rotation spans full timeline
        if (grpRef.current) {
            tl.to(grpRef.current.rotation, {
                y: Math.PI * 6,
                ease: 'none',
                duration: 1
            }, 0)
        }

        // ✅ box1 — 0 to 0.2
        tl.to('.box1', { opacity: 1, y: 0 }, 0)
        tl.to('.box1', { opacity: 0, y: -40 }, 0.2)

        // ✅ box2 — 0.25 to 0.45
        tl.to('.box2', { opacity: 1, y: 0 }, 0.25)
        tl.to('.box2', { opacity: 0, y: -40 }, 0.45)

        // ✅ box3 — 0.5 to 0.65
        tl.to('.box3', { opacity: 1, y: 0 }, 0.5)
        tl.to('.box3', { opacity: 0, y: -40 }, 0.65)

        // ✅ box4 — 0.7 to 0.85
        tl.to('.box4', { opacity: 1, y: 0 }, 0.7)
        tl.to('.box4', { opacity: 0, y: -40 }, 0.85)

        // ✅ box5 — stays till end
        tl.to('.box5', { opacity: 1, y: 0 }, 0.9)

    }, [])
     
    return(
            <group ref={grpRef}>
        <Suspense fallback= {<Html> <h1>Loading....</h1></Html>}>
                    <MacbookModel scale={isMobile? 0.05 :0.08}  position={[0,-1,0]}/>
        </Suspense>

            </group>

    )
}

function Feature(){


        return(
                    <section id="features">

                    <h2>See it all in a new light.</h2>
                <div className="canvas-wrapper">

                    <Canvas id="f-canvas">

                              <StudioLight />
                              <ambientLight intensity={0.5} />
                              <ModelScroll />
                    </Canvas>
                </div>



                   <div className="hello">

                    {features .map((feature , index)=>(

                        <div className={clsx('box' , `box${index+1}`, feature.styles)}>

                            <img src={feature.icon} alt={feature.highlight} />
                            <p>
                                <span>
                                    {feature.highlight}
                                </span>
                                {feature.text}
                            </p>
                        </div>
                    ))}



                    </div> 
                    </section>
        )
}

export default Feature;