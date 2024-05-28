import React, { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import auth from "@react-native-firebase/auth";
import { CadUsuarioProps } from "../navigation/HomeNavigator";
import Carregamento from "../Carregamento";

const TelaCadUsuario = ({navigation, route}: CadUsuarioProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    async function cadastrar(){
        setIsCarregando(true);

        if(verificaCampos()){
            auth()
                .createUserWithEmailAndPassword(email, senha)
                .then(() => {
                    Alert.alert("Conta", "Cadastrado com sucesso!")
                    navigation.goBack();
                })
                .catch((error) => { tratarErros( String(error) )})
                .finally(() => {
                    setIsCarregando(false);
                });
        }
        setIsCarregando(false);
    }

    function verificaCampos(){
        let resultado = true;

        if(email == ''){
            Alert.alert("Email em branco", "Digite um email")
            return false;
        }
        if(senha == ''){
            Alert.alert("Senha em branco", "Digite uma senha de pelo menos 6 digitos")
            return false;
        }
        if(confirmaSenha == ''){
            Alert.alert("Confirmação de senha em branco", "Digite a confirmação de senha")
            return false;
        }
        if(senha != confirmaSenha){
            Alert.alert("A senhas não são iguais", "Digite a confirmação de senha corretamente")
            return false;
        }
        return resultado;
    }

    function tratarErros(erro: string){
        console.log(erro);
        if(erro.includes("[auth/invalid-email]")){
            Alert.alert("Email inválido", "Digite um email válido")
        }else if(erro.includes("[auth/weak-password]")){
            Alert.alert("Senha fraca", "A senha digitada é fraca. A senha deve conter pelo menos 6 digitos.")
        }else if(erro.includes("[auth/email-already-in-use]")){
            Alert.alert("Email em uso", "O email inserido já foi cadastrado em outra conta")
        }else{
            Alert.alert("Erro", erro)
        }
    }

    return(
        <>
            <View style={styles.container}>
                <Carregamento isCarregando={isCarregando} />
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.logo}
                />
                
                <Text style={styles.texto}>Digite um email</Text>
                <TextInput 
                style={styles.input}
                onChangeText={(text) => { setEmail(text)}}/>
                <Text style={styles.texto}>Digite uma senha</Text>
                <TextInput 
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => { setSenha(text)}}/>
                <Text style={styles.texto}>Confirme sua senha</Text>
                <TextInput 
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => { setConfirmaSenha(text)}}/>
                <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}
                    onPress={() => cadastrar()}
                    disabled={isCarregando}>
                    <Text style={styles.botaoText}>Criar Conta</Text>
                </Pressable>
                <Pressable 
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}
                    onPress={() => {navigation.navigate('TelaLogin')}}>
                    <Text style={styles.botaoText}>Voltar</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: '#8e8382',
    },
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 46
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 5,
        marginLeft: 46
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#353535',
        marginTop: 20,
        borderRadius: 5,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 46
    },
    botaoText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 45,
        marginLeft: 106
    },
});

export default TelaCadUsuario;