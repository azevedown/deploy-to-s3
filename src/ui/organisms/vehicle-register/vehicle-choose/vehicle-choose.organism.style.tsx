import { Row } from 'react-bootstrap';
import styled from 'styled-components';

const RowContent = styled(Row)`
@media (max-width: 992px)
{
    margin: 0 -15px 0 -15px;
}
    margin: 0 -15px 0 86px;
`;

const DivButtonAdvance = styled.div`
    text-align: right;
    margin: 32px 0;
`;

export { RowContent, DivButtonAdvance }