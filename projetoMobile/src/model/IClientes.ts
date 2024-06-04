import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

type IClientes = {
    id: number | undefined,
    nome: string,
    cpf: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
    num: string,
    dataNasc: string,
    created_at: FirebaseFirestoreTypes.FieldValue
}

export type {
    IClientes
};