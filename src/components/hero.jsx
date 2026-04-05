import {useEffect , useRef} from 'react'

function Hero(){

    const videoRef = useRef(null);


    
    useEffect(()=>{

        if(videoRef.current){

            videoRef.current.playbackRate=2;

        } 
    },[])

        return(

            <section id="hero">

                <div>
                    <h1>MacBook Pro</h1>

                    <img src="/title.png" alt="Macbook-title" />
                </div>

                <div>
                        <video  ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
                </div>


                
                    <button>
                        Buy 
                    </button>

                <p>From $1599 or $133.25/mo.for 12mo.</p>
                




            </section>


        )
}

export default Hero