import React from 'react';
import {storiesOf} from '@storybook/react-native';

import MyButton from './MyButton';

storiesOf('MyButton', module)
.add('filledWithBorder', () => <MyButton isFilled = {true} text = 'Hello' border = {true} borderColor = 'grey' borderRadius = {8} textColor='white'/>)
.add('filledWithNoBorder', () => <MyButton isFilled = {true} text = 'Hello' border = {false} textColor='white'/>)
.add('NotFilledWithBorder', () => <MyButton isFilled = {false} text = 'Hello' border = {true} borderColor = 'grey' borderRadius = {8} textColor='black'/>)
.add('NotfFilledWithNoBorder', () => <MyButton isFilled = {false} text = 'Hello' border = {false} textColor='black'/>)
