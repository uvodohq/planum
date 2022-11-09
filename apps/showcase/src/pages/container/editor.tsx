import { Box, Flex, Editor } from '@uvodohq/planum'

export default function ExtraContainer() {
  return (
    <>
      <Flex css={{ gap: 32, py: 64 }}>
        <Box css={{ flex: 2, maxWidth: 608 }}>
          <Editor
            aria-label="Description"
            placeholder="Product description (optional)"
          />
        </Box>
        <Box css={{ flex: 1 }}>
          <Editor
            aria-label="Description"
            placeholder="Product description (optional)"
          />
        </Box>
      </Flex>
      <Flex css={{ gap: 32, pb: 64, maxWidth: 608 }}>
        <Editor
          label="With Default Value"
          placeholder="Product description (optional)"
          value="I am a default value"
          description="This is a description"
        />
      </Flex>
      <Flex css={{ gap: 32, pb: 64, maxWidth: 608 }}>
        <Editor
          label="With Error"
          placeholder="Product description (optional)"
          status="error"
          errorMessage="This field is required"
        />
      </Flex>

      <Flex css={{ gap: 32, pb: 64, maxWidth: 608 }}>
        <Editor
          label="Disabled"
          placeholder="Product description (optional)"
          isDisabled
        />
      </Flex>

      <Flex css={{ gap: 32, pb: 64, maxWidth: 608 }}>
        <Editor
          label="With Success"
          placeholder="Product description (optional)"
          status="success"
          successMessage="You have successfully submitted this form"
        />
      </Flex>
    </>
  )
}
