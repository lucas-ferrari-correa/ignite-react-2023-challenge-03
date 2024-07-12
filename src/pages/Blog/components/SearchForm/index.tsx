import { useContextSelector } from 'use-context-selector'
import {
  SearchFormContainer,
  SearchFormTitle,
  SearchFormTotal,
  SearchFormWrapper,
} from './styles'
import { IssuesContext } from '../../../../context/IssuesContext'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const [fetchIssues, issues] = useContextSelector(IssuesContext, (context) => {
    return [context.fetchIssues, context.issues]
  })

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  const total =
    issues.length === 1
      ? `${issues.length} publicação`
      : `${issues.length} publicações`

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <SearchFormWrapper>
        <SearchFormTitle>Publicações</SearchFormTitle>

        <SearchFormTotal>{total}</SearchFormTotal>
      </SearchFormWrapper>

      <input
        type="input"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
