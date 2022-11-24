/* eslint-disable no-alert */
import type { SVGProps } from 'react'
import { forwardRef } from 'react'

import { Button } from '../../button'
import { Box, Flex } from '../../layout'
import { Menu, MenuItem } from '..'
import { ListIcon } from '../icons'

const DotsThreeIcon = (props: SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 256 256"
    {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <circle cx={128} cy={128} r={12} fill="currentColor" />
    <circle cx={192} cy={128} r={12} fill="currentColor" />
    <circle cx={64} cy={128} r={12} fill="currentColor" />
  </svg>
)

export const menuItems = (
  <>
    <MenuItem label="Menu Item 1" />
    <MenuItem label="Menu Item 2" />
    <MenuItem label="Menu Item 3" />
    <MenuItem label="Menu Item 4" />
    <MenuItem label="Menu Item 5" />
  </>
)

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
      <Menu trigger={<button> Edit menu</button>}>
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

      <Menu trigger={<button> another button</button>} defaultIsOpen={false}>
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
            <button
              onClick={(e) => {
                alert('i am button onClick')
              }}>
              Click propagation simple
            </button>
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
