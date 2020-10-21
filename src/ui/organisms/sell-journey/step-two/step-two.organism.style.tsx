import styled from 'styled-components';
import { Svg } from 'c4u-web-components';

const Wrapper = styled.div`
  max-width: 1212px;
  margin: auto;
`;

const SvgStyled = styled(Svg)`
  height: 180px;
`

const SmallHeading = styled.h3`
  font-family: ${props => props.theme.fontFamily.Helvetica};

  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.MediumGray};
  line-height: 20px;
`

const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.Helvetica};
  
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.DarkBlueManhein};
  line-height: 24px;
`

const Description = styled.p`
  font-family: ${props => props.theme.fontFamily.Helvetica};

  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.MediumGray};
  line-height: 28px;

  margin: 33px 0 71px 0;

  white-space: pre-line;
`

export { Wrapper, SvgStyled as Svg, SmallHeading, Title, Description }