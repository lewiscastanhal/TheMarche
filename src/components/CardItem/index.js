import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardItem({ data, addAmount }) {
   const [amount, setAmount] = useState(data?.amount)

   function handleIncrease(){
     addAmount();
     setAmount(item => item + 1)
   }
 
return (
   <View style={styles.container}>
    <View>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.price}>€ {data.price}</Text>
    </View>

    <View style={styles.amountContainer}>
      <TouchableOpacity style={styles.buttonAdd}>
         <Text>-</Text>
      </TouchableOpacity>

      <Text style={styles.amount}>{amount}</Text>

      <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
        <Text>+</Text>
       </TouchableOpacity>
   </View>

  </View>

 );
}

const styles = StyleSheet.create({
   container: {
      borderWidth: 1,
      borderColor: '#DFDFDF',
      borderRadius: 2,
      marginBottom: 14,
      padding: 8,
      backgroundColor: "#FFFFFF"
   },
   title: {
      fontWeight: 'bold',
      fontSize: 18,
   },
   price: {
      fontSize: 16,
   },
   amountContainer: {
      marginTop: 14,
      marginBottom: 14,
      flexDirection: 'row',
      alignItems: 'center',
   },
   buttonAdd: {
      backgroundColor: "#77B928",
      padding: 6,
      paddingLeft: 14,
      paddingRight: 14,
      borderRadius: 4,
   },
   amount: {
      marginLeft: 14,
      marginRight: 14,
   },
})

