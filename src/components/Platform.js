import { useImage, Image } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import { Fragment } from 'react/jsx-runtime';

const Platform = () => {
  const screen = useWindowDimensions();
  const  width = 100, height = 100;
  const tile = useImage(require('../../assets/bg/Tiles/Tile (2).png'));
  const tileMid = useImage(require('../../assets/bg/Tiles/Tile (5).png'));
  const numberOfHorizontalTiles = Math.floor(screen.width/width);
  const numberOfVerticalTiles = Math.floor(screen.height/height);

  const lowerPlatform = () => {
    let components = [];
    for (let i = 0; i <= numberOfHorizontalTiles; i++) {
      components.push(<Image key={i} image={tile} width={width} height={height} x={i*width} y={screen.height-height/2}/>);
    }
    return components;
  };
  
  const upperPlatform = () => {
    let components = [];
    for (let i = 0; i <= numberOfHorizontalTiles; i++) {
      components.push(<Image key={i} image={tile} width={width} height={height} x={i*width} y={-height/2}/>);
    }
    return components;
  };

  const leftPlatform = () => {
    let components = [];
    for (let i = 0; i <= numberOfVerticalTiles; i++) {
      components.push(<Image key={i} image={tileMid} width={width} height={height} x={-width/2} y={i*height}/>);
    }
    return components;
  };

  const rightPlatform = () => {
    let components = [];
    for (let i = 0; i <= numberOfVerticalTiles; i++) {
      components.push(<Image key={i} image={tileMid} width={width} height={height} x={screen.width-width/2} y={i*height}/>);
    }
    return components;
  };

  const mid1Platform = () => {
    let components = [];
    for (let i = 0; i < 2; i++) {
      components.push(<Image key={i} image={tile} width={width} height={height} x={i*width+300} y={screen.height/2}/>);
    }
    return components;
  };

  const mid2Platform = () => {
    let components = [];
    for (let i = 0; i < 2; i++) {
      components.push(<Image key={i} image={tile} width={width} height={height} x={i*width+600} y={screen.height/2-50}/>);
    }
    return components;
  };

  return (
    <Fragment>
        {leftPlatform()}
        {rightPlatform()}
        {lowerPlatform()}
        {upperPlatform()}
        {mid1Platform()}
        {mid2Platform()}
     </Fragment>
  );
};

export default Platform;