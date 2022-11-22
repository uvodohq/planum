import { Box, toast } from '@uvodohq/planum'
import { Icon } from '@uvodohq/planum-icons'
import { Container } from './icons-wrapper.styles'

export const IconWrapper = (props: Icon) => {
  const { name, Icon } = props

  function copyToClipboard() {
    //NOTE: create copy-to-clipboard hook as admin
    navigator.clipboard.writeText(name)
    toast(`'${name}' copied to clipboard`)
  }

  return (
    <Container onClick={copyToClipboard}>
      <Box>
        <Icon />
      </Box>
      <Box>{name}</Box>
    </Container>
  )
}

export { IconGrid } from './icons-wrapper.styles'
