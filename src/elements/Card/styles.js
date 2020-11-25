import styled from 'styled-components'
import { layout, flexbox, space } from 'styled-system'

export const Container = styled.div`
  background: transparent;
  background-blend-mode: overlay;
  padding: 2rem 1.6rem;
  font-size: 2rem;

  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  ${layout};
  ${flexbox};
  ${space};

  &:hover {
    /* transform: translate(1px, 4px); */
  }
`
