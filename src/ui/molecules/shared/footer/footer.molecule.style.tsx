import styled from 'styled-components';

const Wrapper = styled.div`
  height: 133px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.DarkBlue};
  border-top: 1px solid ${({ theme }) => theme.colors.white};
`;

const LinksWrapper = styled.div`
  height: 80px;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Container = styled.div`
  height: 100%;
  max-width: 1116px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Roboto};
  
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;

  color: ${({ theme }) => theme.colors.white};

  margin: 0;

  text-align: right;

  span {
    font-family: ${({ theme }) => theme.fontFamily.Default};

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    
    padding-left: 30px;

    svg {
      margin-right: 10px;
    }
  }
` 

export {
  Wrapper,
  Text,
  LinksWrapper,
  Container
}
