import type { InputNumberProps } from '@uvodohq/planum'
import type { UseControllerProps } from 'react-hook-form'

import { useFormatCurrency } from '../../format-currency/format-currency'
import { Currency } from '../types'
import { NumberField } from './number-field'

interface PriceFieldProps extends InputNumberProps, UseControllerProps<any> {
  name: string
  defaultValue?: number
  customCurrency?: Currency
}

export function PriceField(props: PriceFieldProps) {
  const { customCurrency, ...rest } = props
  const { currency, format } = useFormatCurrency(customCurrency)
  const precision = currency?.fraction_digits
  const placeholder = (0).toFixed(precision)

  return (
    <NumberField
      placeholder={placeholder}
      suffix={currency.code}
      min={0}
      max={999_999_999}
      precision={precision}
      format={format}
      {...rest}
    />
  )
}
