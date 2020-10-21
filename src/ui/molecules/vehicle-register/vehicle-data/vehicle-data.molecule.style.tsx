import styled from 'styled-components';

const Wrapper = styled.div`
        margin: 26px 0 0 0;
    .form-row {
        margin: 21px 0 0 0;
    }
    .form-label {
        font-family: ${props => props.theme.fontFamily.Helvetica};;
        font-size: 14px;
        font-weight: bold;
        color: ${props => props.theme.colors.Dark};
        line-height: 22px;
    }
    input {
        height: 40px;
        width: 176px;
        background-color: ${props => props.theme.colors.white};
        border: 1px solid ${props => props.theme.colors.DarkGray};
        border-radius: 4px;
    }
`;
//a8aaac
// active 005ba8
export { Wrapper };