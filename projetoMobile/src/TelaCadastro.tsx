import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const TelaCadastro = () => {
    return(
        <>
            <View style={styles.container}>
                <Text>Digite seu nome</Text>
                <TextInput
                placeholder="Digite seu nome"/>
                <Text>Digite um email</Text>
                <TextInput
                placeholder="Digite um email"/>
                <Text>Digite uma senha</Text>
                <TextInput
                placeholder="Digite uma senha"/>
                <Text>Confirme usa senha</Text>
                <TextInput
                placeholder="Confirme sua senha"/>
                <Pressable>
                    <Text>Criar Conta</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8e8382'
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    }
})

export default TelaCadastro;