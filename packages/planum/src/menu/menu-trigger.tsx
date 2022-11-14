import { cloneElement } from 'react'

export const DropdownTrigger = (props) => {
  const { trigger, menu } = props

  return <>{cloneElement(trigger, menu.referenceProps)}</>
}
