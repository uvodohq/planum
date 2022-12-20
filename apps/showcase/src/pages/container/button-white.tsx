import { Box, Button, Flex, H2, Text } from '@uvodohq/planum'
import { useState } from 'react'

import { styled } from '@uvodohq/planum'

import { PlusIcon } from '@uvodohq/planum-icons'

function WhatsappIcon(props) {
  const { size = 24 } = props
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.697 3.296a8.482 8.482 0 0 1 5.616 2.494 8.484 8.484 0 0 1 2.5 6.04c-.003 4.707-3.835 8.537-8.543 8.537a8.552 8.552 0 0 1-4.085-1.039l-4.528 1.187 1.211-4.424a8.519 8.519 0 0 1-1.14-4.268c.002-4.708 3.834-8.537 8.542-8.537l.427.01ZM8.395 17.782l.259.154c1.09.647 2.34.989 3.613.99h.003c3.913 0 7.098-3.184 7.1-7.097a7.051 7.051 0 0 0-2.078-5.02 7.053 7.053 0 0 0-5.019-2.081c-3.916 0-7.101 3.183-7.103 7.095 0 1.341.375 2.647 1.086 3.777l.169.268-.718 2.619 2.688-.705Zm8.179-3.922c-.054-.09-.196-.143-.41-.25-.213-.106-1.262-.622-1.458-.694-.195-.07-.338-.106-.48.107-.142.214-.551.694-.676.837-.124.142-.249.16-.462.053-.214-.107-.901-.332-1.717-1.059-.634-.565-1.063-1.264-1.187-1.477-.124-.214-.013-.33.094-.436.096-.096.213-.249.32-.374.106-.124.142-.213.213-.356.071-.142.036-.266-.018-.373-.053-.107-.48-1.157-.658-1.584-.173-.416-.349-.36-.48-.366a8.59 8.59 0 0 0-.409-.008.784.784 0 0 0-.57.267c-.195.214-.746.73-.746 1.78s.765 2.064.871 2.207c.107.142 1.505 2.296 3.646 3.22.51.22.907.352 1.217.45.511.162.977.14 1.345.085.41-.062 1.262-.516 1.44-1.015.178-.498.178-.925.125-1.014Z"
        fill="#fff"
      />
    </svg>
  )
}

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
          <LoadingButton {...rest} leftIcon={<PlusIcon />}>
            Button
          </LoadingButton>
          <LoadingButton {...rest} leftIcon={<PlusIcon />} size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </td>
      <td>
        <FlexCell>
          <LoadingButton {...rest} icon={<PlusIcon />} />
          <LoadingButton {...rest} icon={<PlusIcon />} size="sm" />
          <LoadingButton {...rest} icon={<PlusIcon size={12} />} size="xs" />
        </FlexCell>
      </td>

      <td>
        <FlexCell>
          <LoadingButton {...rest} icon={<PlusIcon />} rounded />
          <LoadingButton {...rest} icon={<PlusIcon />} rounded size="sm" />
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
          <LoadingButton {...rest} leftIcon={<PlusIcon />} rounded>
            Button
          </LoadingButton>
          <LoadingButton {...rest} leftIcon={<PlusIcon />} rounded size="sm">
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
        <LoadingButton leftIcon={<PlusIcon />} full variant={variant} size="lg">
          Full width button
        </LoadingButton>

        <LoadingButton
          leftIcon={<PlusIcon />}
          full
          variant={variant}
          size={size}>
          Full width button
        </LoadingButton>

        <LoadingButton leftIcon={<PlusIcon />} full variant={variant} size="sm">
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
