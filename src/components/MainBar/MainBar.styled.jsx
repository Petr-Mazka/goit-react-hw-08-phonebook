import styled from 'styled-components';

export const Header = styled.header`
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  height: 50px;

  > nav {
    display: flex;
  }
`;

export const Container = styled.div`
  opacity: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 16px;
`;
