import { useState, useEffect} from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { IExam } from "../model/IExam";
import { ConExamProps } from "../navigation/HomeNavigator";
import Carregamento from "../Carregamento";

type ItemExamProps = {
    numero: number;
    nota: IExam;
    onAlterar: (id: string) => void;
    onDeletar: (id: string) => void;
};

const ItemExam = ( props: ItemExamProps) => {
    
    

    return (
        <View style={styles.card}>
            <View style={styles.dados_card}>
                <Text style={{ fontSize: 35 }}>
                    {props.numero+1 + ' - ' + props.nota.nomeCliente}
                </Text>
                <Text style={{ fontSize: 20 }}>{props.nota.descricao}</Text>
            </View>

            <View style={styles.botao_alterar}>
                <Pressable
                    onPress={() => props.onAlterar(props.nota.id!)}>
                        <Text style={styles.texto_botao_card}>
                            A
                        </Text>
                    </Pressable>
            </View>

            <View style={styles.botao_deletar}>
                <Pressable
                    onPress={() => props.onDeletar(props.nota.id!)}>
                        <Text style={styles.texto_botao_card}>
                            X
                        </Text>
                    </Pressable>
            </View>
        </View>
    );
};

const TelaConExam = ({ navigation, route }: ConExamProps) => {
    const [notas, setNotas] = useState([] as IExam[]);
    const [isCarregando, setIsCarregando] = useState(false);

    useEffect(() => {
        setIsCarregando(true)

        const subscribe = firestore()
            .collection('exames')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                })as IExam[];

                setNotas(data);
                setIsCarregando(false);
            });
        return () => subscribe();
    }, []);

    function alterarNota(id: string){
        navigation.navigate("TelaAltExam", { id: id})
    }

    function deletarNota(id: string){
        setIsCarregando(true);

        firestore()
        .collection('exames')
        .doc(id)
        .delete()
        .then(() => {
            Alert.alert("Exame", "Removido com sucesso")
        })
        .catch((error) => console.log(error))
        .finally(() => setIsCarregando(false));
    }


    return (
        <View style={styles.container}>
            <Carregamento isCarregando={isCarregando}/>

            <Text style={styles.titulo}>Listagem de Exames</Text>
            <FlatList
                data={notas}
                renderItem={(info) => 
                    <ItemExam 
                        numero={info.index}
                        nota={info.item}
                        onAlterar={alterarNota}
                        onDeletar={deletarNota}/>}>
            </FlatList>
        </View>
    );
};

export default TelaConExam;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFACD'
    },
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        color: 'black'
    },
    card: {
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'red',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao_alterar: {
        backgroundColor: 'yellow',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto_botao_card: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black'
    }
})
