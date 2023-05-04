import { useState } from 'react'

import type { InputNumberProps } from '../input-number'
import { InputNumber } from '../input-number'
import type { Currency } from './format-currency'
import { useFormatCurrency } from './format-currency'

interface NumberProps extends InputNumberProps {
  customCurrency?: Currency
}

export const NumberInputExample = () => {
  const [value, setValue] = useState<number | string | undefined | null>()
  const [state, setState] = useState<any>()

  return (
    <InputNumber
      label="Label"
      description="Description goes here"
      successMessage="Success message"
      errorMessage="Error message"
      placeholder="23.99"
      status={state}
      value={value}
      onChange={(value) => {
        if (value && value < 5) {
          setState('error')
        } else {
          setState('success')
        }

        if (!value) setState('normal')

        setValue(value)
      }}
    />
  )
}

export function PriceInput(props: NumberProps) {
  const { customCurrency, ...rest } = props
  const [priceVal, setPriceVal] = useState<number | string | null>(null)

  const { currency, format } = useFormatCurrency(customCurrency)
  const precision = currency?.fraction_digits
  const placeholder = (0).toFixed(precision)

  return (
    <InputNumber
      placeholder={placeholder}
      aria-label="Price"
      suffix={currency.code}
      min={0}
      max={999_999_999}
      precision={precision}
      format={format}
      value={priceVal}
      onChange={(value) => setPriceVal(value)}
      {...rest}
    />
  )
}

export function QuantityInput(props?: NumberProps) {
  const [quantityVal, setQuantityVal] = useState<number | string | null>(null)

  return (
    <InputNumber
      placeholder="0"
      aria-label="Quantity"
      label="label"
      min={0}
      precision={0}
      value={quantityVal}
      onChange={(value) => setQuantityVal(value)}
      {...props}
    />
  )
}

export function PercentInput(props?: NumberProps) {
  const [percentVal, setPercentVal] = useState<number | string | null>(null)

  return (
    <InputNumber
      placeholder="0"
      aria-label="Percent"
      label="label"
      suffix="%"
      min={0}
      max={100}
      precision={0}
      value={percentVal}
      onChange={(value) => setPercentVal(value)}
      {...props}
    />
  )
}
