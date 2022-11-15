import type { offset, Placement } from '@floating-ui/react-dom-interactions'
import React, { forwardRef } from 'react'

import { DropdownPopup } from './menu-popup'
import { DropdownTrigger } from './menu-trigger'
import { useMenu } from './use-menu'
import { useMenuState } from './use-menu-state'

export interface MenuProps {
  trigger: JSX.Element
  children?: React.ReactNode
  isOpen?: boolean
  defaultIsOpen?: boolean
  onChangeOpen?: (isOpen: boolean) => void
  offsetValue?: Parameters<typeof offset>[0]
  align?: Placement
  matchWidth?: boolean
}

export const Menu = forwardRef<any, MenuProps>((props, ref) => {
  const state = useMenuState(props)
  const menu = useMenu(state, props, ref)

  // TODO: extra span is a workaround for stoping parent wrapper elements auto click or link navigation
  return (
    <span
      onClick={(e) => {
        e.stopPropagation()
      }}>
      <DropdownTrigger menu={menu} trigger={props.trigger} />
      <DropdownPopup state={state} menu={menu} />
    </span>
  )
})

Menu.displayName = 'Menu'
