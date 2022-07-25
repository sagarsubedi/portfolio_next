import React from 'react';
import { DiMongodb, DiReact } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />

    <SectionTitle main>Technologies</SectionTitle>

    <SectionText>
      I have worked with multiple modern technologies from front-end to back-end.
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React/NextJS/TailwindCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FaNodeJs size="4rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Node.js/PHP/Python/.NET
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiMongodb size="4rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br /> MongoDB/MySQL/SQLServer
          </ListParagraph>
        </ListContainer>
      </ListItem>      
    </List>
  </Section>
);

export default Technologies;
