import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.Dark};

  height: 79px;
  padding: 0 72px;
  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  :first-child {
    color: ${({ theme }) => theme.colors.KBBBlue};
    font-weight: bold;
    border-right: 6px solid ${({ theme }) => theme.colors.Yellow};
  }
`;


export { Wrapper, H2};