import React from 'react';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  flex: 1;
  margin: 8px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  width: 100%;
`;

const CardContent = styled.View`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const CardName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
`;

const CardDate = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;

const Card = React.memo(({name, date}) => {
  return (
    <CardContainer>
      <CardContent>
        <CardName>{name}</CardName>
        <CardDate>{date}</CardDate>
      </CardContent>
    </CardContainer>
  );
});

export default Card;
