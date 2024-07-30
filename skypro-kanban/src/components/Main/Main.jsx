import React from 'react';
import Column from '../Column/Column';
import { MainWrapper, MainBlock, MainContent } from './MainStyles';
import styled from 'styled-components';
import { containerStyles } from "../../styles/CommonStyles";

const Container = styled.div`
  ${containerStyles}
`;

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function Main({ cards }) {
  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                tasks={cards.filter((card) => card.status.toLowerCase() === status.toLowerCase())}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
}

export default Main;