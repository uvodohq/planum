import { cloneElement } from 'react'

import type { UseMenuReturn } from './use-menu'

export const DropdownTrigger = (props: {
  menu: UseMenuReturn
  trigger: JSX.Element
}) => {
  const { trigger, menu } = props

  return <>{cloneElement(trigger, menu.referenceProps)}</>
}
