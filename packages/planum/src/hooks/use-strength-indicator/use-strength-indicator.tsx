const defaultOptions = [
  {
    regex: '[a-z]',
    message: 'lowercase',
  },
  {
    regex: '[A-Z]',
    message: 'uppercase',
  },
  {
    regex: '[0-9]',
    message: 'number',
  },
]

function strengthIndicator(value = '', options = defaultOptions) {
  const contains = options
    .filter((rule) => new RegExp(`${rule.regex}`).test(value))
    .map((rule) => rule.message)

  return { contains, value }
}

export function useStrengthIndicator() {
  return strengthIndicator
}
