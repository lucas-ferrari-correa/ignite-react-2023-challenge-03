import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  margin-top: 2rem;
  margin-inline: auto;
  margin-bottom: 2rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-label']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const SearchFormWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: space-between;
  align-items: end;
`

export const SearchFormTitle = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 150%;
`

export const SearchFormTotal = styled.p`
  color: ${(props) => props.theme['base-span']};
  font-size: 85%;

  text-align: end;
`
