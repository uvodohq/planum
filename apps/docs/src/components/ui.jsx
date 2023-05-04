import { Box, Flex, Paragraph } from '@uvodohq/planum'

export const Description = ({ name, description, bg, leftBoxProps }) => (
  <Flex
    css={{
      alignItems: 'center',
      '&:not(:last-child)': { mb: 24 },
    }}>
    <Box
      {...leftBoxProps}
      css={{
        minSize: 40,
        mr: 16,
        borderRadius: 2,
        boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.02)',
        dflex: 'center',
        bg,
        ...leftBoxProps?.css,
      }}
    />
    <Box>
      <Box css={{ fw: '$semibold', textTransform: 'capitalize' }}>{name}</Box>
      {<Paragraph>{description}</Paragraph>}
    </Box>
  </Flex>
)

export function FrameBox(props) {
  return (
    <Box
      css={{
        p: 32,
        mb: 32,
        mt: 12,
        border: '1px solid #ccc',
        borderRadius: 8,
      }}
      {...props}
    />
  )
}
