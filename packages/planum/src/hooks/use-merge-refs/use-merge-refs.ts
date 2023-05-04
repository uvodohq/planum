/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'

type ReactRef<T> = React.Ref<T> | React.MutableRefObject<T>

export function assignRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
  if (ref == null) return

  if (typeof ref === 'function') {
    ref(value)
    return
  }

  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ref.current = value
  } catch {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

/**
 * React hook that merges react refs into a single memoized function
 *
 * @example
 * import React from "react";
 * import { useMergeRefs } from `hooks`;
 *
 * const Component = React.forwardRef((props, ref) => {
 *   const internalRef = React.useRef();
 *   return <div {...props} ref={useMergeRefs(internalRef, ref)} />;
 * });
 */
export function useMergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
  return React.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null
    }
    return (node: T) => {
      for (const ref of refs) {
        if (ref) assignRef(ref, node)
      }
    }
  }, refs)
}
