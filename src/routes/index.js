import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Cart from '../pages/Cart'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{
             headerShown: true
            }}
            />
            <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
                headerTitle: 'My Cart',
            }}
            />
        </Stack.Navigator>
    )
}