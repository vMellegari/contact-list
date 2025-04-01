import styled from 'styled-components'
import { Button, cores } from '../../styles/index'

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Card = styled.div`
  background-color: ${cores.cor1};
  border-radius: 1.5rem;
  border: 1px solid ${cores.cor4};
  font-size: 1rem;
  padding: 1rem;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  color: ${cores.cor5};
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 1.5rem;
  width: 100%;
  text-align: center;

  ::placeholder {
    text-align: center;
  }
`

export const Phone = styled(TextArea)`
  margin-top: 1rem;
`
export const Email = styled(TextArea)`
  margin-bottom: 1rem;
`
export const Name = styled(TextArea)``

export const Container = styled.main`
  max-width: 1440px;
  padding: 3rem 2rem 2rem;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  h1 {
    justify-self: center;
  }
`

export const ContactList = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

  h3 {
    color: ${cores.cor4};
    justify-self: center;
  }
`

export const SearchInput = styled.input`
  background-color: ${cores.cor1};
  border-radius: 1.5rem;
  border: 1px solid ${cores.cor4};
  flex-grow: 1;
  font-size: 1rem;
  padding: 10px;
`

export const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`

export const SaveButton = styled(Button)`
  background-color: rgb(41, 151, 100, 0.1);
  color: ${cores.corSave};

  &:hover {
    background-color: rgb(41, 151, 100, 0.2);
  }
`

export const EditButton = styled(Button)`
  background-color: rgb(58, 92, 204, 0.1);
  color: ${cores.corEdit};

  &:hover {
    background-color: rgb(58, 92, 204, 0.2);
  }
`

export const CancelButton = styled(Button)`
  background-color: rgb(245, 101, 101, 0.1);
  color: ${cores.corDelete};

  &:hover {
    background-color: rgb(245, 101, 101, 0.2);
  }
`

export const DeleteButton = styled(Button)`
  background-color: rgb(245, 101, 101, 0.1);
  color: ${cores.corDelete};

  &:hover {
    background-color: rgb(245, 101, 101, 0.2);
  }
`
