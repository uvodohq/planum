import { useNumberFormatter } from '@react-aria/i18n'

import { Currency } from '../form/types'

export function isNumber(num?: any) {
  return typeof num === 'number' && !Number.isNaN(num)
}

export function useFormatCurrency(customCurrency?: Currency) {
  const defaultCurrency = {
    code: 'USD',
    fraction_digits: 2,
  }

  const usedCurrency = customCurrency || defaultCurrency

  const formatter = useNumberFormatter({
    style: usedCurrency.code ? 'currency' : 'decimal',
    currency: usedCurrency.code,
    currencyDisplay: 'symbol',
    minimumFractionDigits: usedCurrency.fraction_digits,
    maximumFractionDigits: usedCurrency.fraction_digits,
  })

  return {
    format: (value: any) => formatter.format(value),
    currency: usedCurrency,
  }
}
