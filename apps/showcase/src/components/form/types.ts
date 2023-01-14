import type {
  FieldValues,
  SubmitErrorHandler,
  UseFormReturn,
} from 'react-hook-form'

import { useFormHandlers } from './use-form-handlers'

export interface UseFormHandlersProps<TFieldValues extends FieldValues, C> {
  /**
   * The form instance returned by `useForm`.
   */
  form: UseFormReturn<TFieldValues, C>

  /**
   * must be memoized object qith useMemo
   * needs to provide `initialValues`. hook form, cannot reset form when initialValues changes.
   */
  initialValues?: TFieldValues

  /**
   * get only dirty values on Submit, usefull for PUT requests
   * to submit only modified fields
   * @default false
   */
  onlyDirtyValues?: boolean

  /**
   * when api calls are in loading state, disable form
   */
  isFormBusy?: boolean

  /**
   * get from react-queries .isSuccess prop
   */
  isSuccess?: boolean

  /**
   * Show prompt modal when user leaves the page while form has unsaved dirty values
   */
  showPrompt?: boolean

  /**
   * prevent form submit on enter key press when button exist inside form. it is native browser feature.
   * if this this not work, be check any button inside form
   */
  preventFormSubmitOnEnter?: boolean

  /**
   * form submit handler
   */
  onSubmit: (
    data: TFieldValues,
    apiHandlers: {
      onError: (apiError: any) => void
      onSuccess: (data: any) => void
    },
  ) => void

  /**
   * function used as api error handler
   */
  onError?: (apiError: any) => void

  /**
   * function used as api success handler.
   */
  onSuccess?: (data: any) => void
  onInvalid?: SubmitErrorHandler<TFieldValues>
}

// helper types to get generic function return types
// @see https://dirask.com/posts/TypeScript-ReturnType-with-generic-function-jmyd0j
class Wrapper<T extends FieldValues, C> {
  mediate = (props: any) => useFormHandlers<T, C>(props)
}

export type GenericFormHandlersReturnType<
  T extends FieldValues,
  C,
> = ReturnType<Wrapper<T, C>['mediate']>
