import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AccomplishmentsData } from '../../constants/constants';

const Acomplishments = () => (
  <Section id="about">
    <SectionDivider />

    <SectionTitle main>Accomplishments</SectionTitle>

    <Boxes>
      {AccomplishmentsData.map(
        (card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{ card.text}</BoxText>
          </Box>
        )
      )}
    </Boxes>
  </Section>
);

export default Acomplishments;
