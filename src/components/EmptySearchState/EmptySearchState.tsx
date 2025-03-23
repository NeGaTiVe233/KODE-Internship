import { EmptyContainer, EmptyIcon, EmptyTitle, EmptyMessage } from "./EmptySearchState.styles"

const EmptySearchState = () => {
  return (
    <EmptyContainer>
      <EmptyIcon>
        <img src="/search-page.svg" width="56" height="56" alt="Пустой результат поиска" />
      </EmptyIcon>
      <EmptyTitle>Мы никого не нашли</EmptyTitle>
      <EmptyMessage>Попробуй скорректировать запрос</EmptyMessage>
    </EmptyContainer>
  )
}

export default EmptySearchState

