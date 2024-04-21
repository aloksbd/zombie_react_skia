import { Canvas } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import BackgroundImage from './BackgroundImage';
import Platform from './Platform';
import Zombie from './Zombie';
import Hero from './Hero';
import { TapGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
import Bullet from './Bullet';
import { useState } from 'react';
import { Alert } from 'react-native';

const GameCanvas = () => {
    const [killedZombie, setKilledZombie] = useState(0);
    const killed = () => {
      setKilledZombie((prevVal) => (prevVal+1))
      console.log('killed ', killedZombie)
      if(killedZombie === 1) {
        setTimeout(() => {
            Alert.alert('YOU WIN!!!', 'CONGRATULATIONS!!!!', [
                {text: 'Next Level', onPress: () => reset()},
              ]);
            
          }, 1000);
      }
    }
    const { width, height } = useWindowDimensions();
    const {sprite: heroSprite, shoot} = Hero();
    const { sprite: zombie1, kill: killZombie1, reset: resetZombie1} = Zombie({x: 400, y: height/2-100, killed});
    const { sprite: zombie2, kill: killZombie2, reset: resetZombie2} = Zombie({x: 600, y: height/2-150, killed});
    const {bulletSprite, shootAt, position: bulletPosition, reset: resetBullet} = Bullet({killZombie1, killZombie2});
    const handleTap = ({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
          const { x, y } = nativeEvent;
          shoot()
          shootAt({x,y})
        }
      };

      const reset = () => {
        resetZombie1()
        resetZombie2()
        resetBullet()
        setKilledZombie(0)
      }

    return (
        <GestureHandlerRootView>
        <TapGestureHandler onHandlerStateChange={handleTap}>
            <Canvas style={{ width, height, backgroundColor: 'red' }}>
            <BackgroundImage></BackgroundImage>
            <Platform></Platform>
            {zombie1()}
            {zombie2()}
            {bulletSprite()}
            {heroSprite({x:80, y:height-170})}
            </Canvas>
        </TapGestureHandler>
        </GestureHandlerRootView>
    );
};

export default GameCanvas;