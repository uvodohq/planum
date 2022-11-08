import { Flex } from 'src'

const FlexCol = (props: any) => (
  <Flex
    css={{ gap: 16, flexDirection: 'column', alignItems: 'center' }}
    {...props}
  />
)

export default FlexCol
