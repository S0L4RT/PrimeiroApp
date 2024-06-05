import React, { useState } from "react";
import { PrincipalProps } from "../navigation/HomeNavigator";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TelaPrincipal = ({ navigation, route }: PrincipalProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textoPrin}>Bem Vindo</Text>
            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}
                onPress={() => {navigation.navigate('TelaMed')}}>
                <Text style={styles.botaoText}>
                    Calcular Media
                </Text>
            </Pressable>
            <Pressable 
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}>
                <Text 
                style={styles.botaoText}
                onPress={() => {navigation.navigate('TelaCadNota')}}>
                    Cadastrar Nota
                </Text>
            </Pressable>
            <Pressable 
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}>
                <Text 
                style={styles.botaoText}
                onPress={() => {navigation.navigate('TelaConNotas')}}>
                    Consultar Notas
                </Text>
            </Pressable>
            <Pressable 
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}>
                <Text 
                style={styles.botaoText}
                onPress={() => {navigation.navigate('TelaCadCliente')}}>
                    Cadastrar clientes
                </Text>
            </Pressable>
            <Pressable 
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}>
                <Text 
                style={styles.botaoText}
                onPress={() => {navigation.navigate('TelaConCliente')}}>
                    Consultar clientes
                </Text>
            </Pressable>
            <Pressable 
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}>
                <Text 
                style={styles.botaoText}
                onPress={() => {navigation.navigate('TelaCadExam')}}>
                    Cadastrar exames
                </Text>
            </Pressable>
            <Pressable 
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}>
                <Text 
                style={styles.botaoText}
                onPress={() => {navigation.navigate('TelaConExam')}}>
                    Consultar exames
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#8e8382',
    },
    textoPrin: {
        marginLeft: 100,
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold'
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#353535',
        marginTop: 10,
        borderRadius: 4,
        marginLeft: 45
    },
    botaoText: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 83,
        marginTop: 5
    }
})

export default TelaPrincipal;