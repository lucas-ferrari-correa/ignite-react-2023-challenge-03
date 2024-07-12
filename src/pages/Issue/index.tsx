import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Description } from './components/Description'
import { Info } from './components/Info'
import {
  githubIssueAPI,
  GithubIssueAPIResponse,
} from '../../services/githubIssueAPI'

export function Issue() {
  const { issueNumber } = useParams()

  const [issue, setIssue] = useState<GithubIssueAPIResponse>()

  const fetchIssue = useCallback(async (issueNumber: string) => {
    const response = await githubIssueAPI.get(
      `/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`,
    )

    setIssue(response.data as GithubIssueAPIResponse)
  }, [])

  useEffect(() => {
    if (issueNumber) {
      fetchIssue(issueNumber)
    }
  }, [fetchIssue, issueNumber])

  return (
    <>
      <Info
        login={issue?.user.login}
        comments={issue?.comments}
        createdAt={issue?.created_at}
        title={issue?.title}
        url={issue?.html_url}
      />
      <Description body={issue?.body} />
    </>
  )
}
