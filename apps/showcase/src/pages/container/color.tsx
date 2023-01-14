import { Box, Caption, H3, tokens, theme, styled } from '@uvodohq/planum'

const {
  baseColors,
  dangerColors,
  infoColors,
  neutralColors,
  primaryColors,
  secondaryColors,
  successColors,
  surfaceColors,
  tertiaryColors,
  utilityColors,
  warningColors,
} = tokens

const colorSets = [
  [baseColors, 'Base'],
  [utilityColors, 'Utility'],
  [neutralColors, 'Neutral'],
  [primaryColors, 'Primary'],
  [secondaryColors, 'Secondary'],
  [tertiaryColors, 'Tertiary'],
  [successColors, 'Success'],
  [infoColors, 'Info'],
  [warningColors, 'Warning'],
  [dangerColors, 'Danger'],
  [surfaceColors, 'Surface'],
] as [any, string][]

const Color = styled('div', {
  flex: 1,
  height: 30,
})

const Section = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
})

const ColorSet = ({ colorSet }: { colorSet: typeof theme.colors }) => {
  return (
    <Section>
      {Object.entries(colorSet).map(([name, value]) => (
        <Box key={name} css={{ width: 'calc(20% - 40px)' }}>
          <div>
            <Color
              css={{
                backgroundColor: value,
              }}
            />
            <Caption css={{ pb: 8, display: 'block' }}>{name}</Caption>
          </div>
        </Box>
      ))}
    </Section>
  )
}

export default function ColorContainer() {
  return (
    <>
      {colorSets.map((item) => {
        const [colorSet, title] = item

        return (
          <Box css={{ p: 22, mb: 20 }} key={title}>
            <H3 css={{ fontWeight: 'inherit', m: 0 }}>{title}</H3>
            <ColorSet colorSet={colorSet} />
          </Box>
        )
      })}
    </>
  )
}
