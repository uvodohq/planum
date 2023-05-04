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

export interface Currency {
  name: string
  code:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BOV'
    | 'BRL'
    | 'BSD'
    | 'BTN'
    | 'BWP'
    | 'BYN'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHE'
    | 'CHF'
    | 'CHW'
    | 'CLF'
    | 'CLP'
    | 'CNY'
    | 'COP'
    | 'COU'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GEL'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRU'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MXV'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STN'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'USN'
    | 'UYI'
    | 'UYU'
    | 'UYW'
    | 'UZS'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XCD'
    | 'XOF'
    | 'XPF'
    | 'YER'
    | 'ZAR'
    | 'ZMW'
    | 'ZWL'
  symbol: string
  fraction_digits: number
}
