import { useImage, Image,  } from '@shopify/react-native-skia';
import { useEffect, useState } from 'react';

const Hero = () => {
    const idleFrames = [
        useImage(require('../../assets/hero/Idle__000.png')),
        useImage(require('../../assets/hero/Idle__001.png')),
        useImage(require('../../assets/hero/Idle__002.png')),
        useImage(require('../../assets/hero/Idle__003.png')),
        useImage(require('../../assets/hero/Idle__004.png')),
        useImage(require('../../assets/hero/Idle__005.png')),
        useImage(require('../../assets/hero/Idle__006.png')),
        useImage(require('../../assets/hero/Idle__007.png')),
        useImage(require('../../assets/hero/Idle__008.png')),
        useImage(require('../../assets/hero/Idle__009.png')),
    ]

    const shootFrames = [
        useImage(require('../../assets/hero/Throw__000.png')),
        useImage(require('../../assets/hero/Throw__001.png')),
        useImage(require('../../assets/hero/Throw__002.png')),
        useImage(require('../../assets/hero/Throw__003.png')),
        useImage(require('../../assets/hero/Throw__004.png')),
        useImage(require('../../assets/hero/Throw__005.png')),
        useImage(require('../../assets/hero/Throw__006.png')),
        useImage(require('../../assets/hero/Throw__007.png')),
        useImage(require('../../assets/hero/Throw__008.png')),
        useImage(require('../../assets/hero/Throw__009.png')),
    ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animState, setAnimState] = useState(0);
  const width = 290/4, height = 500/4;
  let frames = animState === 0 ? idleFrames : shootFrames;
  let canShoot = animState === 0 ? true : false

  
  useEffect(() => {
    const interval = setInterval(() => {
        if(animState === 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex === frames.length - 1 ? 0 : prevIndex + 1));
        } else {
            if (currentImageIndex === frames.length - 1) {
                setAnimState(0)
                setCurrentImageIndex(0)
            } else {
                setCurrentImageIndex((prevIndex) => (prevIndex === frames.length - 1 ? 0 : prevIndex + 1));
            }
        }
    }, 1000/30); // Change image every frame

    return () => clearInterval(interval);
  }, [animState, currentImageIndex, frames, idleFrames, canShoot]);
  var hero = frames[currentImageIndex];

  const shoot = () => {
    if (canShoot) {
        setAnimState(1)
        setCurrentImageIndex(0)
    }
  } 

  const sprite = ({x, y}) => {
    return <Image image={hero} width={width} height={height} x={x} y = {y} fit={'cover'} />
  } 

  return {
    sprite,
    shoot
  };
}

export default Hero;