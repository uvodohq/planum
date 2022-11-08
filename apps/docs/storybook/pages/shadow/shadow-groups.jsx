import { shadows } from '@uvodohq/planum/src/theme/tokens'
import { Box, Flex, Paragraph } from 'src'

import { FrameBox } from '../../components/ui'

export const ShadowGroup = () => {
  return (
    <FrameBox>
      <Flex css={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        {Object.keys(shadows).map((key) => {
          return (
            <Box key={key}>
              <Box
                css={{
                  w: 200,
                  h: 140,
                  boxShadow: `$${key}`,
                }}
              />
              <Paragraph css={{ mt: 8, fw: '$semibold', textAlign: 'center' }}>
                {key}
              </Paragraph>
            </Box>
          )
        })}
      </Flex>
    </FrameBox>
  )
}
