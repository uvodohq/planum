import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import React, { Children, cloneElement, isValidElement, useRef } from 'react'

import { useLatest } from '../hooks'
import type { CSS } from '../theme'
import { styled } from '../theme'
import { SelectContext } from './select-context'
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
    children,
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
  })

  const renderOptions = () =>
    Children.map(
      children,
      (child, index) =>
        isValidElement(child) &&
        cloneElement(child, {
          // @ts-expect-error - custom prop
          index,
        }),
    ) ?? []

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

  if (select.isOpen) {
    if (select.isEmpty) {
      popupContent = renderEmpty ? (
        renderEmpty()
      ) : (
        <StyledEmpty>No options available</StyledEmpty>
      )
    } else {
      popupContent = renderOptions()
    }
  }

  return (
    <SelectContext.Provider value={selectContextValue}>
      {renderTrigger?.(triggerProps)}
      <SelectPopup popupCss={popupCss}>{popupContent}</SelectPopup>
    </SelectContext.Provider>
  )
}
