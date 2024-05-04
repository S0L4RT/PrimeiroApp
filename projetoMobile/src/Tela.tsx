import React, { useState } from 'react';
import { Alert, View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native';
import auth from '@react-native-firebase/auth'

const clicou = () => {
    Alert.alert("Arthur Maciel", "Você chegou no final da execução!");
}

const Tela = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar () {
        if(verificaCampos()){
            auth()
            .signInWithEmailAndPassword(email, senha)
            .then(() => {Alert.alert('Logado com sucesso!')})
            .catch((error) => tratarErros(String(error)))
        }
    }

    function verificaCampos () {
        if(email == ''){
            Alert.alert('Email em branco', 'Digite um email')
            return false;
        }
        if(senha == ''){
            Alert.alert('Senha em branco', 'Digite uma senha')
            return false;
        }

        return true;
    }

    function tratarErros(erro: string){
        console.log(erro);
        if(erro.includes("[auth/invalid-email]")){
            Alert.alert("Email inválido", "Digite um email válido")
        }else if(erro.includes("[ INVALID_LOGIN_CREDENTIALS ]")){
            Alert.alert("Login ou senha incorretos", "")
        }else{
            Alert.alert("Erro", erro)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    onChangeText={(text) => {setEmail(text)}}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                    onChangeText={(text) => {setSenha(text)}}
                />
                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}
                    onPress={() => { logar() }}
                >
                    <Text style={styles.botaoText}>Login</Text>
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
        backgroundColor: '#8e8382',
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 45,
    },
    input: {
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
        backgroundColor: '#353535',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    }
})

export default Tela;