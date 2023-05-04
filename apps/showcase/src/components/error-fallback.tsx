import type { FallbackProps } from 'react-error-boundary'
import { Box, Button, Paragraph, styled, Subheader } from '@uvodohq/planum'

const Title = styled(Subheader, {
  color: '$textMedium',
})

const Container = styled('div', {
  textAlign: 'center',
  maxWidth: 324,
  color: '$surface600',
})

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Box
      css={{
        dflex: 'center',
        minHeight: '80vh',
      }}
      className="UVODO-ERROR-SCREEN">
      <Container role="alert">
        <Title>Something went wrong</Title>
        <Paragraph>{error.message}</Paragraph>
        <Button variant="flat" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </Container>
    </Box>
  )
}

export default ErrorFallback
