import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, TextInputSelectionChangeEventData, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { INotas } from "../model/INotas";
import Carregamento from "../Carregamento";
import { AltExamProps } from "../navigation/HomeNavigator";
import { IExam } from "../model/IExam";

const TelaALtExam = ({ navigation, route }: AltExamProps) => {
    const [id,] = useState(route.params.id);
    const [nomeCliente, setNomeCliente] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    async function carregar() {
        setIsCarregando(true);
        const resultado = await firestore()
            .collection('exames')
            .doc(id)
            .get();

        const exame = {
            id: resultado.id,
            ...resultado.data()
        } as IExam;

        setNome(exame.nome);
        setDescricao(exame.descricao);
        setIsCarregando(false);
    };

    useEffect(() => {
        carregar();
    }, []);

    function alterar() {
        setIsCarregando(true);

        firestore()
            .collection('exames')
            .doc(id)
            .update({
                nomeCliente,
                nome,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Exame", "Alterado com sucesso")
                navigation.goBack();
            })
            .catch((error) => console.log(error))
            .finally(() => setIsCarregando(false))
    }

    return (
        <View
            style={styles.container}>
                <Carregamento isCarregando={isCarregando}/>

                <Text style={styles.titulo}>Alterar Exame</Text>
                <Text
                    style={styles.text}>
                        Nome do procedimento
                    </Text>
                    <TextInput
                        style={styles.caixa_texto}
                        value={nome}
                        onChangeText={(text) => { setNome(text) }}/>
                    
                    <Text
                        style={styles.text}>
                            Descrição
                    </Text>
                    <TextInput
                        multiline
                        numberOfLines={4}
                        maxLength={100}
                        style={styles.caixa_texto}
                        value={descricao}
                        onChangeText={(text) => { setDescricao(text) }}/>
                    
                    <Pressable
                        style={styles.botao}
                        onPress={() => alterar()}
                        disabled={isCarregando}>
                        <Text style={styles.desc_botao}>Alterar</Text>        
                    </Pressable>   
            </View>
    )
}

export default TelaALtExam

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8e8382",
        alignItems: 'center'
    },
    titulo : {
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
        marginBottom: 10
    },
    caixa_texto: {
        width: '80%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white'
    },
    desc_caixa_texto: {
        fontSize: 18
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        margin: 10
    },
    desc_botao: {
        fontSize: 25,
        color: 'white'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
    }
})