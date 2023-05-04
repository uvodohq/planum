import { useMemo, useRef } from 'react'

import { isDev, isFunction } from '../../utils'

type noop = (this: any, ...args: any[]) => any

function useMemoizedFn<T extends noop>(fn: T): T {
  if (isDev && !isFunction(fn)) {
    console.error(
      `useMemoizedFn expected parameter is a function, got ${typeof fn}`,
    )
  }

  const fnRef = useRef(fn)
  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo(() => fn, [fn])
  const memoizedFn = useRef<any>()

  if (!memoizedFn.current) {
    memoizedFn.current = function (...args: any[]) {
      return fnRef.current.apply(this, args)
    }
  }
  return memoizedFn.current
}

export default useMemoizedFn
