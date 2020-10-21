import styled from 'styled-components';

const Wrapper = styled.div`
  height: 63px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.DarkBlue};
`;

const Container = styled.div`
  height: 100%;
  max-width: 1216px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`;

export {
  Wrapper,
  Container
}
