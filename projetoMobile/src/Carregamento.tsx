import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";

type CarregamentoProps = {
    isCarregando: boolean;
}

const Carregamento = (props: CarregamentoProps) => {
    return (
        <Modal
            visible={props.isCarregando}
            transparent={false}>
                <View style={styles.container}>
                    <ActivityIndicator size="large"/>
                </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Carregamento;