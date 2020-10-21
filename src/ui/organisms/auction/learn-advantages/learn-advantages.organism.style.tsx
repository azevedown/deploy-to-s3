import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};

  max-width: 1440px;
  
  display: flex;
  justify-content: center;

  padding-top: 140px;
  margin: auto;

  position: relative;
  height: 848px;
`;


export { Wrapper }