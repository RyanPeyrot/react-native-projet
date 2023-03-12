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
  height: 200px;
`;

const CardContent = styled.View`
  padding: 16px;
`;

const CardName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
`;

const CardWeight = styled.Text`
  font-size: 14px;
  color: #000;
`;

const Card = ({image, name, weight}) => {
  return (
    <CardContainer>
      <CardImage source={{uri: image}} />
      <CardContent>
        <CardName>{name}</CardName>
        {weight && <CardWeight>{weight}</CardWeight>}
      </CardContent>
    </CardContainer>
  );
};

export default Card;
