import type { AriaLabelingProps, DOMProps } from '@react-types/shared'
import React, { Children, cloneElement, isValidElement, useRef } from 'react'

import type { CSS } from '../theme'
import { styled } from '../theme'
import { SelectContext } from './select-context'
import SelectPopup from './select-popup'
import type { SelectButtonProps } from './select-trigger-button'
import useSelect from './use-select'
import useSelectState from './use-select-state'

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
  renderTrigger?: (props: SelectButtonProps) => React.ReactNode
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
  const listContentRef = useRef(items.map((item) => item[labelKey]))

  const state = useSelectState({
    items,
    value,
  })

  const select = useSelect(
    {
      listItemsRef,
      listContentRef,
      matchWidth,
    },
    state,
  )

  const renderOptions = () =>
    Children.map(
      children,
      (child, index) => isValidElement(child) && cloneElement(child, { index }),
    ) ?? []

  const selectContextValue = {
    state,
    select,
    listRef: listItemsRef,
    onChange,
    onSelect,
    dataRef: select.context.dataRef,
    listContentRef,
    matchWidth,
  }

  const triggerProps = {
    state,
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

  if (state.isOpen) {
    if (state.isEmpty) {
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
