import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Button = styled(TouchableOpacity)`
  background: #d20a0a;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0px 5px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 12px;
`;

const HeaderWithButtons = ({navigation}) => {
  const onBack = () => {
    navigation.navigate('Login');
  };
  const onFightersPress = () => {
    navigation.navigate('Fighters');
  };
  const onFightsPress = () => {
    navigation.navigate('Events');
  };
  const onProfilePress = () => {
    navigation.navigate('Profile');
  };
  return (
    <Header>
      <Button onPress={onBack}>
        <ButtonText>Back</ButtonText>
      </Button>
      <Button onPress={onFightersPress}>
        <ButtonText>Combattants</ButtonText>
      </Button>
      <Button onPress={onFightsPress}>
        <ButtonText>Events</ButtonText>
      </Button>
      <Button onPress={onProfilePress}>
        <ButtonText>Profile</ButtonText>
      </Button>
    </Header>
  );
};

export default HeaderWithButtons;
