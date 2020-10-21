import styled from 'styled-components';

interface Props {
  selected: boolean;
}

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H2 = styled.h2<Props>`
  color: ${({ theme }) => theme.colors.Dark};

  height: 79px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  
  cursor: pointer;

  ${({ selected, theme }) => selected && `
    color: ${theme.colors.KBBBlue};
    font-weight: bold;
    border-right: 6px solid ${theme.colors.Yellow};
  `}
`;


export { Wrapper, H2 as TextButton };