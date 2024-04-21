import { useState, useEffect } from 'react';

const ColorSwitcher = ({ color1, color2, onColorChange }) => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      onColorChange(toggle ? color1 : color2);
      setToggle(!toggle);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [color1, color2, toggle, onColorChange]);

  return null;
};

export default ColorSwitcher;
