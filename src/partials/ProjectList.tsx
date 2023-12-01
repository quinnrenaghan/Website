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
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Personal Website"
        description="I designed this website using Astro.js, with react and CSS. It is deployed on AWS,
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
        description="Over the last year, I've helped to collect hundreds of survey samples
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
);

export { ProjectList };
