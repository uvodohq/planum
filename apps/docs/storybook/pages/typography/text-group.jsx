import {
  Box,
  Caption,
  H1,
  H2,
  H3,
  Overline,
  Paragraph,
  Subheader,
  Title,
} from '@uvodohq/planum'
import { theme } from '@uvodohq/planum/src/theme'

import { Description, FrameBox } from '../../components/ui'

const weights = [
  ['Bold', '$bold'],
  ['Semibold', '$semibold'],
  ['Medium', '$medium'],
  ['Regular', '$regular'],
]

const getTexts = (fw) => [
  {
    name: 'Main heading',
    description: 'The main heading of the page',
    component: <H1 css={{ fw }}>H1</H1>,
  },
  {
    name: 'Secondary heading',
    description: 'A subheading of the page',
    component: <H2 css={{ fw }}>H2</H2>,
  },
  {
    name: 'Teritary heading',
    description: 'A subheading of the page',
    component: <H3 css={{ fw }}>H3</H3>,
  },
  {
    name: 'Title',
    description: 'A title of the page',
    component: <Title css={{ fw }}>Title</Title>,
  },
  {
    name: 'Subheader',
    description: 'A subheader of the page',
    component: <Subheader css={{ fw }}>Subheader</Subheader>,
  },
  {
    name: 'Paragraph',
    description: 'A paragraph of the page',
    component: <Paragraph css={{ fw }}>P</Paragraph>,
  },
  {
    name: 'Caption',
    description: 'A caption of the page',
    component: <Caption css={{ fw }}>Caption</Caption>,
  },
  {
    name: 'Overline',
    description: 'An overline of the page',
    component: <Overline css={{ fw }}>Overline</Overline>,
  },
]

const Group = ({ weight, title }) => {
  return (
    <>
      <Title css={{ fontWeight: weight }}>{title}</Title>
      <FrameBox>
        {getTexts(weight).map(({ name, description, component }) => {
          const nameWithWeight = `${name} (Inter ${title} ${
            theme.fontWeights[title.toLowerCase()]?.value
          })`

          return (
            <Description
              key={name}
              name={nameWithWeight}
              description={description}
              leftBoxProps={{
                children: component,
                css: { minSize: 100, fontWeight: weight },
              }}
            />
          )
        })}
      </FrameBox>
    </>
  )
}

export const TextGroup = () => {
  return (
    <Box>
      {weights.map(([title, weight]) => {
        return <Group key={title} title={title} weight={weight} />
      })}
    </Box>
  )
}
