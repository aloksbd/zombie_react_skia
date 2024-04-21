import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ColorInput = ({ onSubmit }) => {
  const [color1, setColor1] = React.useState('');
  const [color2, setColor2] = React.useState('');

  const handleSubmit = () => {
    onSubmit(color1, color2);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter color 1"
        onChangeText={setColor1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter color 2"
        onChangeText={setColor2}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ColorInput;
