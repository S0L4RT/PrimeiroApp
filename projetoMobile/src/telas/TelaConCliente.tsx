import { useState, useEffect} from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { IClientes } from "../model/IClientes";
import { ConCliProps } from "../navigation/HomeNavigator";
import Carregamento from "../Carregamento";

type ItemNotaProps = {
    numero: number;
    nota: IClientes;
    onAlterar: (id: string) => void;
    onDeletar: (id: string) => void;
};

const ItemNota = ( props: ItemNotaProps) => {
    
    

    return (
        <View style={styles.card}>
            <View style={styles.dados_card}>
                <Text style={{ fontSize: 35 }}>
                    {props.numero+1 + ' - ' + props.nota.nome}
                </Text>
                <Text style={{ fontSize: 20 }}>{props.nota.cpf}</Text>
            </View>

            <View style={styles.botao_alterar}>
                <Pressable
                    onPress={() => props.onAlterar(props.nota.nome!)}>
                        <Text style={styles.texto_botao_card}>
                            A
                        </Text>
                    </Pressable>
            </View>

            <View style={styles.botao_deletar}>
                <Pressable
                    onPress={() => props.onDeletar(props.nota.nome!)}>
                        <Text style={styles.texto_botao_card}>
                            X
                        </Text>
                    </Pressable>
            </View>
        </View>
    );
};

const TelaConCliente = ({ navigation, route }: ConCliProps) => {
    const [clientes, setClientes] = useState([] as IClientes[]);
    const [isCarregando, setIsCarregando] = useState(false);

    useEffect(() => {
        setIsCarregando(true)

        const subscribe = firestore()
            .collection('clientes')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        nome: doc.id,
                        ...doc.data()
                    }

                })as IClientes[];

                setClientes(data);
                setIsCarregando(false);
            });
        return () => subscribe();
    }, []);

    function alterarNota(id: string){
        navigation.navigate("TelaAltNota", { id: id})
    }

    function deletarNota(id: string){
        setIsCarregando(true);

        firestore()
        .collection('clientes')
        .doc(id)
        .delete()
        .then(() => {
            Alert.alert("Cliente", "Removido com sucesso")
        })
        .catch((error) => console.log(error))
        .finally(() => setIsCarregando(false));
    }


    return (
        <View style={styles.container}>
            <Carregamento isCarregando={isCarregando}/>

            <Text style={styles.titulo}>Listagem de Clientes</Text>
            <FlatList
                data={clientes}
                renderItem={(info) => 
                    <ItemNota 
                        numero={info.index}
                        nota={info.item}
                        onAlterar={alterarNota}
                        onDeletar={deletarNota}/>}>
            </FlatList>
        </View>
    );
};

export default TelaConCliente;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8e8382'
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
    },
})
