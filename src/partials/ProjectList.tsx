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
        name="Tree-Walking Interpreter"
        description="I wrote a tree-walking interpreter in C, which can analyze and evaluate proagrams written in
        a custom programming language. It includes support for features including booleans, integers, strings, functions,
        conditional expressions, and more."
        link="https://github.com/quinnrenaghan/simple_tree_walking_interpreter_c"
        img={{ src: '/assets/images/interpreter.png', alt: 'Interpreter' }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>C</Tags>
          </>
        }
    />
    <Project
        name="Settlers of Catan Board Generator"
        description="I used Python to create a program that generates and evaluates Settlers of Catan board set-ups.
        By grading each board on 7 metrics describing fairness and balance, the program gives the user a board
        that removes variance from the game, making for a more competitive experience."
        link="https://github.com/quinnrenaghan/catan-board-gen"
        img={{ src: '/assets/images/catanboard.png', alt: 'Catan Board' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Python</Tags>
          </>
        }
      />
      <Project
        name="Consulting - Radiation Facilities"
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
    </div>
  </Section>
);

export { ProjectList };
