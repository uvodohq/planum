import { Flex, overlineCss } from '@uvodohq/planum'

import { styled } from '@uvodohq/planum'

import { Card, CardContainer, CardList } from '../components/card/card'
import Frame from '../components/frame'

const Cards = () => {
  const cards: any[] = [
    {
      label: 'Colors',
      path: '#colors',
    },
    {
      label: 'Typography',
      path: '#text',
    },
    {
      label: 'Shadows',
      path: '#effects',
    },
    {
      label: 'Gradients',
      path: '#effects',
    },
    {
      label: 'Buttons',
      path: '#buttons',
    },
    {
      label: 'Inputs',
      path: '#inputs',
    },
    {
      label: 'Textarea',
      path: '#textarea',
    },
    {
      label: 'Checkbox',
      path: '#form',
    },
    {
      label: 'Switch',
      path: '#form',
    },
    {
      label: 'Radio',
      path: '#form',
    },
    {
      label: 'Select',
      path: '#select',
    },
    {
      label: 'Overlays',
      path: '#overlays',
    },
    {
      label: 'Tags',
      path: '#tags',
    },
    {
      label: 'Badge',
      path: '#tags',
    },
    {
      label: 'Toast',
      path: '#toast',
    },
    {
      label: 'Alert',
      path: '#alert',
    },
    {
      label: 'Image/Avatar',
      path: '#image',
    },
    {
      label: 'Loader',
      path: '#extra',
    },
    {
      label: 'Breadcrumbs',
      path: '#extra',
    },
    {
      label: 'Text Editor',
      path: '#editor',
    },
    {
      label: 'Skeleton',
      path: '#extra',
    },
  ]

  return (
    <CardContainer>
      <CardList>
        {cards.map((item) => (
          <Card key={item.label} {...item} />
        ))}
      </CardList>
    </CardContainer>
  )
}

const BackHomeLink = styled('a', overlineCss, {
  position: 'fixed',
  right: 12,
  bottom: 12,
  bg: '$warning300',
  padding: '$8 $16',
  borderRadius: '$pill',
  boxShadow: '$sm',
  fw: '$semibold',
  zIndex: 9999,
  color: '#000',
  textDecoration: 'none',
})

export function HomePage() {
  return (
    <Frame
      title="Components"
      css={{
        color: '$textDark',
        px: 80,
      }}
      id="components">
      <Flex css={{ py: 80 }} id="home">
        <Cards />
      </Flex>

      <BackHomeLink href="#components"> Back to Components </BackHomeLink>
    </Frame>
  )
}
