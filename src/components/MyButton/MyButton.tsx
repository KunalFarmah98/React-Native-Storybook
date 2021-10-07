import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const MyButton = ({isFilled, text, border, borderColor, borderRadius, textColor}) =>{

    const styles = StyleSheet.create({
    buttonFilled:{
        margin: 10,
        padding: 10,
        backgroundColor: 'blue',
    },
    buttonNotFilled:{
        margin: 10,
        padding: 10,
    },
    buttonBorder:{
        borderRadius: borderRadius,
        borderWidth: 2,
        borderColor: borderColor
    },
    text:{
        color: textColor,
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'normal',
    }
});
    let stylesArray = [styles.text]
    if(isFilled)
        stylesArray.push(styles.buttonFilled);
    if(!isFilled)
        stylesArray.push(styles.buttonNotFilled);
    if(border){
        stylesArray.push(styles.buttonBorder);
    }

    console.log(text);
    return(
        <Text style = {stylesArray}>{text}</Text>
    );
}

export default MyButton;