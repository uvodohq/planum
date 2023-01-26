/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-prototype-builtins */
// @see https://ahooks.js.org/hooks/use-controllable-value
import type { SetStateAction } from 'react'
import { useMemo, useRef } from 'react'

import { isFunction } from '../../utils'
import useMemoizedFn from '../use-memoized-fn'
import useUpdate from '../use-update'

interface Options<T> {
  defaultValue?: T
  defaultValuePropName?: string
  valuePropName?: string
  trigger?: string
}

type Props = Record<string, any>

export function useControllableValue<T>(
  props: Props = {},
  options: Options<T> = {},
): [T, (v: SetStateAction<T>) => void] {
  const {
    defaultValue,
    defaultValuePropName = 'defaultValue',
    valuePropName = 'value',
    trigger = 'onChange',
  } = options
  const value = props[valuePropName]
  const isControlled =
    props.hasOwnProperty(valuePropName) &&
    typeof props[valuePropName] !== 'undefined'

  const initialValue = useMemo(() => {
    if (isControlled) {
      return value
    }
    if (props.hasOwnProperty(defaultValuePropName)) {
      return props[defaultValuePropName]
    }
    return defaultValue
  }, [])

  const stateRef = useRef(initialValue)

  if (isControlled) {
    stateRef.current = value
  }

  const update = useUpdate()

  // @ts-expect-error useless
  function setState(v, ...args) {
    const r = isFunction(v) ? v(stateRef.current) : v
    if (!isControlled) {
      stateRef.current = r
      update()
    }
    if (props[trigger]) {
      props[trigger](r, ...args)
    }
  }

  return [stateRef.current, useMemoizedFn(setState)]
}
