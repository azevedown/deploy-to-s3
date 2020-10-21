import styled from 'styled-components';

const Wrapper = styled.div`
    height: 42px;
    background-color: ${props => props.theme.colors.Background};
    vertical-align: middle;

    ol, nav, li, a, div {
        background-color: ${props => props.theme.colors.Background};
        font-family: ${props => props.theme.fontFamily.OpenSans};
        font-size: 10px;
        font-weight: 600;
        color: ${props => props.theme.colors.Dark};
        line-height: 42px;
        margin: 0;
        padding: 0;
    }

`;

export {
    Wrapper
}
