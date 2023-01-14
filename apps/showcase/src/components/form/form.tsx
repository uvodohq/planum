import React from 'react'
import type { FieldValues } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

import type { GenericFormHandlersReturnType } from './types'

export interface FormProps<T extends FieldValues, C>
  extends GenericFormHandlersReturnType<T, C> {
  children: React.ReactNode
  canShowPrompt: boolean
  novalidate?: boolean
}

export const Form = <T extends FieldValues, C>(props: FormProps<T, C>) => {
  const {
    form,
    onSubmit,
    //
    // canShowPrompt,
    // showPrompt,
    isDisabled,
    children,
    preventFormSubmitOnEnter = false,
    novalidate = true,
  } = props

  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit}
        style={{
          pointerEvents: isDisabled ? 'none' : 'auto',
          minHeight: 'inherit',
        }}
        noValidate={novalidate}>
        <fieldset
          disabled={isDisabled}
          style={{
            minHeight: 'inherit',
            border: 'none',
            padding: 0,
          }}>
          {children}
        </fieldset>

        {/* Fake button to submit on enter press */}
        <button
          style={{
            display: 'none',
          }}
          type="submit"
          onClick={(e) => {
            if (preventFormSubmitOnEnter) {
              e.preventDefault()
              e.stopPropagation()
            }
          }}
        />
      </form>
    </FormProvider>
  )
}
