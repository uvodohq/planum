import * as Accordion from '@radix-ui/react-accordion'

import { SelectContext } from './context'
import { SelectEmptyContent } from './empty-content'
import { Option } from './option'
import { SelectOptionGroup } from './option-group'
import { SelectPopup } from './popup/popup'
import type { SelectProps } from './select.types'
import { SelectTrigger } from './trigger'
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
    state,
  })

  const { isEmpty, groups, openedGroupIds, onAccordionChange } = state

  const popupContent = isEmpty ? (
    <SelectEmptyContent renderEmpty={renderEmpty} />
  ) : (
    <Accordion.Root
      type="multiple"
      asChild
      value={openedGroupIds}
      onValueChange={onAccordionChange}>
      <ul>
        {groups.map((group) => {
          if (group.withAccordion === false) {
            return (
              <li key={group.id}>
                <ul>
                  {group.children.map((option, index) => (
                    <Option
                      key={option.id}
                      index={index}
                      item={option}
                      groupId={group.id.toString()}
                      asHeader
                    />
                  ))}
                </ul>
              </li>
            )
          }

          return (
            <SelectOptionGroup key={group.id} group={group}>
              {group.children.map((option, index) => (
                <Option
                  key={option.id}
                  index={index}
                  item={option}
                  groupId={group.id.toString()}
                />
              ))}
            </SelectOptionGroup>
          )
        })}
      </ul>
    </Accordion.Root>
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
