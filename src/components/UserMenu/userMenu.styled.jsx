import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  margin-left: 10px;
  border-radius: 5px;
  padding: 0px 10px;
  height: 45px;
  cursor: pointer;
  border: none;
  background-color: #0db87f;
  font-weight: 700;

  &:hover {
    background-color: #fff;
  }
`;

export const WelcomeText = styled.p`
  color: #fff;
  font-weight: 700;
`;