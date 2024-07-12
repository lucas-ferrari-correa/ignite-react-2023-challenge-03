import ReactMarkdown from 'react-markdown'
import { DescriptionContainer } from './styles'

interface Props {
  body: string | undefined
}

export function Description({ body }: Props) {
  return (
    <DescriptionContainer>
      <ReactMarkdown>{body}</ReactMarkdown>
    </DescriptionContainer>
  )
}
