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
import { useCallback, useEffect, useState } from 'react'
import {
  githubUsersAPI,
  GithubUsersAPIResponse,
} from '../../../../services/githubUsersAPI'

export function User() {
  const [user, setUser] = useState<GithubUsersAPIResponse>()

  const fetchUser = useCallback(async () => {
    const response = await githubUsersAPI.get('/lucas-ferrari-correa')

    setUser(response.data as GithubUsersAPIResponse)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  const followers =
    user?.followers === 1
      ? `${user?.followers} seguidor`
      : `${user?.followers} seguidores`

  return (
    <UserContainer>
      {user && (
        <>
          <UserAvatar src={user?.avatar_url} alt="avatar" />

          <UserContent>
            <UserProfile>
              <p>{user?.name}</p>

              <UserGithubLink href={user?.html_url}>
                <div>
                  <p>GITHUB</p>

                  <Link size={16} />
                </div>
              </UserGithubLink>
            </UserProfile>

            <UserDescription>{user?.bio}</UserDescription>

            <UserInformationWrapper>
              <UserInformation>
                <GithubLogo size={20} />

                <p>{user?.login}</p>
              </UserInformation>

              <UserInformation>
                <Buildings size={20} />

                <p>{user?.company}</p>
              </UserInformation>

              <UserInformation>
                <Users size={20} />

                <p>{followers}</p>
              </UserInformation>
            </UserInformationWrapper>
          </UserContent>
        </>
      )}
    </UserContainer>
  )
}
