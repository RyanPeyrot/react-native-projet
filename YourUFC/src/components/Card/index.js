import React from 'react';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  flex: 1;
  margin: 8px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 100px;
`;

const CardContent = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px;
`;

const CardName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
`;

const CardWeight = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  //height: 200px;
`;

const Card = ({image, name, rank}) => {
  return (
    <CardContainer>
      <CardImage source={{uri: image}} />
      <CardContent>
        <CardName>{name}</CardName>
        <CardWeight>{rank}</CardWeight>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
