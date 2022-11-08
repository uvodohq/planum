import { Flex } from '../../layout'

const FlexCol = (props: any) => (
  <Flex
    css={{ gap: 16, flexDirection: 'column', alignItems: 'center' }}
    {...props}
  />
)

export default FlexCol
