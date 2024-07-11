import { GithubLogo, Buildings, Users, Link } from 'phosphor-react'
import {
  UserAvatar,
  UserContainer,
  UserContent,
  UserDescription,
  UserGithubLink,
  UserInformation,
  UserInformationWrapper,
  UserProfile,
} from './styles'

export function User() {
  return (
    <UserContainer>
      <UserAvatar
        src={'https://github.com/lucas-ferrari-correa.png'}
        alt="avatar"
      />

      <UserContent>
        <UserProfile>
          <p>Lucas Ferrari Corrêa</p>

          <UserGithubLink>
            <div>
              <p>GITHUB</p>

              <Link size={16} />
            </div>
          </UserGithubLink>
        </UserProfile>

        <UserDescription>
          Sou daora Sou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou daoraSou
          daoraSou daora
        </UserDescription>

        <UserInformationWrapper>
          <UserInformation>
            <GithubLogo size={20} />

            <p>lucas-ferrari-correa</p>
          </UserInformation>

          <UserInformation>
            <Buildings size={20} />

            <p>@growthventure</p>
          </UserInformation>

          <UserInformation>
            <Users size={20} />

            <p>32 seguidores</p>
          </UserInformation>
        </UserInformationWrapper>
      </UserContent>
    </UserContainer>
  )
}
