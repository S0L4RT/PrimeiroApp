import React, { useState} from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const Atv3 = () => {
    const [titulo, setTitulo] = useState('');
    return (
            <View style={styles.container}>
                <Text style={styles.texto}>
                    {titulo}
                </Text>
                <TextInput
                    onChangeText={(text) => {setTitulo(text)}}>
                </TextInput>
            </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3499'
    },
    texto:{
        color: '#000',
    },
    
})

export default Atv3;