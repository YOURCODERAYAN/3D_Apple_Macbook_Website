import {create} from 'zustand';


const useMacbookStore =  create((set)=>({

                color:'#2e2e2e',
                setColor: (color)=> set({color}),

                scale : 0.08,
                setScale : (scale) => set({scale}),


                texture:'videos/feature-1.mp4',
                setTexture:(texture) => set({texture}),


        reset:()=>set({color:'#2e2e2e' , scale:0.08 , texture:'videos/features-1.mp4'})

}))

export default useMacbookStore;