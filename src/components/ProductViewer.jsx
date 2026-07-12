import React from 'react'
import useMacbookStore from '../store';
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import StudioLights from './three/StudioLights';
import ModelSwitcher from './three/ModelSwitcher';
import { useMediaQuery } from 'react-responsive';

const ProductViewer = () => {
  const { color, scale, setColor, setScale, reset } = useMacbookStore();

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <section id="product-viewer" className="relative w-full h-screen">
      <h2>Take a closer look.</h2>

      <div className="controls absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <p className="info flex-center">
          Macbook Pro {scale} in {color}
        </p>
        <div className="flex items-center gap-5 mt-5">
          <div className="color-control flex gap-2.5 cursor-pointer">
            <div onClick={() => setColor('#adb5bd')}
              className={clsx('bg-neutral-300 w-7 h-7 rounded-full cursor-pointer', color === '#adb5bd' && 'active')}
            />
            <div onClick={() => setColor('#2e2c2e')}
              className={clsx('bg-neutral-900 w-7 h-7 rounded-full cursor-pointer', color === '#2e2c2e' && 'active')}
            />
          </div>

          <div className="size-control flex gap-2.5 cursor-pointer">
            <div onClick={() => setScale(0.06)}
              className={clsx('w-8 h-8 rounded-full flex items-center justify-center cursor-pointer', scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>
              <p>14"</p>
            </div>

            <div onClick={() => setScale(0.08)}
              className={clsx('w-8 h-8 rounded-full flex items-center justify-center cursor-pointer', scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>


      <Canvas id="canvas"
        className="absolute inset-0 z-0"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
        <StudioLights />

        <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
      </Canvas>
    </section>
  )
}

export default ProductViewer