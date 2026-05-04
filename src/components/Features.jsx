import {Canvas} from "@react-three/fiber";
import StudioLight from "./three/StudioLight.jsx";
import features from "../constants/features.js";
import feature2 from "../constants/feature2.js";
import clsx from "clsx";
import {Suspense, useEffect, useRef} from "react";
import {Html} from "@react-three/drei";
import MacbookModel from "./models/Macbook.jsx";
import {useMediaQuery} from "react-responsive";
import useMacbookStore from "../constants/MacbookStore.js";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'})
    const { setTexture } = useMacbookStore();

    // Pre-load all feature videos during component mount
    useEffect(() => {
        feature2.forEach((feature) => {
            const v = document.createElement('video');

            Object.assign(v, {
                src: feature.videoPath,
                muted: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous',
            });

            v.load();
        })
    }, []);

    useGSAP(() => {
        // 3D MODEL ROTATION ANIMATION
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#features',
                start: 'top top',
                end:'+=100vh',
                scrub: 1,
                pin: true,
            }
        });

        // SYNC THE FEATURE CONTENT
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#features',
                start: 'top top',
                end: '+=100vh',
                scrub: 1,
            }
        })

        // 3D SPIN
        if(groupRef.current) {
            modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 3, ease: 'none'})
        }

        // Content & Texture Sync
        timeline
            .call(() => setTexture('/videos/feature-1.mp4'))
            .to('.box1', { opacity: 1, y: 0, delay: 1 })

            .call(() => setTexture('/videos/feature-2.mp4'))
            .to('.box2', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-3.mp4'))
            .to('.box3', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-4.mp4'))
            .to('.box4', { opacity: 1, y: 0})

            .call(() => setTexture('/videos/feature-5.mp4'))
            .to('.box5', { opacity: 1, y: 0 })
    }, []);

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1>Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.05 : 0.1} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {
    return (
        <section id="features">
            <h2>See it all in a new light.</h2>

            <Canvas id="f-canvas" camera={{}}>
                <StudioLight />
                <ambientLight intensity={0.5} />
                <ModelScroll />
            </Canvas>

            <div>
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span>{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features