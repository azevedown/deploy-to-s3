import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.DarkBlue};

  width: 359px;
  padding: 0 55px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H2 = styled.h2`

  color: ${({ theme }) => theme.colors.GhostWhite};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  margin-bottom: 16px;
`;

const H5 = styled.h5`

  color: ${({ theme }) => theme.colors.GhostWhite};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`;


export { Wrapper, H2, H5 };