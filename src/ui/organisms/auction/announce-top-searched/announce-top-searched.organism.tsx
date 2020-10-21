import React, { useState } from 'react';
import { Wrapper, CEPWrapper, Row, Col } from './announce-top-searched.organism.style'
import { Announce, CEPField, TopSearched } from '../../../molecules';

export const AnnounceTopSearched = () => {
  const [showCEP, setShowCEP] = useState(false);

  return (
    <>
      <Wrapper>
        <Row>
          <Col md={5}>
            <Announce showCEP={showCEP} toggleCEP={setShowCEP} />
          </Col>
          <Col md={1} />
          <Col md={6}>
            <TopSearched />
          </Col>
        </Row>

      </Wrapper>
      {showCEP &&
        <CEPWrapper>
          <CEPField />
        </CEPWrapper>
      }
    </>
  )
}