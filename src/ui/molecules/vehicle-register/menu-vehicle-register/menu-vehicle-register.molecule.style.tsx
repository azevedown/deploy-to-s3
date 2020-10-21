import styled from 'styled-components';

const Span = styled.div`
  font-family: ${props => props.theme.fontFamily.Helvetica};
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.Dark};
  line-height: 22px;
  margin: 0 0 20px 0;
`;


export { Span };