import { Box, toast } from '@uvodohq/planum'
import { Container } from './icons-wrapper.styles'

interface IconsWrapperProps {
  name: string
  //NOTE: add type for Icon
  Icon: any
}

export const IconsWrapper = (props: IconsWrapperProps) => {
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

export { IconsGrid } from './icons-wrapper.styles'
