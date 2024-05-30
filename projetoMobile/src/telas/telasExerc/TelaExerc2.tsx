import { useState } from "react";


import firestore from "@react-native-firebase/firestore";
import { CadNotaProps } from "../../navigation/HomeNavigator";
import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const TelaCadNota = ({ navigation, route }: CadNotaProps) => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [codBarras, setCodBarras] = useState('');

    function cadastrar() {

            firestore()
            .collection('produtos')
            .add({
                nome,
                preco,
                codBarras
            })
            .then(() => {
                Alert.alert("Produto", "Cadastrado com sucesso")
                setNome('');
                setPreco('');
                setCodBarras('');
                navigation.navigate('TelaInicial')
            })
            .catch((error) => {
                Alert.alert("Erro ao cadastrar" + error)
            })
        
    };

    function verificaCampos(){
        if(nome === ''){
            Alert.alert("Nome em branco", "Insira um nome");
            return false;
        }
        if(preco === ''){
            Alert.alert("Preço em branco", "Insira um preço");
            return false;
        }
        if(codBarras === ''){
            Alert.alert("Código de barras em branco", "Insira um código de barras");
            return false;
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitulo}>Cadastro de Produtos</Text>
            <Text style={styles.text}>Escreva o nome do produto</Text>
            <TextInput
            style={styles.input}
            value={nome}
            onChangeText={text => setNome(text)}/>

            <Text style={styles.text}>Escreva o preço do produto</Text>
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={preco}
            onChangeText={text => setPreco(text)}/>

            <Text style={styles.text}>Escreva o código de barras</Text>
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={codBarras}
            onChangeText={text => setCodBarras(text)}/>

            <Pressable style={styles.botao} onPress={cadastrar}>
                <Text style={styles.botaoText}>Cadastrar</Text>
            </Pressable>
            </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8e8382',
    },
    input: {
        marginTop: 20,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    },
    botao: {
        width: 300,
        height: 60,
        backgroundColor: 'black',
        marginTop: 20,
        borderRadius: 5,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        
    },
    text: {
        marginTop: 20,
        fontSize: 25,
        color: 'black',
        marginLeft: 0
    },
    textTitulo: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 100,
        fontSize: 35,
        color: 'black',
        marginLeft: 100,
        fontWeight: 'bold'
    },
})

export default TelaCadNota;