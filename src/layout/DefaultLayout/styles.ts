import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 87.5%;
    grid-template-columns: 1fr;
  }
`

export const LayoutContent = styled.div`
  width: 80%;
  margin-inline: auto;
`
