import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const ColorToggleButton = () => {
const [buttonColor, setButtonColor] = useState('danger');

const handleClick = () => {
let newColor;
    if (buttonColor === "danger") {

    newColor = "warning";
    }
    if (buttonColor === "warning") {

    newColor = "success";
    }
    if (buttonColor === "success"){
    newColor = "danger";
    }
    setButtonColor( newColor );
};

useEffect (() => {
const interval = setInterval(handleClick, 10000);
return () => {
      clearInterval(interval);
    };
});

return (
<Button variant = { buttonColor } onClick = { handleClick }>
Buton Semafor</Button>
);
};

export default ColorToggleButton;