import { Box, toast } from '@uvodohq/planum'
import { Container } from './icons-wrapper.styles'

export const IconWrapper = (props: any) => {
  const { name, Icon } = props

  function copyToClipboard() {
    navigator.clipboard.writeText(name)
    toast(`'${name}' copied to clipboard`)
  }

  return (
    <Container onClick={copyToClipboard}>
      <Box>
        <Icon />
      </Box>
      <Box css={{ m: 0 }}>{name}</Box>
    </Container>
  )
}

export { IconGrid } from './icons-wrapper.styles'
