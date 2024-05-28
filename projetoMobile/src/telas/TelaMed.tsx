import React, { useState } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet, Alert } from 'react-native';

const TelaMed = () => {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);

    const Calcular = () => {
        let media = (nota1 + nota2) / 2;
        if(media >= 7){
            Alert.alert(
                "Média",
                "A primeira nota do aluno foi: " + nota1 +
                "\nA segunda nota do aluno foi: " + nota2+
                "\nA média do aluno ficou: " + media + ". O aluno foi aprovado!")
        }else{
            Alert.alert(
                "Média",
                "A primeira nota do aluno foi: " + nota1 +
                "\nA segunda nota do aluno foi: " + nota2+
                "\nA média do aluno ficou: " + media + ". O aluno foi reprovado!")
        }
    }

    return (
        <>
            <View style={styles.container}> 
                <TextInput
                style={styles.nota}
                placeholder="Insira o nome do aluno"/>
                <TextInput
                style={styles.nota}
                placeholder="Insira a primeira nota"
                onChangeText={(text) => {setNota1(Number.parseFloat(text))}}/>
                <TextInput
                style={styles.nota}
                placeholder="Insira a segunda nota"
                onChangeText={(text) => {setNota2(Number.parseFloat(text))}}/>
                <Pressable
                style={styles.botao}
                onPress={() => { Calcular() }}>
                    <Text>Calcular nota</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#100a49'
    },
    nota: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#82c3bf',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TelaMed;