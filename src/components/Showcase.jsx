import game from '/videos/game.mp4'
import mac from '/mask-logo.svg'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'


gsap.registerPlugin(ScrollTrigger)

function Switch(){

    useGSAP(() => {
        gsap.set('.media' ,{overflow:'hidden'})
        // ✅ Set initial states via GSAP — not CSS
        gsap.set('.mask img', { scale: 50 })        // starts huge (replaces matrix(80...))
       gsap.set('.content', { opacity: 0, y: 40 }) // starts hidden

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#showcase',
                start: 'top top',
                end: '+=1500',           // ✅ use pixel distance, not 'bottom top'
                scrub: 1,
                pin: true,
            }
        })
        timeline.to('.mask img', {
            scale: 1.1,
            duration: 1,
            ease: 'none'
        })

        // ✅ Step 2: content fades up after mask animation
        timeline.to('.content', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
        })

          setTimeout(() => {
    ScrollTrigger.refresh()
  }, 500)


    })

    
        return(
            <>
            <section id='first-page'></section>
            
                    <section id='showcase'>
                <div className='media'>


                    <video className='game-video' src={game}  loop muted autoPlay playsInline/>

                <div className='mask'>
                    <img src={mac} alt="mask-image"/>
                </div>

                </div>


               <div className="content">
  <div className="wrapper">
    <div className="left-col">                        
      <h2>Rocket Chip</h2>
      <div className="body-text">                    
        <p>
          Introducing{" "}
          <span>M4, the next generation of Apple silicon</span>. M4 powers
        </p>
        <p>It drives Apple Intelligence oniPadPro,so you can write,create,and accompilish more with ease.All in a design that's unbelievely thin , light, and powerful.</p>
        <p>A brand-new display engine delivers breathtaking precesion,color accuracy,and brightness.And a next-gen GPU with hardware-accelareted ray tracing brings console-level graphics to your fingertips</p>
        <p className="learn-more">Learn more about Apple Intelligence </p>
      </div>
    </div>

    <div className="right-col">                     
      <div className="stat">                          
        <p>Up to</p>
        <h3>4x faster</h3>
        <p  className='last'>pro rendering performance than M2</p>
      </div>
      <div className="stat">                          
        <p>Up to</p>
        <h3>1.5x faster</h3>
        <p className='secondlast'>CPU performance than M2</p>
      </div>
    </div>
  </div>
</div>
</section>

            </>


        )
}

export default Switch;