import axios from 'axios'

export interface Issue {
  html_url: string
  id: number
  node_id: string
  title: string
  created_at: string
  number: number
  body: string
}

export interface GithubSearchAPIResponse {
  total_count: number
  items: Array<Issue>
}

export const githubSearchAPI = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})
