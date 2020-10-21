
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 15px;

  .input-group-prepend{
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 16px;
  }
  width: 1172px;
  margin: auto;
`;

const Input = styled.input`
  height: 40px;
  flex: 1;

  padding: 13px;

  box-sizing: border-box;

  border: 1px solid #DEE2E5;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  
  :focus {
    outline: none;
  }
`
const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.ManheimYellow};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 56.34px;

  border: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`


export { Wrapper, Input, SearchButton };