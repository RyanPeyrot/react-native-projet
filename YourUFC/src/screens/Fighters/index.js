import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import styled from 'styled-components/native';
import ufcServices from '../../services/ufcServices';

const TopView = styled.SafeAreaView`
  background: #fff;
`;

const PageContainer = styled.SafeAreaView`
  flex: 1;
  background: #d20a0a;
`;

const Container = styled.View`
  flex: 1;
  backgroundrr: #d20a0a;
`;

const Title = styled.Text`
  color: #fff;
  margin: 20px auto;
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline #fff;
`;

const Fighters = ({navigation}) => {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    ufcServices.getAllFighters().then(res => {
      console.log(res.rankings[0].competitor_rankings);
      setFighters(res.rankings[0].competitor_rankings);
    });
  }, []);

  const Fighter = ({fighter}) => (
    <Card name={fighter.competitor.name} rank={fighter.rank} />
  );

  return (
    <>
      <TopView />
      <PageContainer>
        <Header navigation={navigation} />
        <Container>
          <Title>Pound for pound</Title>
          <FlatList
            initialNumToRender={15}
            data={fighters}
            renderItem={({item}) => <Fighter fighter={item} />}
            keyExtractor={item => item.id}
          />
        </Container>
      </PageContainer>
    </>
  );
};

export default Fighters;
