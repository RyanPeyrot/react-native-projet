import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';

const Fighters = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} />
      <Card
        image={
          'https://www.shutterstock.com/image-photo/mixed-martial-artist-posing-on-black-1687955275'
        }
        name="Ryan"
        weight="70kg"
      />
    </SafeAreaView>
  );
};

export default Fighters;
