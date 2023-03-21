import { View, Text, StyleSheet } from 'react-native';

export default function Product ({data}){
    return(
        <View style={styles.container}>
            <View>
                <Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#DFDFDF",
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingBottom:  14,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
})