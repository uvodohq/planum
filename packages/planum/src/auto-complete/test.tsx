import {
  autoUpdate,
  size,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react-dom-interactions'
import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react'

interface ItemProps {
  children: React.ReactNode
  active: boolean
}

const Item = forwardRef<
  HTMLDivElement,
  ItemProps & React.HTMLProps<HTMLDivElement>
>(({ children, active, ...rest }, ref) => {
  const id = useId()
  return (
    <div
      ref={ref}
      role="option"
      id={id}
      aria-selected={active}
      {...rest}
      style={{
        background: active ? 'lightblue' : 'none',
        padding: 4,
        cursor: 'default',
        ...rest.style,
      }}>
      {children}
    </div>
  )
})
Item.displayName = 'Item'

export function AutoCompleteTest({ data }) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const { x, y, reference, floating, strategy, context, refs } =
    useFloating<HTMLInputElement>({
      whileElementsMounted: autoUpdate,
      open,
      onOpenChange: setOpen,
      middleware: [
        size({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
              maxHeight: `${200}px`,
            })
          },
          padding: 10,
        }),
      ],
    })

  useLayoutEffect(() => {
    // IMPORTANT: When the floating element first opens, this runs when the
    // styles have **not yet** been applied to the element. This can cause an
    // infinite loop as `size` has not yet limited the maxHeight, so the whole
    // page tries to scroll. We must wrap it in rAF.
    requestAnimationFrame(() => {
      if (activeIndex != null) {
        listRef.current[activeIndex]?.scrollIntoView({ block: 'nearest' })
      }
    })
  }, [activeIndex])

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [
      useRole(context, { role: 'listbox' }),
      useDismiss(context),
      useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
        virtual: true,
        loop: true,
        focusItemOnHover: false,
      }),
    ],
  )

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setInputValue(value)

    if (value) {
      setOpen(true)
      setActiveIndex(0)
    } else {
      setOpen(false)
    }
  }

  const items = data.filter((item) =>
    item.toLowerCase().startsWith(inputValue.toLowerCase()),
  )

  return (
    <>
      <input
        {...getReferenceProps({
          ref: reference,
          onChange,
          value: inputValue,
          placeholder: 'Enter fruit',
          'aria-autocomplete': 'list',
          onKeyDown(event) {
            if (
              event.key === 'Enter' &&
              activeIndex != null &&
              items[activeIndex]
            ) {
              setInputValue(items[activeIndex])
              setActiveIndex(null)
              setOpen(false)
            }

            if (event.key === 'Tab') {
              setOpen(false)
            }
          },
        })}
      />
      {open && (
        <div
          {...getFloatingProps({
            ref: floating,
            style: {
              position: strategy,
              left: x ?? 0,
              top: y ?? 0,
              background: '#eee',
              color: 'black',
              overflowY: 'auto',
            },
          })}>
          {items.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <Item
              {...getItemProps({
                key: item,
                ref(node) {
                  listRef.current[index] = node
                },
                onClick() {
                  setInputValue(item)
                  setOpen(false)
                  refs.reference.current?.focus()
                },
              })}
              active={activeIndex === index}>
              {item}
            </Item>
          ))}
        </div>
      )}
    </>
  )
}
