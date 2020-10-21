import React, {useState} from 'react';
import { Wrapper, Title, Subtitle, Row, Col } from './faq.organism.style';
import { FAQTabs, FAQItem } from '../../../molecules';
import { useTranslation } from 'react-i18next';

export const FAQ = () => {
  const { t } = useTranslation();
  const [ selected, setSelected ] = useState(0);

  return (
    <Wrapper>
      <Title>
        {t('questions products services')}
      </Title>
      <Subtitle>
        {t('find your answers')}
      </Subtitle>

      <FAQTabs selected={selected} setSelected={setSelected} />

      <Row>
        <Col md={6}>
          <FAQItem text="lorem ipsum large" title="lorem ipsum small" />
          <FAQItem text="lorem ipsum large" title="lorem ipsum small" />
          <FAQItem text="lorem ipsum large" title="lorem ipsum small" />
        </Col>
        <Col md={6}>
          <FAQItem text="lorem ipsum large" title="lorem ipsum small" />
          <FAQItem text="lorem ipsum large" title="lorem ipsum small" />
          <FAQItem text="lorem ipsum large" title="lorem ipsum small" />
        </Col>
      </Row>
    </Wrapper>
  )
}