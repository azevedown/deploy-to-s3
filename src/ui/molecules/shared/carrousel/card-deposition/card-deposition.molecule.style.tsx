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

  position: relative;
`;

const StarWrapper = styled.div`
  margin: 0 auto 21px;

  display: flex;
  
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 109px;
  height: 109px;

  border: 10px solid ${({ theme }) => theme.colors.DarkBlue};
  border-radius: 100px;

  position: absolute;
  top: 0px;
  left: calc(50% - (109px/2));
  transform: translateY(-60%);
`

const Name = styled.h3`
  color: ${({ theme }) => theme.colors.Dark};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;

  margin: 0 ;
`;

const Profession = styled.h5`
  color: ${({ theme }) => theme.colors.Dark};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 15px;

  text-align: center;
  opacity: 0.6;
`;

const Description = styled.h5`
  color: ${({ theme }) => theme.colors.Dark};

  font-family: ${({ theme }) => theme.fontFamily.Default};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 30px;
  text-align: center;
`;



export { Wrapper, Name, Profession, Description, StarWrapper, Image };
