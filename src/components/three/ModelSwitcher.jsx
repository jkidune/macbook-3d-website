// 14 and 16 - presentation controls

import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacbookModel14 from '../models/Macbook-14';
import MacbookModel16 from '../models/Macbook-16';

const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showLargeMacbook = scale === 0.08 || scale === 0.05;
    const showSmallMacbook = scale === 0.06 || scale === 0.03;

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        polar: [-Math.PI, Math.PI],
        azimuth: [-Infinity, Infinity]
    }

    return (
        <>
            {showLargeMacbook && (

                <PresentationControls {...controlsConfig}>
                    <group ref={largeMacbookRef}>
                        <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                    </group>

                </PresentationControls>
            )}
            {showSmallMacbook && (

                <PresentationControls {...controlsConfig}>
                    <group ref={smallMacbookRef}>
                        <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                    </group>

                </PresentationControls>
            )}
        </>
    )
}

export default ModelSwitcher
