import { Row } from 'react-bootstrap';
import styled from 'styled-components';

const BoxValues = styled.div`
    min-height: 478px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.08);
    overflow: hidden;
`;

const RowContent = styled(Row)`
    padding: 30px;
`;

const DivTitle = styled.div`
    height: 58px;
    background-color: ${props => props.theme.colors.DarkBlue};
    border-radius: 10px 10px 0px 0px;
    display: flex;
    align-items: center;
    padding: 0 0 0 15px;
`;

const TextTitle = styled.span`
    font-family: ${props => props.theme.fontFamily.Helvetica};;
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
`;

const VehicleData = styled.div`
    display: inline-flex;
    align-items: center;
    min-height: 126px;
    max-width: 369px;
`;

const VehiclePicture = styled.div`
    img{
        max-height: 126px;
        max-width: 176px;
    }
`;

const VehicleContent = styled.div`
    text-align: left;
    h4 {
        height: 32px;
        font-family: ${props => props.theme.fontFamily.Helvetica};;
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.theme.colors.KBBBlue};
        line-height: 24px;
    }
    p {
        height: 46px;
        font-family: ${props => props.theme.fontFamily.Helvetica};;
        font-size: 14px;
        font-weight: bold;
        color: ${props => props.theme.colors.Dark};
        line-height: 22px;
    }

`;

const BoxSellPrice = styled.div`
    max-width: 369px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.08);
    margin: 32px auto;
    border-radius: 0px 0px 10px 10px;
    label{
        div{
            display: initial;
        }
    }
`;
const BoxSellPriceContent = styled.div`
    padding: 29px 10%;
`;

const BoxSellPriceTitle = styled.div`
    height: 47px;
    max-width: 369px;
    background-color: ${props => props.theme.colors.BlueManhein};
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    text-align: center;

    span {
        height: 22px;
        width: 206px;
        font-family: ${props => props.theme.fontFamily.Helvetica};;
        font-size: 14px;
        font-weight: bold;
        color: ${props => props.theme.colors.white};;
        margin: auto;
    }
`;

const DivPriceAdvisor = styled.div`
    height: 300px;
`;

export {
    BoxSellPrice, BoxSellPriceTitle, BoxValues, DivTitle, TextTitle, VehicleContent, VehicleData, VehiclePicture, BoxSellPriceContent, RowContent, DivPriceAdvisor
}