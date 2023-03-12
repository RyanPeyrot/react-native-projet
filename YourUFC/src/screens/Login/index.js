import React, {useState} from 'react';
import styled from 'styled-components/native';
import UFCLogo from '../../components/UFCLogo';

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 150px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Input = styled.TextInput`
  height: 40px;
  width: 80%;
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.TouchableOpacity`
  padding: 12px;
  background-color: #007aff;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const ErrorMessage = styled.Text`
  color: red;
  margin-bottom: 16px;
`;

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // TODO: Ajouter une api de connexion
    console.log('Username:', username);
    console.log('Password:', password);
    setErrorMessage('ERROR');
    navigation.navigate('Home');
  };

  return (
    <Container>
      <UFCLogo />
      <Title>Bienvenue sur Your UFC</Title>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
      <Input
        placeholder="Nom d'utilisateur"
        onChangeText={setUsername}
        value={username}
      />
      <Input
        placeholder="Mot de passe"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Se connecter</ButtonText>
      </Button>
    </Container>
  );
};

export default Login;
