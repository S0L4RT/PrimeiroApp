import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

type Props = {
    texto: string
}

const AtvEx = (props: Props) => {
    return(
        <View>
            <Text>
                {props.texto}
            </Text>
            <TextInput>
                
            </TextInput>

        </View>
    )
}

export default AtvEx;