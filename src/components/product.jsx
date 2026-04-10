import {Canvas} from '@react-three/fiber'
import {Box , OrbitControls} from '@react-three/drei'
import MacbookModel14 from './models/Macbook-14';
import StudioLight from './three/StudioLight';
import ModelSwitcher from './three/ModelSwitcher'
import { useMediaQuery } from 'react-responsive';

function Product({sizeHook , colorHook}){

    const isMobile = useMediaQuery({query:'(max-width:1024px)'})

    const ModelColor = colorHook.val === 'space-black' ? '#1a1a1a' : '#c0c0c0';
    const ModelScale = sizeHook.val;

        return(
            <section id="product-viewer">

            <h2>Take a closer look.</h2>
                <div className="controls">

                    <div className="color-control">

                                <div

                            className={`color-option ${colorHook.isSelected('space-black')?'active':''}`}
                            onClick={()=> colorHook.select('space-black')}
                            style={{backgroundColor:'#1a1a1a'}}
                                
                               />
                                <div

                            className={`color-option ${colorHook.isSelected('silver')?'active':''}`}
                            onClick={()=> colorHook.select('silver')}
                            style={{backgroundColor:'#c0c0c0'}}
                                
                               />

                
                </div>

                <div className="size-control">

                        <div className={`size-option ${sizeHook.isSelected(0.06)?'active':''}`}
                        onClick={()=> sizeHook.select(0.06)}

                       > "14" </div>


                        <div className={`size-option ${sizeHook.isSelected(0.08)?'active': ''}`}
                        
                        onClick={()=>sizeHook.select(0.08)}
                       > "16" </div>


                
                </div>

            </div>

                <Canvas id='canvas'  camera={{position:[0,2,5] , fov:50 , near:0.1 , far:100}}>

                   <StudioLight />

                

                


  

                    <ModelSwitcher  scale={ModelScale} isMobile={isMobile} color={ModelColor}/>

                </Canvas>

                </section>

        )
}

export default Product 