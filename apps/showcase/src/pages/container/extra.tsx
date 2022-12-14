import { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  H1,
  Loader,
  Paragraph,
  Separator,
  Subheader,
  BreadcrumbItem,
  Breadcrumbs,
  Skeleton,
} from '@uvodohq/planum'

const ProgressLoader = (props: any) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev > 99) {
          return 0
        }

        return prev + 4
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return <Loader {...props} value={value} isIndeterminate={false} />
}

export default function ExtraContainer() {
  return (
    <>
      <Box css={{ py: 60 }} id="loader">
        <H1 fw="bold">Loader</H1>
        <Flex css={{ gap: 32, pb: 64 }}>
          <table
            style={{
              borderSpacing: '0 18px',
              minWidth: 300,
              padding: '0 32px',
            }}>
            <tr>
              <td>
                <Subheader css={{ fw: '$regular' }}>Default 24px</Subheader>
              </td>
              <td>
                <Loader size="default" />
              </td>
            </tr>
            <tr>
              <td>
                <Subheader css={{ fw: '$regular' }}>Medium 32px</Subheader>
              </td>
              <td>
                <Loader size="medium" />
              </td>
            </tr>
          </table>

          <table
            style={{
              background: 'black',
              color: 'white',
              borderSpacing: '0 18px',
              minWidth: 200,
              padding: '0 32px',
            }}>
            <tr>
              <td>
                <Loader size="default" theme="light" />
              </td>
            </tr>
            <tr>
              <td>
                <Loader size="medium" theme="light" />
              </td>
            </tr>
          </table>
        </Flex>

        <H1 fw="bold" css={{ mt: 32 }}>
          Progress Loader
        </H1>
        <Flex css={{ gap: 32, pb: 32 }}>
          <table
            style={{
              borderSpacing: '0 18px',
              minWidth: 300,
              padding: '0 32px',
            }}>
            <tr>
              <td>
                <Subheader css={{ fw: '$regular' }}>Medium 32px</Subheader>
              </td>
              <td>
                <ProgressLoader size="medium" />
              </td>
            </tr>
          </table>
        </Flex>
      </Box>

      <H1 css={{ my: 32, fw: 'bold' }}>Breadcrumbs</H1>
      <Flex css={{ gap: 32, pb: 64 }}>
        <Breadcrumbs>
          <BreadcrumbItem>Page 1</BreadcrumbItem>
          <BreadcrumbItem>Page 2</BreadcrumbItem>
          <BreadcrumbItem>Page 3</BreadcrumbItem>
          {/*
            <BreadcrumbItem as="a">Page 3</BreadcrumbItem> */}
        </Breadcrumbs>
      </Flex>

      <H1 css={{ my: 32, fw: 'bold' }}>Separator</H1>
      <Flex css={{ gap: 64, alignItems: 'center', pb: 64 }}>
        <Flex>
          <Box>Left</Box>{' '}
          <Separator orientation="vertical" css={{ mx: '$10' }} />{' '}
          <Box>Right</Box>
        </Flex>
        <Flex
          css={{
            gap: 8,
            maxWidth: 200,
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box>Top</Box>{' '}
          <Separator orientation="horizontal" css={{ mx: '$10' }} />
          <Box>Bottom</Box>
        </Flex>
      </Flex>

      <H1 css={{ my: 32, fw: 'bold' }}>Skeleton</H1>
      <Box css={{ pb: 64, maxWidth: 600 }}>
        <Box css={{ my: 24 }}>
          <Paragraph>Without image</Paragraph>
          <Skeleton />
        </Box>

        <Box css={{ my: 24 }}>
          <Paragraph>List item card</Paragraph>
          <Skeleton image />
        </Box>

        <Box css={{ my: 24 }}>
          <Paragraph>Image</Paragraph>
          <Skeleton showText={false} image />
        </Box>

        <Box css={{ my: 24 }}>
          <Paragraph>One line Paragraph</Paragraph>
          <Skeleton oneTextLine />
        </Box>

        <Box css={{ my: 24 }}>
          <Paragraph>No animated</Paragraph>
          <Skeleton animated={false} />
        </Box>
      </Box>
    </>
  )
}
