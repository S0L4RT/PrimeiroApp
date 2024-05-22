import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";

const ScrollImage = () => {
    return(
        <View style={styles.container}>
            <ScrollView >
            <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.image}
                />
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.image}
                />
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.image}
                />
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.image}
                />
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.image}
                />
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.image}
                />
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.image}
                />
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.image}
                />
                <Image
                    source={{
                        uri: 'https://encurtador.com.br/nvQ19'
                    }}
                    style={styles.image}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        borderRadius: 45,
        flex: 1,
        left: 45
    },
    container: {
        backgroundColor: '#000',
    }
})

export default ScrollImage;