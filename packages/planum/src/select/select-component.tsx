import type { SelectProps } from './select.types'
import { SelectContext } from './select-context'
import { SelectEmptyContent } from './select-empty-content'
import { Option } from './select-option'
import { SelectPopup } from './select-popup/select-popup'
import { SelectTrigger } from './select-trigger'
import { useSelect } from './use-select'
import { useSelectState } from './use-select-state'

export const SelectComponent = (props: SelectProps) => {
  const {
    // input props
    value,
    defaultValue,
    onChange,

    // select props
    items = [],
    labelKey = 'id',
    onSelect,
    renderTrigger,
    renderEmpty,

    // trigger props
    status,
    placeholder,
    isDisabled,
    isLoading,
    fieldProps,
    fallbackLabel,

    // popup props
    matchWidth = true,
    popupCss,
  } = props

  const state = useSelectState({
    value,
    defaultValue,
    onChange,
    onSelect,
    items,
  })

  const select = useSelect({
    matchWidth,
    labelKey,
    state,
  })

  const { isEmpty, options } = select

  const popupContent = isEmpty ? (
    <SelectEmptyContent renderEmpty={renderEmpty} />
  ) : (
    options.map((item, index) => (
      <Option
        key={item.id}
        value={item.id}
        label={item[labelKey]}
        index={index}>
        {item[labelKey]}
      </Option>
    ))
  )

  return (
    <SelectContext.Provider
      value={{
        select,
        state,
      }}>
      <SelectTrigger
        {...{
          status,
          placeholder,
          isDisabled,
          isLoading,
          fallbackLabel,
          fieldProps,
          renderTrigger,
        }}
      />
      <SelectPopup popupCss={popupCss}>{popupContent}</SelectPopup>
    </SelectContext.Provider>
  )
}
