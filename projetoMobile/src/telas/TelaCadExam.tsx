import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore";
import { CadExamProps } from '../navigation/HomeNavigator';

type ParamList = {
    CreateExam: {
        clienteId: string;
    };
};

const CreateExamScreen = ( {navigation}: CadExamProps) => {
    const route = useRoute<RouteProp<ParamList, 'CreateExam'>>();
    const { clienteId } = route.params;

    const [examName, setExamName] = useState('');
    const [examDate, setExamDate] = useState('');

    const handleAddExam = () => {
        try {
            firestore()
            .collection('exames')
            .add({
                    clienteId,
                    examName,
                    examDate,
                });
            console.log('Exame adicionado com sucesso');
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao adicionar o exame:', error);
        }
    };

    return(
        <View style={styles.container}>
            <Text>Adicionar exame para cliente ID: {clienteId}</Text>
            <TextInput
                placeholder='Nome do Exame'
                value={examName}
                onChangeText={setExamName}
                style={styles.input}/>
            <Text>Adicione uma data:</Text>
            <TextInput
                placeholder='Data do exame'
                value={examDate}
                onChangeText={setExamDate}
                style={styles.input}/>
            <Pressable
                style={styles.botao}
                onPress={handleAddExam}>
                    <Text style={styles.botaoText}>Adicionar Exame</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
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
});

export default CreateExamScreen