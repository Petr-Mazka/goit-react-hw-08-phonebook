import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 1400px;
  height: 800px;
  display: block;
  margin: 25px auto;
  border-radius: 8px;
  box-shadow: 19px 27px 67px 13px rgba(1, 1, 1, 1);
  padding: 30px;
  background-color: #06452c;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
