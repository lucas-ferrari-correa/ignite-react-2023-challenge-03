import { Issues } from './components/Issues'
import { SearchForm } from './components/SearchForm'
import { User } from './components/User'

export function Blog() {
  return (
    <>
      <User />
      <SearchForm />

      <Issues />
    </>
  )
}
