import styled from 'styled-components';

export const HomeWrapper = styled.section`
  width: 1000px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 19px 27px 67px 13px rgba(0, 0, 0, 0.57);
  padding: 30px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Section = styled.section`
  margin: 10px auto;
`;
export const Header1 = styled.h2`
  margin: 20px auto;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
`;

export const Header2 = styled.h2`
  margin: 20px auto;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
`;

export const Suggest = styled.p`
  margin: 20px auto;
  text-align: center;
  font-size: 20px;
  color: #05361e;
  text-shadow: 1px 1px 1px #000000;
`;

export const ListEl = styled.li`
  font-size: 20px;
  font-weight: 400;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  margin-bottom: 30px;
  margin-top: 40px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const HomeText = styled.p`
  text-align: center;
`;