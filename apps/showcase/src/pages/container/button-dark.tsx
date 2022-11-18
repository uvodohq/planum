import { Box, Button, Flex, H2, Text, styled } from '@uvodohq/planum'
import { useState } from 'react'

import { PlusIcon } from '../../assets/icons'

const Title = styled(H2, {
  color: '$white',
})

const TableRow = styled('tr', {
  display: 'flex',
  justifyContent: 'space-between',
  mb: 48,
})

const TableData = styled('td', {
  display: 'inline-block',
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
    <TableRow>
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
          <LoadingButton {...rest} leftIcon={<PlusIcon size={24} />}>
            Button
          </LoadingButton>
          <LoadingButton {...rest} leftIcon={<PlusIcon size={24} />} size="sm">
            Button
          </LoadingButton>
        </FlexCell>
      </TableData>
      <TableData>
        <FlexCell>
          <LoadingButton {...rest} icon={<PlusIcon size={24} />} />
          <LoadingButton {...rest} icon={<PlusIcon size={24} />} size="sm" />
          <LoadingButton {...rest} icon={<PlusIcon size={12} />} size="xs" />
        </FlexCell>
      </TableData>

      <TableData>
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
      </TableData>

      <TableData>
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
    </TableRow>
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
