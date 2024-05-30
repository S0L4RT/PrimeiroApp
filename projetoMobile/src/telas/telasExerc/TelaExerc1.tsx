import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const TelaExerc1 = () => {
    const [numero, setNumero ] = useState(0);
    const [result, setResult] = useState([] as number[]);

    const retornoLista = () => {
        if(!isNaN(numero)){
            const div3 = [];
            for (let i = 1; i <= numero; i++){
                if(i % 3 === 0){
                    div3.push(i);
                }
            }
            setResult(div3);
        } else {
            setResult([])
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Listar números divisíveis por 3</Text>
            <TextInput
            style={styles.input}
            placeholder="Digite um número"
            keyboardType="numeric"
            onChangeText={(text) => {setNumero(Number.parseInt(text))}}/>
            <Pressable
                style={styles.botao}
                onPress={retornoLista}>
                    <Text style={styles.botao_text}>Calcular</Text>
            </Pressable>
            <FlatList
                data={result}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <Text>{item}</Text>}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'grey'
    },
    botao:{
        backgroundColor: 'black',
        width: 300,
        height: 42,
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50
    },
    input: {
        marginTop: 50,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        marginLeft: 50
    },
    text: {
        marginTop: 100,
        fontSize: 40,
        color: 'black',
        marginLeft: 50
    },
    botao_text: {
        fontSize: 25,
        color: 'white'
    }
})
export default TelaExerc1