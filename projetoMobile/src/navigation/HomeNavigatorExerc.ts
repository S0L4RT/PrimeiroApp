import {  NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicial from "../telas/telasExerc/TelaInicial";
import TelaExerc1 from "../telas/telasExerc/TelaExerc1";
import TelaExerc2 from "../telas/telasExerc/TelaExerc2";

type RootStackParamList = {
    TelaInicial: undefined;
    TelaExerc1: undefined;
    TelaExerc2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigatorExerc = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaInicial"
            screenOptions={{headerShown: false}}>
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
        </Stack.Navigator>
    );
};

type InicialProps = NativeStackScreenProps< RootStackParamList, 'TelaInicial'>;


export default HomeNavigatorExerc

export type {InicialProps}