import styled from 'styled-components'

export const UserContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};

  width: 100%;
  padding: 2rem;

  display: flex;
  margin: -8rem auto 0;

  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const UserAvatar = styled.img`
  box-sizing: initial;
  width: 10rem;
  height: 100%;
  border-radius: 10px;

  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const UserContent = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 2rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`

export const UserProfile = styled.div`
  padding-top: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-size: 150%;
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
  }
`

export const UserGithubLink = styled.a`
  padding-top: 0.5rem;
  width: 4rem;

  text-decoration: none;

  color: ${(props) => props.theme.blue};

  div {
    display: flex;
    flex-direction: row;

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

export const UserDescription = styled.p`
  width: 100%;
  min-height: 5rem;
  height: 100%;

  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-text']};

  @media (max-width: 768px) {
    text-align: center;
    height: 100%;
  }
`

export const UserInformationWrapper = styled.div`
  margin-top: 0.75rem;
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

export const UserInformation = styled.div`
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
