import { createContext } from 'use-context-selector'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import {
  githubSearchAPI,
  GithubSearchAPIResponse,
  Issue,
} from '../services/githubSearchAPI'

interface IssuesProviderProps {
  children: ReactNode
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async (query?: string) => {
    console.log(query)

    const response = await githubSearchAPI.get('', {
      params: {
        q: `${query ?? ''}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
      },
    })

    console.log(response.data)

    setIssues((response.data as GithubSearchAPIResponse).items as Issue[])
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        fetchIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
