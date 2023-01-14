import { Alert, Button, Flex } from '@uvodohq/planum'
import { ArrowRightIcon } from '@uvodohq/planum-icons'

type AlertList = ('primary' | 'success' | 'warning' | 'error' | 'info')[]

export default function AlertContainer() {
  const alertList: AlertList = [
    'primary',
    'success',
    'warning',
    'error',
    'info',
  ]

  return (
    <>
      <Flex
        css={{ flexDirection: 'column', py: 80, '&>div': { mt: 32 } }}
        id="alert">
        {alertList.map((variant) => (
          <Alert
            key={variant}
            title="Non porttitor nisl volutpat ac imperdiet."
            message="Molestie et, consectetur condimentum facilisis elementum duis sit. Lobortis proin lectus amet ullamcorper."
            variant={variant}
            closable
            actions={
              <Flex css={{ gap: 20 }}>
                <Button
                  size="min"
                  rightIcon={<ArrowRightIcon />}
                  variant={variant}
                  compact>
                  Learn more
                </Button>
              </Flex>
            }
          />
        ))}

        {alertList.map((variant) => (
          <Alert
            message="Molestie et, consectetur condimentum facilisis elementum duis sit. Lobortis proin lectus amet ullamcorper."
            variant={variant}
            closable
            key={variant + 2}
          />
        ))}
      </Flex>
    </>
  )
}
