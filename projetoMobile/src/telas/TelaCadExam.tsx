import { useState, useEffect } from "react";


import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { Dropdown } from "react-native-element-dropdown";
import { CadExamProps } from "../navigation/HomeNavigator";
import { INotas } from "../model/INotas";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { IClientes } from "../model/IClientes";
import { IExam } from "../model/IExam";

const TelaCadExam = ({ navigation, route }: CadExamProps) => {
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null)
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);
    const [Clientes, setIsClientes] = useState([] as IClientes[])
    const [nomeCliente, setNomeCliente] = useState('')

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

                setIsClientes(data);
                setIsCarregando(false);
            });
        return () => subscribe();
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Selecione o cliente</Text>
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={Clientes}
            search
            maxHeight={300}
            labelField="nome"
            valueField="nome"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.nome as any);
                setNomeCliente(item.nome)
                setIsFocus(false);
            }}/>
            <Carregamento isCarregando={isCarregando}/>
            <Text style={styles.text}>Nome do procedimento</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setNome(text) }}/>
            
            <Text style={styles.text}>Descrição</Text>
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

    function cadastrar() {
        setIsCarregando(true);

        if(verificaCampos()){
            let exame = {
                nomeCliente: nomeCliente,
                nome: nome,
                descricao: descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            } as IExam;

            firestore()
            .collection('exames')
            .add(exame)
            .then(() => {
                Alert.alert("Exame", "Cadastrado com sucesso")
                navigation.navigate('TelaPrincipal')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsCarregando(false));
        }
        setIsCarregando(false);
    };

    function verificaCampos(){
        if(nome == ''){
            Alert.alert("Titulo em branco", "Digite um titulo")
            return false;
        }
        return true;
    }
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
    dropdown: {
        backgroundColor: 'white',
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: 300
    }, 
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle:{
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
    }
})

export default TelaCadExam;