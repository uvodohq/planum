export function getPlaceholderValue(placeholder: string, numInputs: number) {
  if (typeof placeholder === 'string') {
    if (placeholder.length === numInputs) {
      return placeholder
    }

    if (placeholder.length > 0) {
      console.error(
        'Length of the placeholder should be equal to the number of inputs.',
      )
    }
  }
  return undefined
}

export function checkInputValueValid(value: string, isInputNum: boolean) {
  const isTypeValid = isInputNum
    ? !Number.isNaN(Number(value))
    : typeof value === 'string'
  return isTypeValid && value.trim().length === 1
}
