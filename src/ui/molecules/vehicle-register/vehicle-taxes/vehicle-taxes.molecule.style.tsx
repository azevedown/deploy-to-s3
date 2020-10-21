import styled from 'styled-components';

interface IProps {
    last?: boolean;
    value?: boolean;
}

const BoxTaxes = styled.div`
    min-height: 220px;
    margin: 0 0 34px 0;
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    .line-bottom {
        border-bottom: 1px solid ${props => props.theme.colors.Platinum};
    }
    .line-right {
        border-right: 1px solid ${props => props.theme.colors.Platinum};
    }
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

const BoxResume = styled.div`
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
`;
const BoxResumeContent = styled.div`
    min-height: 142px;
    margin: auto;
    display: flex;
    align-items: center;
`;

const BoxResumeTitle = styled.div`
    height: 47px;
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
        color: ${props => props.theme.colors.white};
        margin: auto;
    }
`;

const SubTitle = styled.div`
    font-family: ${props => props.theme.fontFamily.Helvetica};
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.DarkBlue};
`;

const Label = styled.div<IProps>`
    font-family: ${props => props.theme.fontFamily.Helvetica};
    font-style: normal;
    font-weight: ${props => props.last ? 'normal' : 'bold'};
    font-size: ${props => props.last ? '16px' : '10px'};
    line-height: ${props => props.last ? '24px' : '12px'};
    color: ${props => props.theme.colors.MediumGray};
    margin: 17px 0 6px 0;
`;

const Value = styled.div<IProps>`
    font-family: ${props => props.theme.fontFamily.Helvetica};
    font-style: normal;
    font-weight: ${props => props.last ? 'bold' : 'normal'};
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.value ? props.theme.colors.Error : props.theme.colors.DarkBlue};
`;

const WrapperContent = styled.div`
    padding: 41px 0;
`;
const Icon = styled.div`
    margin: 38px 0 0 0;
    text-align: center;
    padding: 0 0 0 45px;
`;

const FooterContent = styled.div`
    min-height: 109px;
    padding: 14px 0;
    background: rgba(255, 194, 14, 0.4);
    border-radius: 0px 0px 10px 10px;

    h2 {
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.15px;
        color: ${props => props.theme.colors.DarkBlue};
    }

    div {
        font-size: 12px;
        line-height: 20px;
        color: ${props => props.theme.colors.DarkBlue};
        display: flex;
        text-align: left;
        align-items: flex-start;

        max-width: 570px;
        margin: 0 auto;

        span {
            font-weight: bold;
            display: contents;
        }
    }
`;

const BoxAdValue = styled.div`
    width: 202px;
    height: 76px;
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.Confirm};
    color: ${props => props.theme.colors.Confirm};
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    box-sizing: border-box;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    text-align: center;
    padding: 15px;
`;

const BoxAdTaxes = styled.div`
    width: 202px;
    height: 76px;
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.Error};
    box-sizing: border-box;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    color: ${props => props.theme.colors.Error};
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding: 15px;
`;

const BoxCalc = styled.div`
    width: 232px;
    height: 76px;
    background: ${props => props.theme.colors.Confirm};
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.08);
    border-radius: 10px;

    color: ${props => props.theme.colors.white};
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    text-align: center;
    padding: 15px;
`;

export {
    BoxResume, BoxResumeContent, BoxResumeTitle, BoxTaxes, DivTitle, TextTitle, SubTitle, Label, Value, WrapperContent, Icon, FooterContent,
    BoxAdValue, BoxAdTaxes, BoxCalc
}