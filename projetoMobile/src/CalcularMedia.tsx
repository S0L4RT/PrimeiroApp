import React, { useState } from 'react';
import { Text } from 'react-native';

type Props = {
    nome: string;
    nota1: number;
    nota2: number;
}

const Aprovado = (props: Props) => {
    let media = (props.nota1 + props.nota2) / 2;
    if (media >= 7) {
        return (<Text>{props.nome + ': ' + props.nota1 + ' + ' + props.nota2 + ' = ' + media + ' Aprovado'}</Text>);
    } else {
        return (<Text>{props.nome + ': ' + props.nota1 + ' + ' + props.nota2 + ' = ' + media + ' Reprovado'}</Text>);
    }
}

export default Aprovado;