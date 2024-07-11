import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};

  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  margin: -8rem auto 0;

  border-radius: 10px;
`

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  color: ${(props) => props.theme.blue};

  div {
    display: flex;
    flex-direction: row;

    gap: 0.2rem;

    align-items: center;
    justify-content: space-between;
  }

  div:hover {
    border-bottom: 1.5px solid ${(props) => props.theme.blue};
    cursor: pointer;
  }

  div:not(:hover) {
    border-bottom: 1.5px solid transparent;
  }

  p {
    color: ${(props) => props.theme.blue};
    font-size: 75%;
  }
`

export const InfoTitle = styled.div`
  font-size: 150%;
  color: ${(props) => props.theme['base-title']};
  font-weight: 700;

  margin-top: 1rem;
`

export const InfoWrapper = styled.div`
  margin-top: 1rem;
  margin-right: 0.5rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media (max-width: 900px) {
    margin-top: 1.5rem;

    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

export const InfoProfile = styled.div`
  height: 2.5rem;

  display: flex;
  flex-direction: row;

  margin-right: 2rem;

  p {
    margin-left: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    height: 0;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`
