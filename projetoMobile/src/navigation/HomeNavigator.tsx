import {  NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "../telas/TelaLogin";
import TelaCadUsuario from "../telas/TelaCadUsuario";
import TelaPrincipal from "../telas/TelaPrincipal";
import TelaCadNota from "../telas/TelaCadNota";
import TelaMed from "../telas/TelaMed";
import TelaConNotas from "../telas/TelaConNota";
import TelaAltNota from "../telas/TelaAltNota";
import TelaCadCliente from "../telas/TelaCadCliente";
import TelaConCliente from "../telas/TelaConCliente";
import TelaCadExam from "../telas/TelaCadExam";
import TelaConExam from "../telas/TelaConExam";
import TelaAltExam from "../telas/TelaAltExam";





type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
    TelaCadNota: undefined;
    TelaMed: undefined;
    TelaConNotas: undefined
    TelaAltNota: {id: string}
    TelaCadCliente: undefined;
    TelaConCliente: undefined;
    TelaInicial: undefined;
    TelaExerc1: undefined;
    TelaExerc2: undefined;
    TelaCadExam: undefined;
    TelaConExam: undefined;
    TelaAltExam: {id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaLogin"
            screenOptions={{headerShown: false}}>
                <Stack.Screen name="TelaLogin" component={TelaLogin} />
                <Stack.Screen name="TelaCadUsuario" component={TelaCadUsuario} />
                <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
                <Stack.Screen name="TelaCadNota" component={TelaCadNota} />
                <Stack.Screen name="TelaMed" component={TelaMed} />
                <Stack.Screen name="TelaConNotas" component={TelaConNotas} />
                <Stack.Screen name="TelaAltNota" component={TelaAltNota} />
                <Stack.Screen name="TelaCadCliente" component={TelaCadCliente} />
                <Stack.Screen name="TelaConCliente" component={TelaConCliente} />
                <Stack.Screen name="TelaCadExam" component={TelaCadExam} />
                <Stack.Screen name="TelaConExam" component={TelaConExam} />
                <Stack.Screen name="TelaAltExam" component={TelaAltExam} />
        </Stack.Navigator>
    );
};

type LoginProps = NativeStackScreenProps< RootStackParamList, 'TelaLogin'>;

type CadUsuarioProps = NativeStackScreenProps< RootStackParamList, 'TelaCadUsuario'>;

type PrincipalProps = NativeStackScreenProps< RootStackParamList, 'TelaPrincipal'>;

type CadNotaProps = NativeStackScreenProps< RootStackParamList, 'TelaCadNota'>;

type MediaProps = NativeStackScreenProps< RootStackParamList, 'TelaMed'>;

type ConNotasProps = NativeStackScreenProps< RootStackParamList, 'TelaConNotas'>;

type AltNotaProps = NativeStackScreenProps< RootStackParamList, 'TelaAltNota'>;

type CadCliProps = NativeStackScreenProps< RootStackParamList, 'TelaCadCliente'>;

type ConCliProps = NativeStackScreenProps< RootStackParamList, 'TelaConCliente'>;

type CadExamProps = NativeStackScreenProps< RootStackParamList, 'TelaCadExam'>;

type ConExamProps = NativeStackScreenProps< RootStackParamList, 'TelaConExam'>;

type AltExamProps = NativeStackScreenProps< RootStackParamList, 'TelaAltExam'>;

export default HomeNavigator;

export type {LoginProps, CadUsuarioProps, PrincipalProps, CadNotaProps, MediaProps, ConNotasProps, AltNotaProps, CadCliProps, ConCliProps, CadExamProps, ConExamProps, AltExamProps}