import * as ScreenOrientation from 'expo-screen-orientation';
import GameCanvas from './src/components/GameCanvas';

const App = () => {
  
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  
  return (
        <GameCanvas></GameCanvas>
  );
};

export default App;