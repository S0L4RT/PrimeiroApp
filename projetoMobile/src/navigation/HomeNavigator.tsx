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
import TelaInicial from "../telas/telasExerc/TelaInicial";
import TelaExerc1 from "../telas/telasExerc/TelaExerc1";
import TelaExerc2 from "../telas/telasExerc/TelaExerc2";
import TelaCadExam from "../telas/TelaCadExam";





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
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
                <Stack.Screen name="TelaExerc1" component={TelaExerc1} />
                <Stack.Screen name="TelaCadExam" component={TelaCadExam} />
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

type InicialProps = NativeStackScreenProps< RootStackParamList, 'TelaInicial'>;

type Exerc1Props = NativeStackScreenProps< RootStackParamList, 'TelaExerc1'>;

type Exerc2Props = NativeStackScreenProps< RootStackParamList, 'TelaExerc2'>;

type CadExamProps = NativeStackScreenProps< RootStackParamList, 'TelaCadExam'>;

export default HomeNavigator;

export type {LoginProps, CadUsuarioProps, PrincipalProps, CadNotaProps, MediaProps, ConNotasProps, AltNotaProps, CadCliProps, ConCliProps, InicialProps,
    Exerc1Props, Exerc2Props, CadExamProps}