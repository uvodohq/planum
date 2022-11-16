import { Box, Title } from '@uvodohq/planum'

import { Description, FrameBox } from '../../components/ui'
import { paletteColorSets, semanticColorSets, textColorSet } from './colors'

function splitWordByCamelCase(word) {
  return word.replace(/([A-Z])/g, ' $1')
}

const ColorList = ({ list }) => {
  return (
    <>
      <Title>{list.title}</Title>
      <FrameBox>
        {list.colors.map((color) => {
          return (
            <Description
              key={color.value}
              name={color.name}
              description={`${color?.hex} ${color?.description || ''}`}
              bg={color.value}
            />
          )
        })}
      </FrameBox>
    </>
  )
}

export function SemanticColors() {
  return (
    <Box>
      {semanticColorSets.map((list) => {
        return <ColorList list={list} key={list.title} />
      })}
    </Box>
  )
}

export function PaletteColors() {
  return (
    <Box>
      {paletteColorSets.map((list) => {
        return <ColorList list={list} key={list.title} />
      })}
    </Box>
  )
}

export function TextColors() {
  return (
    <FrameBox>
      {textColorSet.colors.map((color) => {
        return (
          <Description
            key={color.value}
            name={splitWordByCamelCase(color.name)}
            description={`${color?.hex || ''} ${color?.description || ''}`}
            bg={color.value}
          />
        )
      })}
    </FrameBox>
  )
}
