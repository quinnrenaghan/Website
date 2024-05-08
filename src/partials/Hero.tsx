import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Quinn Renaghan</GradientText>
        </>
      }
      description={
        <> 
          I'm an undergraduate student at the University of Maryland, College Park, studying{' '}
          <a className="text-cyan-400">
            Computer Engineering
          </a>{' '}
          and sustainability. I have interests in hardware engineering, math, 
          and renewable energy. I'm skilled in C, Java, MATLAB, digital/analog circuitry,
          data analysis, embedded systems, and Python. Feel free to reach out at the links 
          below or contact me at:{' '}
          <a className="text-cyan-400">
          [first_name]@[last_name].org
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/quinnrenaghan">
            <HeroSocial
              src="/assets/images/github_icon.png"
              alt="Github icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/quinn-renaghan/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
