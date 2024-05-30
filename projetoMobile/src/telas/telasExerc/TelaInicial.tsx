import React from "react";
import { InicialProps } from "../../navigation/HomeNavigator";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TelaInicial = ({navigation} : InicialProps) => {
    
    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}>
                    Bem Vindo
            </Text>
            <Pressable 
                style={styles.botao}
                onPress={() => {navigation.navigate('TelaExerc1')}}>
                    <Text
                        style={styles.botao_text}>
                            Exercício 1
                    </Text>
            </Pressable>

            <Pressable 
                style={styles.botao}
                onPress={() => {navigation.navigate('TelaExerc2')}}>
                    <Text 
                        style={styles.botao_text}>
                            Exercício 2
                    </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    text: {
        fontSize: 40,
        color: 'black',
        marginLeft: 100
    },
    botao: {
        backgroundColor: 'black',
        width: 300,
        height: 42,
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50
    },
    botao_text: {
        color: 'white'
    }
})

export default TelaInicial;