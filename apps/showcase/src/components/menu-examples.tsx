/* eslint-disable no-alert */
import { forwardRef } from 'react'
import { DotsThreeIcon, ListIcon } from '@uvodohq/planum-icons'
import { Menu, MenuItem, Button, Box, Flex, styled } from '@uvodohq/planum'

export const menuItems = (
  <>
    <MenuItem label="Menu Item 1" />
    <MenuItem label="Menu Item 2" />
    <MenuItem label="Menu Item 3" />
    <MenuItem label="Menu Item 4" />
    <MenuItem label="Menu Item 5" />
  </>
)

const StyledNativeButton = styled('button', {
  bg: 'transparent',
  fontSize: 16,
  textAlign: 'left',
  border: 'none',
  p: 0,
})

export const CustomButton = forwardRef<any, any>(
  ({ children, ...rest }, ref) => (
    <Box as="button" {...rest} ref={ref}>
      <Flex as="span" css={{ alignItems: 'center', gap: 8 }}>
        <ListIcon /> {children}
      </Flex>
    </Box>
  ),
)

CustomButton.displayName = 'CustomButton'

export const RowBox = (props: any) => {
  return (
    <Flex
      css={{
        justifyContent: 'space-between',
        gap: 20,
        width: '100%',
        mb: 40,

        '&>div': {
          width: 150,
        },
      }}
      {...props}
    />
  )
}

export default function MenuExamples() {
  return (
    <>
      <Menu trigger={<StyledNativeButton> Edit menu</StyledNativeButton>}>
        <MenuItem label="Undo" onSelect={alert} />
        <MenuItem label="Redo" />
        <MenuItem label="Cut" disabled />
        <MenuItem label="Mail" />
        <MenuItem label="Instagram" />
      </Menu>

      <Menu
        trigger={<Button icon={<DotsThreeIcon />} variant="secondaryDark" />}>
        <MenuItem label="Undo" onSelect={alert} />
        <MenuItem label="Redo" />
        <MenuItem label="Cut" disabled />
        <MenuItem label="Mail" />
        <MenuItem label="Instagram" />
      </Menu>

      <Menu
        trigger={<StyledNativeButton> another button</StyledNativeButton>}
        defaultIsOpen={false}>
        <MenuItem label="Undo" onSelect={alert} />
        <MenuItem label="Redo" />
        <MenuItem label="Cut" disabled />
        <MenuItem label="Mail" />
        <MenuItem label="Instagram" />
      </Menu>

      <Menu
        trigger={
          <Button leftIcon={<DotsThreeIcon />} variant="secondaryDark">
            Match popup button width
          </Button>
        }
        defaultIsOpen={false}>
        <MenuItem label="Undo" onSelect={alert} />
        <MenuItem label="Redo" />
        <MenuItem label="Cut" disabled />
        <MenuItem label="Mail" />
        <MenuItem label="Instagram" />
      </Menu>

      <Menu
        trigger={
          <Button leftIcon={<DotsThreeIcon />} variant="secondaryDark">
            Sort by name
          </Button>
        }
        matchWidth
        defaultIsOpen={false}>
        <MenuItem label="Undo" onSelect={alert} />
        <MenuItem label="Redo" />
        <MenuItem label="Cut" disabled />
        <MenuItem label="Mail" />
        <MenuItem label="Instagram" />
      </Menu>

      <div
        onClick={(e) => {
          alert('i should not be triggered, parent wrapper')
        }}>
        <Menu
          trigger={
            <StyledNativeButton
              onClick={(e) => {
                alert('i am button onClick')
              }}>
              Click propagation simple
            </StyledNativeButton>
          }>
          <MenuItem label="Undo" onSelect={alert} />
          <MenuItem label="Redo" />
        </Menu>
      </div>

      <div
        onClick={() => {
          alert('i should not be triggered, parent wrapper')
        }}>
        <Menu
          trigger={
            <Button
              leftIcon={<DotsThreeIcon />}
              variant="secondaryDark"
              onClick={(e) => {
                alert('i am button onClick')
              }}>
              Click propagation
            </Button>
          }>
          <MenuItem label="Undo" onSelect={alert} />
          <MenuItem label="Redo" />
        </Menu>
      </div>
    </>
  )
}
