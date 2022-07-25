import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LinkItem } from '../Footer/FooterStyles';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There<br />
        Welcome to my site...
      </SectionTitle>

      <SectionText main center>
        I am a software engineer/web developer with a passion for security.
      </SectionText>

      <Button>
        <a href="resume.docx" download style={{color: "white"}}>Download Resume</a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;