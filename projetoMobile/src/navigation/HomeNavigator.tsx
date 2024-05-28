import {  NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "../telas/TelaLogin";
import TelaCadUsuario from "../telas/TelaCadUsuario";
import TelaPrincipal from "../telas/TelaPrincipal";
import TelaCadNota from "../telas/TelaCadNota";
import TelaMed from "../telas/TelaMed";
import TelaConNotas from "../telas/TelaConNota";
import TelaAltNota from "../telas/TelaAltNota";





type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
    TelaCadNota: undefined;
    TelaMed: undefined;
    TelaConNotas: undefined
    TelaAltNota: {id: string}
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

export default HomeNavigator;

export type {LoginProps, CadUsuarioProps, PrincipalProps, CadNotaProps, MediaProps, ConNotasProps, AltNotaProps}