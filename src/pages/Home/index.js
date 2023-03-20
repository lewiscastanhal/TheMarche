import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'

export default function Home() {
    const [products, setProducts] = useState([
         {
            id: '1',
            name: "Tomatos",
            price: 0.50
        },
        {
            id: '2',
            name: "Chocolate",
            price: 6.50
        },
        {
            id: '4',
            name: "Water",
            price: 1.50
        },
        {
            id: '5',
            name: "Apples",
            price: 1.00
        },
        {
            id: '6',
            name: "Rice",
            price: 2.00
        },
    ])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Product List</Text>

                <TouchableOpacity style={styles.cartButton}>
                    <View style={styles.dot}>
                        <Text style={styles.dotText}>5</Text>
                    </View>
                    <Feather name="shopping-cart" size={30} color="#000" />
                </TouchableOpacity>
            </View>

            <FlatList
             style={styles.list}
             data={products}
             keyExtractor={(item) => String(item.id)}
             renderItem={({ item }) => <Product/>}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingEnd: 14,
        paddingStart: 14,
    },
    cartContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',      
    },
    dot:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66913D',
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText:{
        fontSize: 12,
    },
})
