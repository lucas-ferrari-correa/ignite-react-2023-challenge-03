import { useContextSelector } from 'use-context-selector'
import {
  Issue,
  IssueDescription,
  IssueProfile,
  IssuesContainer,
} from './styles'
import { IssuesContext } from '../../../../context/IssuesContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

export function Issues() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  return (
    <IssuesContainer>
      {issues &&
        issues.map((issue) => {
          return (
            <Issue to={`/issue/${issue?.number}`} key={issue.id}>
              <IssueProfile>
                <span>{issue.title}</span>
                <p>
                  {formatDistanceToNow(
                    issue.created_at ? new Date(issue.created_at) : new Date(),
                    {
                      addSuffix: true,
                      locale: ptBR,
                    },
                  )}
                </p>
              </IssueProfile>

              <IssueDescription>
                <ReactMarkdown>{issue.body}</ReactMarkdown>
              </IssueDescription>
            </Issue>
          )
        })}
    </IssuesContainer>
  )
}
