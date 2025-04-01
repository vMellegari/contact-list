import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const Btn = styled(Link)`
  align-items: center;
  background-color: ${cores.cor1};
  border-radius: 1.5rem;
  border: 1px solid ${cores.cor4};
  color: ${cores.cor5};
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  gap: 0.25rem;
  height: 3rem;
  padding: 0.25rem 0.75rem;
  transition: background-color 300ms ease;

  &:hover {
    background-color: ${cores.cor2};
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`
