import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;

  background-color: ${({ theme }) => theme.colors.white};
  width: 335px;
  height: 348px;

  box-shadow: 0px 8px 80px rgba(0, 0, 0, 0.07);
  border-radius: 10px;

  margin: 0 6px;
  padding: 0 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.DarkBlue};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  margin: 0 0 25px 0;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.Dark};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  margin: 0 0 12px 0;
`;

const H5 = styled.h5`
  color: ${({ theme }) => theme.colors.Dark};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`;

export { Wrapper, H2, H3, H5 };
