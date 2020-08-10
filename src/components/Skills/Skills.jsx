import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';

import PortfolioContext from '../../context/context';

export default function Skills() {
  const { skills } = useContext(PortfolioContext);
  const { icons } = skills;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="skills-wrapper">
            <Title title="Skills" />
            <div className="icons-wrapper">{icons}</div>
          </div>
        </Fade>
      </Container>
    </section>
  );
}
