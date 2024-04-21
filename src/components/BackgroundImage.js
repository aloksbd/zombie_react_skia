import { useImage, Image } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import { Fragment } from 'react/jsx-runtime';

const BackgroundImage = () => {
  const { width, height } = useWindowDimensions();
  const bg = useImage(require('../../assets/bg/BG.png'));

  return (
    <Fragment>
      <Image image={bg} width={width} height={height} fit={'cover'} />
    </Fragment>
  );
};

export default BackgroundImage;
