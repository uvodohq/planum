import { Box, Button, H1, Notification, toast, Toaster } from '@uvodohq/planum'

export default function NotificationContainer() {
  return (
    <>
      <Toaster />
      <H1 css={{ mb: 20, fontWeight: '$bold' }}>Toast</H1>

      <Box css={{ display: 'flex', gap: 56, mb: 32 }}>
        <Box css={{ flex: 1 }}>
          <Notification message="We have e-mailed your password reset link!" />
          <Button
            onClick={() => toast('We have e-mailed your password reset link!')}
            css={{ mt: 20, display: 'block' }}>
            Make me a toast
          </Button>
        </Box>

        <Box css={{ flex: 1 }}>
          <Notification message="Your product has been deleted" width="mini" />
          <Button
            onClick={() => toast('Your product has been deleted')}
            css={{ mt: 20, display: 'block' }}>
            Make me a toast
          </Button>
        </Box>
      </Box>
    </>
  )
}
