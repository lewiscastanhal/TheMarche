import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes/index'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
      <Routes/>
    </NavigationContainer>
  );
}
