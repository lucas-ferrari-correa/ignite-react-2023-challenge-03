import {
  CalendarCheck,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Link,
} from 'phosphor-react'
import {
  InfoContainer,
  InfoHeader,
  InfoProfile,
  InfoTitle,
  InfoWrapper,
  LinkGithub,
  LinkRouter,
} from './styles'
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'

interface Props {
  title: string | undefined
  login: string | undefined
  createdAt: string | undefined
  comments: number | undefined
  url: string | undefined
}

export function Info({ title, login, createdAt, comments, url }: Props) {
  const formatComments =
    comments === 1 ? `${comments} comentário` : `${comments} comentários`

  return (
    <InfoContainer>
      <InfoHeader>
        <LinkRouter to={'/'}>
          <div>
            <CaretLeft size={20} />

            <p>VOLTAR</p>
          </div>
        </LinkRouter>

        <LinkGithub href={url}>
          <div>
            <p>VER NO GITHUB</p>
            <Link size={16} />
          </div>
        </LinkGithub>
      </InfoHeader>

      <InfoTitle>{title}</InfoTitle>

      <InfoWrapper>
        <InfoProfile>
          <GithubLogo size={20} />

          <p>{login}</p>
        </InfoProfile>

        <InfoProfile>
          <CalendarCheck size={20} />

          <p>
            {formatDistanceToNow(createdAt ? new Date(createdAt) : new Date(), {
              addSuffix: true,
              locale: ptBR,
            })}
          </p>
        </InfoProfile>

        <InfoProfile>
          <ChatCircle size={20} />

          <p>{formatComments}</p>
        </InfoProfile>
      </InfoWrapper>
    </InfoContainer>
  )
}
