import { useState } from "react";


import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { CadNotaProps } from "../navigation/HomeNavigator";
import { INotas } from "../model/INotas";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const TelaCadNota = ({ navigation, route }: CadNotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    function cadastrar() {
        setIsCarregando(true);

        if(verificaCampos()){
            let nota = {
                titulo: titulo,
                descricao: descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            } as INotas;

            firestore()
            .collection('notas')
            .add(nota)
            .then(() => {
                Alert.alert("Nota", "Cadastrada com sucesso")
                navigation.navigate('TelaPrincipal')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsCarregando(false));
        }
        setIsCarregando(false);
    };

    function verificaCampos(){
        if(titulo == ''){
            Alert.alert("Titulo em branco", "Digite um titulo")
            return false;
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <Carregamento isCarregando={isCarregando}/>
            <Text>Título</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setTitulo(text) }}/>
            
            <Text>Descrição</Text>
            <TextInput
            multiline
            numberOfLines={4}
            maxLength={100}
            style={styles.caixa_texto}
            onChangeText={(text) => { setDescricao(text) }} />
            <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}
                    onPress={() => cadastrar()}
                    disabled={isCarregando}>
                    <Text style={styles.botaoText}>Cadastrar Nota</Text>
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
    caixa_texto: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        color: '#000'
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
    },
    botaoText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        
    },
})

export default TelaCadNota;