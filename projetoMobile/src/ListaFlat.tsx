import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Animal = {
    nome: string,
    especie: string,
};

let listaAnimais = [] as Animal[];

let animal1 = { nome: 'Rex', especie: 'Cachorro'} as Animal;
let animal2 = { nome: 'Mimosa', especie: 'Vaca'} as Animal;
let animal3 = { nome: 'Jorge', especie: 'Peixe'} as Animal;
let animal4 = { nome: 'Amogus', especie: 'Girino'} as Animal;

listaAnimais.push(animal1);
listaAnimais.push(animal2);
listaAnimais.push(animal3);
listaAnimais.push(animal4);

type ItemProps = {
    animal: Animal
}

const ItemLista = (props: ItemProps) => {
    return (
        <View>
            <Text style={styles.item2}>
                {props.animal.especie + ' ' + props.animal.especie}
            </Text>
        </View>
    );
};

const ListaFlat = () => {
    return (
        <>
            <FlatList
                data={listaAnimais}
                renderItem={({ item }) => 
                    <Text style={styles.item}>
                        {item.nome + ' ' + item.especie}
                    </Text>}/>

            <FlatList
                data={listaAnimais}
                renderItem={({ item}) => <ItemLista animal={item} />}/>
        </>
    )
}

const styles = StyleSheet.create ({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'green',
    },
    item2: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: 'red'
    }
});

export default ListaFlat;