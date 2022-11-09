import { useState } from 'react'
import { Box, Button, Flex, H2, Text } from '@uvodohq/planum'

import { styled } from '@uvodohq/planum'

import { PlusIcon, WhatsappIcon } from '../../assets/icons'

const Title = styled(H2, {
  color: '$textDark',
})

const LoadingButton = (props: any) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button
      isLoading={isLoading}
      onClick={() => {
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }}
      {...props}
    />
  )
}

const FlexCell = (props: any) => (
  <Flex
    css={{ gap: 16, flexDirection: 'column', alignItems: 'center' }}
    {...props}
  />
)

const ButtonGroupTr = ({ title, ...rest }: any) => {
  return (
    <tr>
      <td>
        <Text>{title}</Text>
      </td>
      <td>
        <FlexCell>
          <LoadingButton {...rest}>Button</LoadingButton>
          <LoadingButton {...rest} size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </td>

      <td>
        <FlexCell>
          <LoadingButton {...rest} leftIcon={<PlusIcon size={24} />}>
            Button
          </LoadingButton>
          <LoadingButton {...rest} leftIcon={<PlusIcon size={24} />} size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </td>
      <td>
        <FlexCell>
          <LoadingButton {...rest} icon={<PlusIcon size={24} />} />
          <LoadingButton {...rest} icon={<PlusIcon size={24} />} size="sm" />
          <LoadingButton {...rest} icon={<PlusIcon size={12} />} size="xs" />
        </FlexCell>
      </td>

      <td>
        <FlexCell>
          <LoadingButton {...rest} icon={<PlusIcon size={24} />} rounded />
          <LoadingButton
            {...rest}
            icon={<PlusIcon size={24} />}
            rounded
            size="sm"
          />
          <LoadingButton
            {...rest}
            icon={<PlusIcon size={12} />}
            rounded
            size="xs"
          />
        </FlexCell>
      </td>

      <td>
        <FlexCell>
          <LoadingButton {...rest} leftIcon={<PlusIcon size={24} />} rounded>
            Button
          </LoadingButton>
          <LoadingButton
            {...rest}
            leftIcon={<PlusIcon size={24} />}
            rounded
            size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </td>

      <td>
        <FlexCell>
          <LoadingButton {...rest} rounded>
            Button
          </LoadingButton>
          <LoadingButton {...rest} rounded size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </td>
    </tr>
  )
}

const VariantOfButton = ({ title, variant, size }: any) => {
  return (
    <Box css={{ mb: 80 }} id="button">
      <Title>{title}</Title>
      <table>
        <ButtonGroupTr variant={variant} title="Default" size={size} />
        <ButtonGroupTr
          variant={variant}
          title="Disabled"
          isDisabled
          size={size}
        />
        <ButtonGroupTr
          variant={variant}
          title="Loading"
          isLoading={true}
          size={size}
        />
      </table>

      <FlexCell
        css={{
          m: 20,
          maxWidth: 400,
          mx: 'auto',
          gap: 16,
          flexDirection: 'column',
        }}>
        <LoadingButton
          leftIcon={<PlusIcon size={24} />}
          full
          variant={variant}
          size="lg">
          Full width button
        </LoadingButton>

        <LoadingButton
          leftIcon={<PlusIcon size={24} />}
          full
          variant={variant}
          size={size}>
          Full width button
        </LoadingButton>

        <LoadingButton
          leftIcon={<PlusIcon size={24} />}
          full
          variant={variant}
          size="sm">
          Full width button
        </LoadingButton>
      </FlexCell>
    </Box>
  )
}

export default function ButtonWhiteContainer() {
  return (
    <>
      <Flex css={{ flexDirection: 'column', gap: 32, py: 80 }} id="alert">
        <VariantOfButton title="Danger" variant="danger" />
        <VariantOfButton title="Secondary Danger" variant="secondaryDanger" />
        <VariantOfButton title="Flat Danger" variant="flatDanger" />
        <VariantOfButton title="Flat Dark" variant="flatDark" />
      </Flex>

      <Box css={{ mb: 80 }} id="button">
        <Title css={{ mb: 20 }}>Compact Buttons</Title>
        <Flex css={{ gap: 20 }}>
          <Button leftIcon={<PlusIcon />} variant="flat" compact>
            Button
          </Button>
          <Button rightIcon={<PlusIcon />} variant="flat" compact>
            Button
          </Button>
          <Button variant="flat" compact>
            Button
          </Button>

          <Button leftIcon={<PlusIcon />} variant="success" compact>
            Button
          </Button>
          <Button rightIcon={<PlusIcon />} variant="success" compact>
            Button
          </Button>
          <Button variant="success" compact>
            Button
          </Button>

          <Button leftIcon={<PlusIcon />} variant="flatDanger" compact>
            Button
          </Button>
          <Button rightIcon={<PlusIcon />} variant="flatDanger" compact>
            Button
          </Button>
          <Button variant="flatDanger" compact>
            Button
          </Button>

          <Button leftIcon={<PlusIcon />} variant="warning" compact>
            Button
          </Button>
          <Button rightIcon={<PlusIcon />} variant="warning" compact>
            Button
          </Button>
          <Button variant="warning" compact>
            Button
          </Button>

          <Button leftIcon={<PlusIcon />} variant="info" compact>
            Button
          </Button>
          <Button rightIcon={<PlusIcon />} variant="info" compact>
            Button
          </Button>
          <Button variant="info" compact>
            Button
          </Button>
        </Flex>
      </Box>

      <Box css={{ mb: 80 }} id="button">
        <Title css={{ mb: 20 }}>Icon Buttons</Title>
        <Flex css={{ gap: 20 }}>
          <Button icon={<PlusIcon />} variant="flat" compact />
          <Button icon={<PlusIcon />} variant="success" compact />
          <Button icon={<PlusIcon />} variant="flatDanger" compact />
          <Button icon={<PlusIcon />} variant="warning" compact />
          <Button icon={<PlusIcon />} variant="info" compact />
        </Flex>
      </Box>

      <Box css={{ mb: 40 }} id="button">
        <Title css={{ mb: 80 }}>Button Social</Title>
        <Button leftIcon={<WhatsappIcon />} variant="whatsapp" full={false}>
          Share on WhatsApp
        </Button>
      </Box>
    </>
  )
}
