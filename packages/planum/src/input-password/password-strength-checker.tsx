const defaultOptions = [
  {
    id: 0,
    value: 'Too weak',
    minDiversity: 0,
    minLength: 0,
    type: 'lowercase',
  },
  {
    id: 1,
    value: 'Weak',
    minDiversity: 1,
    minLength: 8,
    type: 'lowercase',
  },
  {
    id: 2,
    value: 'Good',
    minDiversity: 2,
    minLength: 8,
  },
  {
    id: 3,
    value: 'Strong',
    minDiversity: 3,
    minLength: 8,
  },
]

const passwordStrengthChecker = (
  password: string,
  options = defaultOptions,
) => {
  const passwordCopy = password || ''

  options[0].minDiversity = 0
  options[0].minLength = 0

  const rules = [
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

  const contains = rules
    .filter((rule) => new RegExp(`${rule.regex}`).test(passwordCopy))
    .map((rule) => rule.message)

  // console.log('strength.contains', strength)

  // strength.length = passwordCopy.length

  // const fulfilledOptions = options
  //   .filter((option) => strength.contains.length >= option.minDiversity)
  //   .filter((option) => strength.length >= option.minLength)
  //   .sort((o1, o2) => o2.id - o1.id)
  //   .map((option) => ({ id: option.id, value: option.value }))

  // Object.assign(strength, fulfilledOptions[0])

  return { contains, value: passwordCopy }
}

export { passwordStrengthChecker }
