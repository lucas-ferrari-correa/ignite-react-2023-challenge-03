import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: url('/src/assets/banner.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  /* width: 100%; */

  height: 18rem;

  padding: 2.5rem 0 5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
