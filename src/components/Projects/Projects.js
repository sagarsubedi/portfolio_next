import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Image from 'next/image';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />

    <SectionTitle main>Projects</SectionTitle>

    <GridContainer>
      {projects.map(
        (project) => (
          <BlogCard key={project.id}>
            <Image src={project.image} alt={project.title} width={400} height={ 200} />
            <TitleContent>
              <HeaderThree title>{project.title}</HeaderThree>
              <Hr />
            </TitleContent>

            <CardInfo>{project.description}</CardInfo>
            
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map(
                  (tag, i) => (
                    <Tag key={i}>{ tag}</Tag>
                  )
                )}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={ project.source}>Source</ExternalLinks>
              <ExternalLinks href={ project.visit}>Visit</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  
  </Section>
);

export default Projects;