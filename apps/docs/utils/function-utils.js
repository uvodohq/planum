import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'

export function chainRefFunctions(funcsOrRefs, allowBreak = false) {
  return (args) => {
    for (const funcOrRef of funcsOrRefs) {
      try {
        let result
        if (isFunction(funcOrRef)) {
          result = funcOrRef(args)
        } else if (funcOrRef) {
          funcOrRef.current = args
        }
        if (result === false && allowBreak) {
          return
        }
      } catch (error) {
        console.error(error)
        return
      }
    }
  }
}

export function chainFunctions(funcs, allowBreak = false) {
  return (args) => {
    for (const func of funcs) {
      try {
        const result = func && func(args)
        if (result === false && allowBreak) {
          return
        }
      } catch (error) {
        console.error(error)
        return
      }
    }
  }
}

export function convertToArray(input) {
  return isArray(input) ? input : [input]
}

export function NOOP() {}
