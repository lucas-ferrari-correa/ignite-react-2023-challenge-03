import axios from 'axios'

export interface GithubUsersAPIResponse {
  login: string
  name: string
  bio: string
  html_url: string
  followers: number
  avatar_url: string
  company: string
}

export const githubUsersAPI = axios.create({
  baseURL: 'https://api.github.com/users',
})
