import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import React, { useRef } from 'react'

import { useLatest } from '../hooks'
import { styled } from '../theme'
import countries from './metadata'
import { SelectContext } from './phone-context'
import { Option } from './phone-option'
import { SelectPopup } from './phone-popup'
import { SelectTrigger } from './phone-trigger'
import { useSelect } from './use-phone'

const StyledEmpty = styled('span', {
  py: 16,
  dflex: 'center',
})

export type Value = string | number | null | undefined

export interface InputProps {
  value?: Value
  defaultValue?: Value
  onChange?: (value: Value) => void
  placeholder?: string
  isDisabled?: boolean
  isLoading?: boolean
  status?: 'success' | 'normal' | 'error'
}

export interface SelectComponentProps extends InputProps {
  children: React.ReactNode
  fieldProps?: AriaLabelingProps & DOMProps
  items: any[]
  labelKey: any
  matchWidth?: boolean
}

export const SelectComponent: React.FC<SelectComponentProps> = (props) => {
  const {
    // items,
    labelKey,
    value,
    onChange = () => {},
    matchWidth = true,

    // field props
    status,
    fieldProps,
    placeholder,
    isDisabled,
    isLoading,
    popupCss,
    defaultCountry,
  } = props

  const items = countries // .slice(0, 40)

  const listItemsRef = useRef<Array<HTMLLIElement | null>>([])
  const listContentRef = useLatest(items.map((item) => item[labelKey]))

  const select = useSelect({
    listItemsRef,
    listContentRef,
    matchWidth,
    items,
    value,
    labelKey,
    onChange,
    defaultCountry,
  })

  const selectContextValue = {
    select,
    listRef: listItemsRef,
    onChange,
    dataRef: select.context.dataRef,
    listContentRef,
    matchWidth,
  }

  const triggerProps = {
    select,
    placeholder,
    isDisabled,
    isLoading,
    status,
    items,
    labelKey,
    ...fieldProps,
  }

  let popupContent

  const { isOpen, isEmpty, search, noResultsId, options } = select

  if (isOpen) {
    popupContent = isEmpty ? (
      <StyledEmpty
        key={search}
        id={noResultsId}
        role="region"
        aria-atomic="true"
        aria-live="assertive">
        No result found
      </StyledEmpty>
    ) : (
      options.map((item, index) => (
        <Option
          key={item.id}
          value={item.id}
          label={item[labelKey]}
          index={index}
          item={item}
        />
      ))
    )
  }

  return (
    <SelectContext.Provider value={selectContextValue}>
      <SelectTrigger {...triggerProps} />
      <SelectPopup popupCss={popupCss}>{popupContent}</SelectPopup>
    </SelectContext.Provider>
  )
}
