import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Projects</GradientText>
        </div>

        <div className="text-sm">
          <a href="/projects/">View all Projects →</a>
        </div>
      </div>
    }
  >
    <div className="flex flex-col gap-6">
    <Project
        name="Consulting - Radiation Facilities Detector Tracking"
        description="I consulted with UMD Radiation Facilities to improve their radiation
        detector tracking process. The recommendations will eliminate losing or misplacing detectors, 
        saving the department approximately $6,000 annually."
        link="/rhythmradiance/"
        img={{ src: '/assets/images/radiation.png', alt: 'Radiation' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Consulting</Tags>
            <Tags color={ColorTags.PINK}>Data Analysis</Tags>
          </>
        }
      />
    <Project
        name="Innovative Design - Rhythm Radiance Lightbulb"
        description="I created Rhythm Radiance, an original automatically
        adjusting lightbulb, which increases productivity and saves energy. I
        utilized skills including design thinking, prototyping, teamwork, 
        C++, arduino, and circuitry."
        link="/rhythmradiance/"
        img={{ src: '/assets/images/lightbulb.png', alt: 'Lightbulb' }}
        category={
          <>
            <Tags color={ColorTags.AMBER}>C++</Tags>
            <Tags color={ColorTags.SLATE}>Arduino</Tags>
            <Tags color={ColorTags.GREEN}>Analog Circuitry</Tags>
          </>
        }
      />
      <Project
        name="Personal Website"
        description="I designed this website using Astro.js, with react and CSS. It is deployed on Netlify,
        and serves as a place where I can share my projects."
        link="/"
        img={{
          src: '/assets/images/website_design.png',
          alt: 'Website Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.STONE}>React</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
