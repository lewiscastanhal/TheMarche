import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const ViewStyled = styled(View);
const TextStyled = styled(Text);
const TextInputStyled = styled(TextInput);
const TouchableOpacityStyled = styled(TouchableOpacity);

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    //
    navigation.navigate('Home');
  };

  return (
    <ViewStyled >
      <TextStyled className={'bg-green-100'}>Login</TextStyled>
      <TextInputStyled id= "txtEmail" className=''
        style={{ height: 40, width: '80%', borderWidth: 1, marginBottom: 16, padding:10}}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInputStyled id= "txtPassword" 
        style={{ height: 40, width: '80%', borderWidth: 1, marginBottom: 16, padding:10 }}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacityStyled
        style={{ backgroundColor: 'blue', padding: 8, borderRadius: 4 }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white' }}>Entrar</Text>
      </TouchableOpacityStyled>
    </ViewStyled>
  );
};

