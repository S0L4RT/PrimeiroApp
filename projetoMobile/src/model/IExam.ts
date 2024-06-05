import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

type IExam = {
    id: string | undefined;
    nomeCliente: string,
    nome: string,
    descricao: string,
    created_at: FirebaseFirestoreTypes.FieldValue
}

export type {
    IExam
};