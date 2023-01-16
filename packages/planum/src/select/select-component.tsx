import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import React, { useRef } from 'react'

import { useLatest } from '../hooks'
import type { CSS } from '../theme'
import { styled } from '../theme'
import { SelectContext } from './select-context'
import { Option } from './select-option'
import { SelectPopup } from './select-popup'
import type { SelectTriggerProps } from './select-trigger'
import { useSelect } from './use-select'

const StyledEmpty = styled('span', {
  py: 16,
  dflex: 'center',
})

export type Value = string | number | null | undefined

export interface InputProps {
  value?: Value
  defaultValue?: Value
  onChange?: (value: Value) => void
  onSelect?: (value: Value, item: any) => void
  placeholder?: string
  isDisabled?: boolean
  isLoading?: boolean
  status?: 'success' | 'normal' | 'error'

  /**
   *  you can show labels while async select options are loading.
   *  if options not loaded yet, provided value can't be shown.
   *
   */
  fallbackLabel?: string
  popupCss?: CSS
}

export interface SelectComponentProps extends InputProps {
  renderTrigger?: (props: SelectTriggerProps) => React.ReactNode
  renderEmpty?: () => React.ReactNode
  children: React.ReactNode
  fieldProps?: AriaLabelingProps & DOMProps
  items: any[]
  labelKey: any
  matchWidth?: boolean
}

export const SelectComponent: React.FC<SelectComponentProps> = (props) => {
  const {
    items,
    labelKey,
    value,
    onChange = () => {},
    onSelect = () => {},
    renderTrigger,
    renderEmpty,
    fallbackLabel,
    matchWidth = true,

    // field props
    status,
    fieldProps,
    placeholder,
    isDisabled,
    isLoading,
    popupCss,
  } = props

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
    onSelect,
  })

  const selectContextValue = {
    select,
    listRef: listItemsRef,
    onChange,
    onSelect,
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
    fallbackLabel,
    items,
    labelKey,
    ...fieldProps,
  }

  let popupContent

  const { isOpen, isEmpty, search, noResultsId, options } = select
  if (isOpen) {
    if (isEmpty) {
      popupContent = renderEmpty ? (
        renderEmpty()
      ) : (
        <StyledEmpty
          key={search}
          id={noResultsId}
          role="region"
          aria-atomic="true"
          aria-live="assertive">
          No result found
        </StyledEmpty>
      )
    } else {
      popupContent = options.map((item, index) => (
        <Option
          key={item.id}
          value={item.id}
          label={item[labelKey]}
          index={index}>
          {item[labelKey]}
        </Option>
      ))
    }
  }

  return (
    <SelectContext.Provider value={selectContextValue}>
      {renderTrigger?.(triggerProps)}
      <SelectPopup popupCss={popupCss}>{popupContent}</SelectPopup>
    </SelectContext.Provider>
  )
}
