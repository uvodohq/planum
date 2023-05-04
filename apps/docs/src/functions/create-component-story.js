import { action } from '@storybook/addon-actions'
import React, { useCallback, useMemo, useState } from 'react'

export function createStoryMetaSettings({
  component,
  enumPropNamesArray,
  actionPropsArray,
}) {
  const argTypes = {}
  const decorators = []

  // set enum allowed values inside argsTypes object
  if (enumPropNamesArray)
    for (let prop of enumPropNamesArray) {
      let enumName
      if (prop instanceof Object) {
        enumName = prop.enumName
        prop = prop.propName
      } else {
        enumName = `${prop}s`
      }
      const enums = component[enumName]
      if (enums && enums instanceof Object) {
        argTypes[prop] = {
          options: Object.values(enums),
        }
      }
    }

  if (actionPropsArray)
    for (const actionProp of actionPropsArray) {
      if (typeof actionProp === 'string') {
        argTypes[actionProp] = { action: actionProp }
      } else if (actionProp?.name && actionProp.linkedToPropValue) {
        // we assume that actionPropsArray is static. If it changes, things may break, since internally we call React.useState for the story decorator.
        decorators.push(
          createMappedActionToInputPropDecorator(
            actionProp.name,
            actionProp.linkedToPropValue,
          ),
        )
      }
    }

  return { argTypes, decorators }
}

/**
 * Creates a decorator which maps a callback prop to an input prop.
 * For example: mapping the onChange callback of a Select component to its currentValue prop.
 * Useful for adding interactivity to stories of controlled components.
 * Additionally, the callback will trigger a Storybook action, that can be seen on the Actions tab.
 * @param {string} actionName - the name of the action prop of the component in the story. For example, "setValue" or "onChange".
 * @param {string} linkedToPropValue - the name of the prop which should be updated when the prop of "actionName" is called. For example, "value".
 * @returns A decorate for storybook which updates the {@link linkedToPropValue} input of the component, whenever {@link actionName} is called.
 */
function createMappedActionToInputPropDecorator(actionName, linkedToPropValue) {
  return (Story, context) => {
    const [propValue, setPropValue] = useState(
      context.initialArgs[linkedToPropValue],
    )
    const createAction = useMemo(() => action(actionName), [])

    const injectedCallback = useCallback(
      (newPropValue) => {
        setPropValue(newPropValue)
        createAction(newPropValue)
      },
      [setPropValue, createAction],
    )

    context.args[actionName] = injectedCallback
    context.args[linkedToPropValue] = propValue

    return Story()
  }
}
