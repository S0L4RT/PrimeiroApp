import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import auth from "@react-native-firebase/auth";
import { CadUsuarioProps } from "./navigation/HomeNavigator";

const TelaCadUsuario = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    // const [isCarregando, seiIsCarregando] = useState(false);

    async function cadastrar(){
        // setIsCarregando(true);

        if(verificaCampos()){
            auth()
                .createUserWithEmailAndPassword(email, senha)
                .then(() => {
                    Alert.alert("Conta", "Cadastrado com sucesso!")
                    navigation.goBack();
                })
                .catch((error) => { tratarErros( String(error) )})
                .finally(() => {
                    // setIsCarregando(false);
                });
        }
        // setIsCarregando(false);
    }

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.texto}>Digite seu nome</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.texto}>Digite um email</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.texto}>Digite uma senha</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.texto}>Confirme usa senha</Text>
                <TextInput style={styles.input}/>
                <Pressable style={styles.botao}>
                    <Text style={styles.botaoText}>Criar Conta</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
        backgroundColor: '#8e8382'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 46
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        marginLeft: 46
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#353535',
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        
    },
    botaoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    }
});

export default TelaCadUsuario;