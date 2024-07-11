import {
  SearchFormContainer,
  SearchFormTitle,
  SearchFormTotal,
  SearchFormWrapper,
} from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormWrapper>
        <SearchFormTitle>Publicações</SearchFormTitle>

        <SearchFormTotal>32 publicações</SearchFormTotal>
      </SearchFormWrapper>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
