import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
<Section>
    <NavbarTwoColumns>
      <a href="/">
      </a>

      <NavMenu>
        
        <NavMenuItem href="/">Home </NavMenuItem>
        <NavMenuItem href="/posts/">Posts</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
