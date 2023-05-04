import { Box, Caption, H3, styled, tokens } from '@uvodohq/planum'

const { gradients, shadows } = tokens

const Section = styled('div', {
  gap: 16,
  mb: 80,
  flexWrap: 'wrap',
  display: 'flex',
})

export default function EffectContainer() {
  return (
    <>
      <H3 css={{ mb: 20 }} id="shadows">
        Shadows
      </H3>

      <Section>
        {Object.keys(shadows).map((key) => {
          return (
            <Box key={key}>
              <Box
                css={{
                  w: 200,
                  h: 110,
                  mb: 8,
                  boxShadow: `$${key}`,

                  transition: 'box-shadow 0.2s ease-in-out',

                  '&:hover': {
                    boxShadow: `$xs`,
                  },
                }}
              />
              <Caption> {key} </Caption>
            </Box>
          )
        })}
      </Section>

      <H3 css={{ mb: 20 }} id="gradients">
        Gradients
      </H3>

      <Section css={{ gap: 72 }}>
        {Object.keys(gradients).map((key) => {
          return (
            <Box key={key}>
              <Box
                css={{
                  w: 280,
                  h: 200,
                  mb: 8,
                  backgroundImage: `$${key}`,
                }}
              />
              <Caption> {key} </Caption>
            </Box>
          )
        })}
      </Section>
    </>
  )
}
