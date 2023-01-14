import { Box, Button, Flex, H2, styled, Text } from '@uvodohq/planum'
import { useState } from 'react'

import { PlusIcon } from '@uvodohq/planum-icons'

const Title = styled(H2, {
  color: '$white',
  m: 0,
  fontWeight: 'inherit',
})

const TableData = styled('td', {
  verticalAlign: 'top',
  padding: 0,
})

const LoadingButton = (props: any) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Button
      isLoading={isLoading}
      onClick={(e) => {
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
      <TableData>
        <Text>{title}</Text>
      </TableData>
      <TableData>
        <FlexCell>
          <LoadingButton {...rest}>Button</LoadingButton>
          <LoadingButton {...rest} size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </TableData>

      <TableData>
        <FlexCell>
          <LoadingButton {...rest} leftIcon={<PlusIcon />}>
            Button
          </LoadingButton>
          <LoadingButton {...rest} leftIcon={<PlusIcon />} size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </TableData>
      <TableData>
        <FlexCell>
          <LoadingButton {...rest} icon={<PlusIcon />} />
          <LoadingButton {...rest} icon={<PlusIcon />} size="sm" />
          <LoadingButton {...rest} icon={<PlusIcon />} size="xs" />
        </FlexCell>
      </TableData>

      <TableData>
        <FlexCell>
          <LoadingButton {...rest} icon={<PlusIcon />} rounded />
          <LoadingButton {...rest} icon={<PlusIcon />} rounded size="sm" />
          <LoadingButton {...rest} icon={<PlusIcon />} rounded size="xs" />
        </FlexCell>
      </TableData>

      <TableData>
        <FlexCell>
          <LoadingButton {...rest} leftIcon={<PlusIcon />} rounded>
            Button
          </LoadingButton>
          <LoadingButton {...rest} leftIcon={<PlusIcon />} rounded size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </TableData>

      <TableData>
        <FlexCell>
          <LoadingButton {...rest} rounded>
            Button
          </LoadingButton>
          <LoadingButton {...rest} rounded size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </TableData>
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

export default function ButtonDarkContainer() {
  return (
    <Flex css={{ flexDirection: 'column', gap: 32, py: 80 }} id="alert">
      <VariantOfButton title="Primary" />

      <VariantOfButton title="Secondary" variant="secondary" />

      <VariantOfButton title="Flat" variant="flat" />

      <VariantOfButton title="Secondary Dark" variant="secondaryDark" />
    </Flex>
  )
}
