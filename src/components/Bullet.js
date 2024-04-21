import { Circle } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';

const Bullet = ({killZombie1, killZombie2}) => {
    const { width, height } = useWindowDimensions();
    const [velocity, setVelocity] = useState({x: 0, y: 0});
    const [position, setPosition] = useState({x: 140, y: height-120});
    const [collision, setCollision] = useState(0);
    const [killZ1, setkillZ1] = useState(true);
    const [killZ2, setkillZ2] = useState(true);
  const radius = 10
  

  const shootAt = ({x, y}) => {
        const distance = Math.sqrt((x - position.x) ** 2 + (y - position.y) ** 2);
        const speed = 10; // pixels per second
        const timeToTarget = distance / speed;
      
        const xv = (x - position.x) / timeToTarget;
        const yv = (y - position.y) / timeToTarget;
        setVelocity({x:xv,y:yv});
  } 

  useEffect(() => {
    const interval = setInterval(() => {
        setPosition((prevPos) => ({x: prevPos.x+velocity.x, y: prevPos.y+velocity.y}));
        if (position.y < 60) {
            setPosition((prevPos) => ({x:prevPos.x, y: 60}))
            setVelocity((prevVel) => ({x: prevVel.x, y: -prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }
        if (position.y > height-60) {
            setPosition((prevPos) => ({x:prevPos.x, y: height-60}))
            setVelocity((prevVel) => ({x: prevVel.x, y: -prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }
        if (position.x < 60) {
            setPosition((prevPos) => ({x:60, y: prevPos.y}))
            setVelocity((prevVel) => ({x: -prevVel.x, y: prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }
        if (position.x > width-60) {
            setPosition((prevPos) => ({x:width-60, y: prevPos.y}))
            setVelocity((prevVel) => ({x: -prevVel.x, y: prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }

        if((position.x > 280 && position.x < 510) && position.y < height/2+100 && position.y > height/2+90) {
            setPosition((prevPos) => ({x:prevPos.x, y: height/2+100}))
            setVelocity((prevVel) => ({x: prevVel.x, y: -prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }
        if((position.x > 280 && position.x < 510) && position.y > height/2 && position.y < height/2+10) {
            setPosition((prevPos) => ({x:prevPos.x, y: height/2}))
            setVelocity((prevVel) => ({x: prevVel.x, y: -prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }
        if((position.y > height/2 && position.y < height/2+100) && position.x < 510 && position.x > 500) {
            setPosition((prevPos) => ({x:510, y: prevPos.y}))
            setVelocity((prevVel) => ({x: -prevVel.x, y: prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }
        if((position.y > height/2 && position.y < height/2+100) && position.x > 280 && position.x < 290) {
            setPosition((prevPos) => ({x:280, y: prevPos.y}))
            setVelocity((prevVel) => ({x: -prevVel.x, y: prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }


        if((position.x > 580 && position.x < 810) && position.y < height/2+50 && position.y > height/2+40) {
            setPosition((prevPos) => ({x:prevPos.x, y: height/2+50}))
            setVelocity((prevVel) => ({x: prevVel.x, y: -prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }
        if((position.x > 580 && position.x < 810) && position.y > height/2-50 && position.y < height/2-40) {
            setPosition((prevPos) => ({x:prevPos.x, y: height/2-50}))
            setVelocity((prevVel) => ({x: prevVel.x, y: -prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }
        if((position.y > height/2-50 && position.y < height/2+50) && position.x < 810 && position.x > 800) {
            setPosition((prevPos) => ({x:810, y: prevPos.y}))
            setVelocity((prevVel) => ({x: -prevVel.x, y: prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }
        if((position.y > height/2-50 && position.y < height/2+50) && position.x > 580 && position.x < 590) {
            setPosition((prevPos) => ({x:580, y: prevPos.y}))
            setVelocity((prevVel) => ({x: -prevVel.x, y: prevVel.y}))
            setCollision((prevVal) => (prevVal+1))
        }

        if( position.x < 515 &&
            position.x + 20 > 400 &&
            position.y < height/2-100 + 105 &&
            position.y + 20 > height/2-100
          ) {
            if(killZ1) {

                console.log("killing 1§")
            killZombie1()
            setkillZ1(false)
            }
          }

          if( position.x < 715 &&
            position.x + 20 > 600 &&
            position.y < height/2-150 + 105 &&
            position.y + 20 > height/2-150
          ) {
            if(killZ2){
                console.log("killing 2§")
            killZombie2()
            setkillZ2(false)
        }
          }

        if (collision >= 10) {
            setVelocity({x: 0, y: 0})
            setPosition({x: 140, y: height-120})
            setCollision(0)
        }

    }, 1000/30); // Change image every frame

    return () => clearInterval(interval);
  }, [position, velocity, collision, killZ1, killZ2]);

  const reset = () => {
    setVelocity({x: 0, y: 0})
    setPosition({x: 140, y: height-120})
    setCollision(0)
    setkillZ1(true)
    setkillZ2(true)
}

  const bulletSprite = () => {
    return <Circle cx={position.x} cy={position.y} r={radius} color="red"></Circle>
  }

  return {
    bulletSprite,
    shootAt,
    position, 
    reset
  };
};

export default Bullet;
