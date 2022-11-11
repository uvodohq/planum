import { AnimatePresence, motion } from 'framer-motion'

import { Tag } from '../tag'
import { styled } from '../theme'
import type { Item, UseTagListProps } from './use-tag-list'
import { useTagList } from './use-tag-list'

const Container = styled('div', {
  overflow: 'hidden',
})

const StyledList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  mt: -8,
  mr: -8,
})

const StyledListItem = styled(motion.li, {
  mr: 8,
  mt: 8,
  oneLineClamp: true,
})

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

export interface TagGroupProps<T extends object> extends UseTagListProps<T> {
  renderTag?: (args: {
    tag: Item<T>
    index: number
    onRemove: () => void
  }) => React.ReactNode
}

export function TagGroup<T extends object>(props: TagGroupProps<T>) {
  const { renderTag, ...rest } = props

  const state = useTagList(rest)
  const { removeTag, tags, labelKey } = state

  const renderedList = tags.map((tag, index) => {
    const onRemove = () => removeTag(tag, index)

    const renderedTag = renderTag ? (
      renderTag({ tag, index, onRemove })
    ) : (
      <Tag onRemove={onRemove}>{tag[labelKey]}</Tag>
    )

    return (
      <StyledListItem
        key={tag.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: spring,
        }}>
        {renderedTag}
      </StyledListItem>
    )
  })

  return tags?.length > 0 ? (
    <AnimatePresence initial={false}>
      <Container>
        <StyledList>{renderedList}</StyledList>
      </Container>
    </AnimatePresence>
  ) : null
}
