import { useUpdateEffect } from '@uvodohq/planum'
import type { FormEvent } from 'react'
import type { FieldValues, SubmitHandler } from 'react-hook-form'

import getDirtyFormValues from './get-dirty-form-values'
import type { UseFormHandlersProps } from './types'
import { useApiFormErrorResolver } from './use-api-form-error-resolver'

export const useFormHandlers = <T extends FieldValues, C>(
  props: UseFormHandlersProps<T, C>,
) => {
  const onApiError = useApiFormErrorResolver(props.form)

  const {
    form,
    onlyDirtyValues = false,
    preventFormSubmitOnEnter = false,
    isFormBusy = false,
    isSuccess,
    showPrompt,
    onSubmit,
    onError = onApiError,
    onInvalid,
    initialValues,
    ...rest
  } = props

  // must be destructed to subscribe formState Proxy.
  const { isDirty, dirtyFields, isSubmitting, errors } = form.formState

  const isDisabled = isSubmitting || isFormBusy || isSuccess

  if (import.meta.env.DEV) {
    console.log('__________________FORM DEBUG (only in Dev)__________________')
    console.info('FORM: zod validation.', errors)
    console.info('FORM: dirty fields.', dirtyFields)
    console.info('FORM: form props.', props)
    console.info('FORM: form values.', form.watch()) // rerender all form on each change
  }

  // TODO: show prompts when, user leaves while form isLoading. bug onSuccess navigate runs first
  const canShowPrompt = isDirty && !isDisabled

  const submitHandler: any = (e: FormEvent, continueNavigate: any) => {
    e?.preventDefault()
    e?.stopPropagation()

    const hasSubmitFn = typeof onSubmit === 'function'
    // const canSubmit = isDirty && hasSubmitFn //TODO:product form needs to be fixed
    const canSubmit = hasSubmitFn

    if (canSubmit) {
      const onValidSubmit: SubmitHandler<T> = (data) => {
        const apiHandlers = {
          onError,
          async onSuccess(data: unknown) {
            await Promise.resolve(props?.onSuccess?.(data))
            continueNavigate?.()
          },
        }

        if (onlyDirtyValues) {
          const changedData = getDirtyFormValues(dirtyFields, data) as T
          // needs to return, hook form can wait for isSubmitSuccessful or not
          return onSubmit(changedData, apiHandlers)
        }

        return onSubmit(data, apiHandlers)
      }

      return form.handleSubmit(onValidSubmit, onInvalid)(e)
    }

    return false
  }

  // hook form cannot reset form when initialValues changes. default values stays stale.
  // recommendation is provide full initialvalues each time when async data got and created new intial values.
  // see: https://github.com/react-hook-form/react-hook-form/pull/9052
  useUpdateEffect(() => {
    if (initialValues) {
      form.reset(initialValues, {
        keepDirtyValues: true, // if async new initial values comes from api, do not affect old edited values and form dirty state
      })
    }
  }, [initialValues])

  return {
    onSubmit: submitHandler,
    onInvalid,
    form,
    onlyDirtyValues,
    showPrompt,
    isFormBusy,
    isSuccess,
    canShowPrompt,
    isDisabled,
    preventFormSubmitOnEnter,
    isDirty,
    ...rest,
  }
}
