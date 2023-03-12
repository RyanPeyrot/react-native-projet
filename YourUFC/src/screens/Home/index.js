import React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components/native';
import ufcServices from '../../services/ufcServices';

const AppContainer = styled.SafeAreaView`
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  background: cornflowerblue;
  padding: 20px;
  width: 300px;
  margin: 20px auto;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

const BodyContainer = styled.View`
  flex: 1;
  margin-top: 100px;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
`;

const Title = styled.Text`
  font-size: 44px;
  font-weight: bold;
  margin: 16px 0;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  margin-bottom: 16px;
`;

const Home = ({navigation}) => {
  const testNotif = () => {};
  return (
    <AppContainer>
      <Header navigation={navigation} />
      <BodyContainer>
        <Title>Your UFC</Title>
        <Subtitle>
          Bienvenue dans votre application pour suivre toute les donnée des
          combattants et des évennement UFC.
        </Subtitle>
        <Subtitle>
          Deplacer vous dans l'application grace au header prevu a cette effet
        </Subtitle>
        <Button onPress={testNotif}>
          <ButtonText>Test Notification</ButtonText>
        </Button>
      </BodyContainer>
    </AppContainer>
  );
};

export default Home;
