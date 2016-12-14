import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;

  @media (min-width: 600px) {
      width: 85%;
  }

  @media (min-width: 992px) {
      width: 70%;
  }
`;

export default Container;

