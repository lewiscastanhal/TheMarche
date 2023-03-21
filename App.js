import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'
import CartProvider from './src/pages/Cart'

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
        <Routes/>
      </CartProvider>
    </NavigationContainer>
  );
}