import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const IssuesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;

  margin-bottom: 2rem;

  @media (max-width: 950px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`

export const Issue = styled(Link)`
  text-decoration: none;

  border-radius: 10px;

  display: flex;
  flex-direction: column;

  padding: 2rem;
  margin-bottom: 2rem;

  width: 48%;
  height: 16.25rem;

  background: ${(props) => props.theme['base-post']};

  @media (max-width: 950px) {
    width: 100%;
  }
`

export const IssueProfile = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  width: 100%;

  span {
    max-width: 80%;
    font-size: 125%;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 90%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const IssueDescription = styled.p`
  margin-top: 2rem;

  color: ${(props) => props.theme['base-text']};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
