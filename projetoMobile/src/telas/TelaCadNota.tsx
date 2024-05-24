import { useState } from "react";


import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { CadNotaProps } from "../navigation/HomeNavigator";
import { INotas } from "../model/INotas";
import { Alert, Text, TextInput, View } from "react-native";

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
        <View>
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
        </View>
    )
};