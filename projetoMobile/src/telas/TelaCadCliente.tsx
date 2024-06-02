import { useState } from "react";


import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { CadCliProps } from "../navigation/HomeNavigator";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { IClientes } from "../model/IClientes";

const TelaCadCliente = ({ navigation, route }: CadCliProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [tel, setTel] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [num, setNum] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    function cadastrar() {
        setIsCarregando(true);

        if(verificaCampos()){
            let cliente = {
                
                nome: nome,
                cpf: cpf,
                rua: rua,
                bairro: bairro,
                cidade: cidade,
                num: num,
                dataNasc: dataNasc,
                created_at: firestore.FieldValue.serverTimestamp()
            } as IClientes;

            firestore()
            .collection('clientes')
            .add(cliente)
            .then(() => {
                Alert.alert("Cliente", "Cadastrado com sucesso")
                navigation.navigate('TelaPrincipal')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsCarregando(false));
        }
        setIsCarregando(false);
    };

    function verificaCampos(){
        if(nome == ''){
            Alert.alert("Nome em branco", "Digite um nome")
            return false;
        }
        return true;
    }

    const formataCpf = (text: string) => {
        let cpfFormat = text.replace(/\D/g, '');

        if(cpfFormat.length > 3){
            cpfFormat = cpfFormat.replace(/^(\d{3})(\d)/g, '$1.$2.$3');
            if(cpfFormat.length > 7){
                cpfFormat = cpfFormat.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3');
                if(cpfFormat.length > 11){
                    cpfFormat = cpfFormat.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3-$4')
                }
            }
        }
        return cpfFormat.substring(9, 14);
    }

    const ajustCpf = (text: string) => {
        const cpfFormat = formataCpf(text);
        setCpf(cpfFormat)
    }

    const formataTel = (text: string) => {
        let telFormat = text.replace(/\D/g, '');

        if(telFormat.length > 2){
            telFormat = telFormat.replace(/^(\d{2})(\d)/g, '($1) $2-$3');
            if(telFormat.length > 7){
                telFormat = telFormat.replace(/^(\d{2})\.(\d{5})(\d)/g, '($1) $2-$3');
                if(telFormat.length > 11){
                    telFormat = telFormat.replace(/^(\d{2})\.(\d{5})\.(\d{4})(\d)/g, '($1) $2-$3')
                }
            }
        }
    }

    const ajustTel = (text: string) => {
        const telFormat = formataTel(text);
        setTel(telFormat)
    }

    return (
        <View style={styles.container}>
            <Carregamento isCarregando={isCarregando}/>
            <Text>Cadastrar Cliente</Text>
            <Text>Nome completo</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setNome(text) }}/>

            <Text>CPF</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={ajustCpf}
                value={cpf}
                placeholder="000.000.000-00"
                keyboardType="numeric"
                maxLength={14}/>
            
            <Text>Telefone</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={ajustTel}
                value={tel}
                placeholder="(00) 00000-0000"
                keyboardType="numeric"
                maxLength={15}/>

            <Text>Endereço</Text>
            <Text>Rua</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setRua(text) }}/>
            
            <Text>Bairro</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setBairro(text) }}/>
            
            <Text>Cidade</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setCidade(text) }}/>
            
            <Text>Número</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setNum(text) }}/>
            
            <Text>Data de nascimento</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setDataNasc(text) }}/>

            <Pressable style={(state) => [styles.botao, state.pressed ? { opacity: 0.5} : null]}
                    onPress={() => cadastrar()}
                    disabled={isCarregando}>
                    <Text style={styles.botaoText}>Cadastrar Cliente</Text>
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

export default TelaCadCliente;