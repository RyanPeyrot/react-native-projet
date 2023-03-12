import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const ProfileContainer = styled.View`
  flex: 1;
  background-color: #d20a0a;
  padding: 30px 16px;
`;

const ProfileNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  margin: 8px 0;
`;

const ProfileFirstName = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  margin: 5px 5px;
`;
const ProfileNickName = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: #a4a4a4;
  margin: 9px 5px;
`;
const ProfileLastName = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  margin: 5px 5px;
`;

const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: 5px;
  border-color: #fff;
`;

const ProfileInfoContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ProfileInfoLabel = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  width: 80px;
  margin: 0 10px;
`;

const ProfileInfoValue = styled.Text`
  font-size: 20px;
  color: #fff;
  margin: 0 5px;
`;

const ProfileDescription = styled.Text`
  font-size: 20px;
  color: #fff;
  line-height: 24px;
`;

const Button = styled(TouchableOpacity)`
  margin: 10px 0 30px 0;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

const Profile = ({firstName, nickName, lastName, navigation}) => {
  return (
    <ProfileContainer>
      <Button onPress={() => navigation.goBack()}>
        <ButtonText> {'< Go back'}</ButtonText>
      </Button>
      <ProfileImage source={{uri: 'https://via.placeholder.com/150'}} />
      <ProfileNameContainer>
        <ProfileFirstName>Jon</ProfileFirstName>
        <ProfileNickName>"Bones"</ProfileNickName>
        <ProfileLastName>Jones</ProfileLastName>
      </ProfileNameContainer>
      <ProfileInfoContainer>
        <ProfileInfoLabel>Record:</ProfileInfoLabel>
        <ProfileInfoValue>26-1-0</ProfileInfoValue>
        <ProfileInfoValue>(W-L-N)</ProfileInfoValue>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <ProfileInfoLabel>Weight:</ProfileInfoLabel>
        <ProfileInfoValue>205 lbs</ProfileInfoValue>
      </ProfileInfoContainer>
      <ProfileInfoContainer>
        <ProfileInfoLabel>Height:</ProfileInfoLabel>
        <ProfileInfoValue>6' 4"</ProfileInfoValue>
      </ProfileInfoContainer>
      <ProfileDescription>
        Jon Jones is widely regarded as one of the greatest mixed martial
        artists of all time. He was the UFC Light Heavyweight Champion from 2011
        to 2019, and he has a professional record of 26 wins and 1 loss. Jones
        is known for his dynamic striking and his ability to control fights both
        on the feet and on the ground.
      </ProfileDescription>
    </ProfileContainer>
  );
};

export default Profile;
