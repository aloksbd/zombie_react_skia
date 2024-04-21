import { useImage, Image,  } from '@shopify/react-native-skia';
import { useEffect, useState } from 'react';

const Zombie = ({x, y, killed}) => {
    const idleFrames = [
        useImage(require('../../assets/zombie/Idle (1).png')),
        useImage(require('../../assets/zombie/Idle (2).png')),
        useImage(require('../../assets/zombie/Idle (3).png')),
        useImage(require('../../assets/zombie/Idle (4).png')),
        useImage(require('../../assets/zombie/Idle (5).png')),
        useImage(require('../../assets/zombie/Idle (6).png')),
        useImage(require('../../assets/zombie/Idle (7).png')),
        useImage(require('../../assets/zombie/Idle (8).png')),
        useImage(require('../../assets/zombie/Idle (9).png')),
        useImage(require('../../assets/zombie/Idle (10).png')),
        useImage(require('../../assets/zombie/Idle (11).png')),
        useImage(require('../../assets/zombie/Idle (12).png')),
        useImage(require('../../assets/zombie/Idle (13).png')),
        useImage(require('../../assets/zombie/Idle (14).png')),
        useImage(require('../../assets/zombie/Idle (15).png')),
    ]
    const deadFrames = [
        useImage(require('../../assets/zombie/Dead (1).png')),
        useImage(require('../../assets/zombie/Dead (2).png')),
        useImage(require('../../assets/zombie/Dead (3).png')),
        useImage(require('../../assets/zombie/Dead (4).png')),
        useImage(require('../../assets/zombie/Dead (5).png')),
        useImage(require('../../assets/zombie/Dead (6).png')),
        useImage(require('../../assets/zombie/Dead (7).png')),
        useImage(require('../../assets/zombie/Dead (8).png')),
        useImage(require('../../assets/zombie/Dead (9).png')),
        useImage(require('../../assets/zombie/Dead (10).png')),
        useImage(require('../../assets/zombie/Dead (11).png')),
        useImage(require('../../assets/zombie/Dead (12).png')),
    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [animState, setAnimState] = useState(0);
  const  width = 521/5, height = 576/5;
  let frames = animState === 0 ? idleFrames : deadFrames;
  let dead = animState === 0 ? false : true;
  

  useEffect(() => {
    const interval = setInterval(() => {
        if(animState === 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex === frames.length - 1 ? 0 : prevIndex + 1));
        } else {
            if (currentImageIndex === frames.length - 1) {
                
            } else {
                setCurrentImageIndex((prevIndex) => (prevIndex === frames.length - 1 ? 0 : prevIndex + 1));
            }
        }
    }, 1000/30); // Change image every frame

    return () => clearInterval(interval);
  }, [animState, currentImageIndex, frames]);
  var zombie = frames[currentImageIndex];

  const kill = () => {
    if (!dead) {
        console.log("in killed")
        setAnimState(1)
        setCurrentImageIndex(0)
        killed()
    }
  } 

  const reset = () => {
        setAnimState(0)
        setCurrentImageIndex(0)
  }

  const sprite = () => {
    return <Image image={zombie} width={width} height={height} x={x} y = {y} fit={'cover'} />
  }

  return {
    sprite,
    kill,
    reset
  }
}

export default Zombie;