// 14 and 16 - presentation controls

import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacbookModel14 from '../models/Macbook-14';
import MacbookModel16 from '../models/Macbook-16';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity, duration = ANIMATION_DURATION) => {
    if (!group) return;
    if (opacity > 0) group.visible = true;
    group.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, {
                opacity,
                duration,
                onComplete: () => {
                    if (opacity === 0) group.visible = false;
                },
            })
        }
    })
}
const moveGroup = (group, x, duration = ANIMATION_DURATION) => {
    if (!group) return;
    gsap.to(group.position, {
        x,
        duration
    })
}

const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();
    const isFirstRun = useRef(true);

    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    useGSAP(() => {
        const duration = isFirstRun.current ? 0 : ANIMATION_DURATION;
        isFirstRun.current = false;

        if (showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE, duration);
            moveGroup(largeMacbookRef.current, 0, duration);

            fadeMeshes(smallMacbookRef.current, 0, duration);
            fadeMeshes(largeMacbookRef.current, 1, duration);
        } else {
            moveGroup(smallMacbookRef.current, 0, duration);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE, duration);

            fadeMeshes(smallMacbookRef.current, 1, duration);
            fadeMeshes(largeMacbookRef.current, 0, duration);
        }

    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        polar: [-Math.PI, Math.PI],
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, friction: 26, tension: 0 },
    }

    return (
        <PresentationControls {...controlsConfig}>
            <group ref={largeMacbookRef}>
                <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
            </group>
            <group ref={smallMacbookRef}>
                <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
            </group>
        </PresentationControls>
    )
}

export default ModelSwitcher
