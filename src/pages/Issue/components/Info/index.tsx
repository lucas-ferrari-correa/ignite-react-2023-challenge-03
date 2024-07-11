import { Buildings, CaretLeft, GithubLogo, Link, Users } from 'phosphor-react'
import {
  InfoContainer,
  InfoHeader,
  InfoProfile,
  InfoTitle,
  InfoWrapper,
} from './styles'

export function Info() {
  return (
    <InfoContainer>
      <InfoHeader>
        <div>
          <CaretLeft size={20} />

          <p>VOLTAR</p>
        </div>

        <div>
          <p>VER NO GITHUB</p>
          <Link size={16} />
        </div>
      </InfoHeader>

      <InfoTitle>JavaScript data types and data structures</InfoTitle>

      <InfoWrapper>
        <InfoProfile>
          <GithubLogo size={20} />

          <p>lucas-ferrari-correa</p>
        </InfoProfile>

        <InfoProfile>
          <Buildings size={20} />

          <p>@growthventure</p>
        </InfoProfile>

        <InfoProfile>
          <Users size={20} />

          <p>32 seguidores</p>
        </InfoProfile>
      </InfoWrapper>
    </InfoContainer>
  )
}
