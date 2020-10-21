import { Modal } from "react-bootstrap";
import styled from "styled-components";

const ModalBody = styled.div`
  background-color: ${(props) => props.theme.colors.Background};
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0 60px 50px 60px;
  border-radius: 5px;
`;

const Icon = styled.div`
  margin: 0 0 15px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.DarkBlue};
  text-align: center;
  line-height: 28px;
  margin: 0;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const ModalHeader = styled(Modal.Header)`
  background: ${(props) => props.theme.colors.Background};
  border: none;
  height: 50px;
  justify-content: flex-end;
  padding: 10px 16px 0;
  span {
    font-size: 30px;
    font-weight: normal;
  }
  button {
    padding: 0;
    margin: 0;
    opacity: 1;
  }
`;

const ContentModalMsg = styled.div`
  color: ${(props) => props.theme.colors.Dark};
  text-align: center;
  margin: 10px 0 20px 0;
`;

export { ModalBody, Title, Icon, Content, ModalHeader, ContentModalMsg };
