import React from 'react';
import { Text, TextInput, View } from 'react-native';

import HelloWorld from './src/HelloWorld'
import Gato from './src/Exemplo2_Gato';
import NomePersonalizado from './src/ExemploParametro';
import Aprovado from './src/CalcularMedia';


function App(): React.JSX.Element{
  return(
    <>
      <View style={{backgroundColor: 'green'}}>
        <TextInput/>
        <HelloWorld/>
        <Gato/>
        <NomePersonalizado nome='Arthur' sobrenome='Maciel'/>
        <Aprovado nome='Zé Roberto' nota1={8} nota2={7}/>
      </View>
    </>
  );
}

export default App;