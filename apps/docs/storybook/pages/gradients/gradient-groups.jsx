import { Box, Flex, Paragraph } from '@uvodohq/planum/src'
import { gradients } from '@uvodohq/planum/src/theme/tokens'

import { FrameBox } from '../../components/ui'

export const GradientGroup = () => {
  return (
    <FrameBox>
      <Flex css={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        {Object.keys(gradients).map((key) => {
          return (
            <Box key={key}>
              <Box
                css={{
                  w: 280,
                  h: 200,
                  backgroundImage: `$${key}`,
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
