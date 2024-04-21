import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorInput from './ColorInput';
import ColorSwitcher from './ColorSwitcher';

const BackGround = () => {
  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('orange');
  const [currentColor, setCurrentColor] = useState(color1);
  
  const setColors = (c1, c2) => {
    setColor1(c1);
    setColor2(c2);
  };

  return (
    <View style={[styles.container, { backgroundColor: currentColor }]}>
      <ColorInput onSubmit={(c1,c2) => setColors(c1,c2)}/>
      <ColorSwitcher 
      color1={color1}
      color2={color2}
      onColorChange={(color) => {setCurrentColor(color)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      height: 40,
      width: '80%',
      marginVertical: 10,
      paddingHorizontal: 10,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
  });


export default BackGround;
