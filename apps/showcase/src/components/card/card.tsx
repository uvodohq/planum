import { PuzzlePieceIcon } from '@uvodohq/planum-icons'
import { CardGrid, CardIcon, CardLink, CardTitle } from './card.styles'

interface CardItemProps {
  label: string
  path?: string
}

export const Card = (props: CardItemProps) => {
  const { label, path } = props
  return (
    <CardGrid>
      <CardLink href={path}>
        <CardIcon>
          <PuzzlePieceIcon />
        </CardIcon>
        <CardTitle>{label}</CardTitle>
      </CardLink>
    </CardGrid>
  )
}

export { CardContainer, CardList } from './card.styles'
