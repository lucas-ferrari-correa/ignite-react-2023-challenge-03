import axios from 'axios'

export interface GithubIssueAPIResponse {
  html_url: string
  id: number
  node_id: string
  title: string
  created_at: string
  number: number
  comments: number
  body: string
  user: {
    login: string
  }
}

export const githubIssueAPI = axios.create({
  baseURL: 'https://api.github.com/repos',
})
