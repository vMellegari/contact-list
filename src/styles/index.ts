import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  cor1: '#cbdad5',
  cor2: '#89a7b1',
  cor3: '#566981',
  cor4: '#3a415a',
  cor5: '#34344e',
  corSave: '#299764',
  corEdit: '#3a5ccc',
  corDelete: '#f56565'
}

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Inter";
    list-style: none;
    margin: 0;
    padding: 0;

    textarea {
      resize: none;
    }
  }
`

export const Button = styled.button`
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  font-size: 16px;
  padding: 8px;
  transition: background-color 300ms ease;
  gap: 6px;
  border: none;
`

export default GlobalStyle
