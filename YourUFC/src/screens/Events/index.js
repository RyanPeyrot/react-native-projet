import React, {useEffect, useState} from 'react';
import ufcServices from '../../services/ufcServices';
import Header from '../../components/Header';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import CardSeasons from '../../components/CardSeasons';

const TopView = styled.SafeAreaView`
  background: #fff;
`;

const PageContainer = styled.SafeAreaView`
  flex: 1;
  background: #d20a0a;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background: #d20a0a;
`;

const Title = styled.Text`
  color: #fff;
  margin: 20px auto;
  font-size: 25px;
  font-weight: bold;
  text-decoration: underline #fff;
`;

const Event = ({event}) => (
  <CardSeasons name={event.name} date={event.start_date} />
);

const Events = ({navigation}) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    ufcServices.getSeasons().then(res => {
      // console.log(res.seasons.length);

      setEvents(res.seasons.splice(0, 20));
    });
  }, []);

  return (
    <>
      <TopView />
      <PageContainer>
        <Header navigation={navigation} />
        {/*<Container>*/}
        <Title>Pound for pound</Title>
        {/*{events != null && (*/}
        <FlatList
          initialNumToRender={20}
          keyExtractor={item => item.id}
          data={events}
          renderItem={({item}) => <Event event={item} />}
        />
        {/*)}*/}
        {/*</Container>*/}
      </PageContainer>
    </>
  );
};

export default Events;
