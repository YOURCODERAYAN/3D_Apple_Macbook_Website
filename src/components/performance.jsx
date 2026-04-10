import performanceImages from '../constants/perform'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'
import {useEffect , useRef} from 'react'

gsap.registerPlugin(ScrollTrigger);

function Performance(){

const imageRef = useRef([]);


    useEffect(()=>{

        const images = imageRef.current;



    let ctx = gsap.context(()=>{

        // Step - 1 
        gsap.set(images , {

            x:0,
            y:0,
            opacity:1,
            rotation:0,
            scale:1
        });



        // Step -2 

        const position =[
        { x: -500, y: -250, scale: 0.7, rotate: -15 }, // left
  { x: 650, y: 150, scale: 0.75, rotate: 12 },  // 👉 pushed more right
  { x: -600, y: 200, scale: 0.65, rotate: 8 },   // left
  { x: 280, y: 400, scale: 0.7, rotate: -10 },   // 👉 more right
  { x: 0, y: 0, scale: 1.2, rotate: 0 },         // center
  { x: -300, y: 350, scale: 0.8, rotate: -6 },   // left-bottom
  { x: 600, y: -100, scale: 0.85, rotate: 5 }  
        ];



        // Step-3 

    const tl = gsap.timeline({

        scrollTrigger:{

            trigger:'#performance',
            start:'top 80%',
            end: '+=150%',
            scrub:1,

            markers:true
        }
    });


    // Step -4

    images.forEach((img , index)=>{

        const pos = position[index% position.length]

        if(index===4){

            


            tl.to(
                img,{
                    x:0,
                    y:0,
                    scale:1.2,
                    rotation:0,
                    zIndex:100,
                    duration:2
                    
                },
                0 // for all animatiing together 
            );
        }
        else{
            tl.to(
                img,
                {
                    x:pos.x,
                    y:pos.y,
                    scale:pos.scale,
                    rotation:pos.rotation,
                    zIndex:9,
                    duration:7,
                    ease:'power3.out'
                },
                0
            )
        }
    })
    })
    return () => ctx.revert();
    },[]);


   





        return(
            

               <section id="performance">
                    <h2>Next-level graphics performance . Game on.</h2>


                    <div className="wrapper">

                    {
                        performanceImages.map(({id , src}, index)=>(
                            <img  key={id}src={src} alt={id} ref={(el) => (imageRef.current[index] = el)} />

                        ))
                    }
                    </div>


                    <div className="content">

                        <p>
                            Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="bold-text">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                        </p>
                    </div>

               </section>
            
        )
}

export default Performance;