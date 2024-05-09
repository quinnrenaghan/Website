import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const FullProjectList = () => (
<div>
  <Section title={
    <div className="flex items-baseline justify-between">
      <div>
        <GradientText>2024</GradientText>
      </div>
    </div>
  }>
    <div className="flex flex-col gap-6">
    <Project
        name="Consulting - Radiation Facilities Detector Tracking"
        description="I consulted with UMD Radiation Facilities to improve their radiation
        detector tracking process. The recommendations will eliminate losing or misplacing detectors, 
        saving the department approximately $6,000 annually."
        link="/radiationfacilities/"
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
    </div>
  </Section>
  <Section title={
    <div className="flex items-baseline justify-between">
      <div>
        <GradientText>2023</GradientText>
      </div>
    </div>
  }>
    <div className="flex flex-col gap-6">
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
      <Project
        name="Jurisprudence Article Scraping - RSS Feed"
        description="I often use an RSS Feed reader to easily stay up to date with
        my favorite websites. So, I coded python scripts to scrape article data, and 
        format it into a json feed."
        link="https://github.com/quinnrenaghan/webpage-jsonfeed"
        img={{ src: '/assets/images/rss_feed.png', alt: 'RSS Feed' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Python</Tags>
            <Tags color={ColorTags.EMERALD}>AWS Lambda</Tags>
            <Tags color={ColorTags.YELLOW}>BeautifulSoup4</Tags>
          </>
        }
      />
      <Project
        name="Climate Activist Data Analysis"
        description="Over the last year, I've helped to analyze hundreds of survey samples
        from climate activists at various marches, rallies, and demonstrations. In this article,
        Dr. Fisher and I present our findings."
        link="https://www.brookings.edu/articles/understanding-the-growing-radical-flank-of-the-climate-movement-as-the-world-burns/"
        img={{ src: '/assets/images/climate_article.png', alt: 'Climate Activist' }}
        category={
          <>
            <Tags color={ColorTags.CYAN}>Research</Tags>
            <Tags color={ColorTags.INDIGO}>Visone</Tags>
            <Tags color={ColorTags.PINK}>Data Analysis</Tags>
          </>
        }
      />
    </div>
  </Section>
  </div>
);

export { FullProjectList };
