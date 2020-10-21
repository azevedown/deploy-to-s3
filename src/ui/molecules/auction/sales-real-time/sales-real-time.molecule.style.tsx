import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.DarkBlue};

  width: 566px;
  height: 480px;

  box-shadow: 0px 80px 80px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 150px;
  margin-top: 227px;

  button {
    margin: 0 auto;
  }
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.GhostWhite};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;

  margin: 0;
`;

const H1 = styled.h5`
  color: ${({ theme }) => theme.colors.ManheimYellow};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 150%;
  margin: 0;
`;

const H3 = styled.h5`

  color: ${({ theme }) => theme.colors.GhostWhite};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;

  padding: 0 70px;
  margin: 0 0 40px 0;
`;


export { Wrapper, H2, H1, H3 };