/**
 * Color Palette
 *
 * https://www.figma.com/file/kbpVvxjnwvLHT1TSmy8XtZ/Uvodo---Dashboard-v1.0?node-id=15926%3A35018
 */

export const palette = {
  white0: '#ffffff',
  seashell: '#f9f5f2', // light black
  gray500: '#060606',

  purple25: '#f9f9fe',
  purple50: '#f3f2fd',
  purple100: '#e7e4fa',
  purple200: '#b8aef1',
  purple300: '#a99dee',
  purple400: '#998beb',
  purple500: '#8979e8',
  purple600: '#624ce0',
  purple700: '#5341be',
  purple800: '#4939a8',
  purple900: '#403192',

  pink25: '#fffcff',
  pink50: '#fff9fe',
  pink100: '#fff2fc',
  pink200: '#ffe5fa',
  pink300: '#ffd8f8',
  pink400: '#ff8ae8',

  yellow25: '#fffefc',
  yellow50: '#fffdf8',
  yellow100: '#fffbf1',
  yellow200: '#fff7e3',
  yellow300: '#fff3d4',
  yellow400: '#ffde68',

  green25: '#fafefa',
  green50: '#f4fcf4',
  green100: '#e8f9e8',
  green200: '#c7efc6',
  green300: '#a2e5a1',
  green400: '#77db79',
  green500: '#51d258',
  green600: '#20c934',
  green700: '#0db92a',
  green800: '#00a61b',
  green900: '#007500',

  blue25: '#f8fdff',
  blue50: '#f0faff',
  blue100: '#e1f5fe',
  blue200: '#b3e5fc',
  blue300: '#81d4fa',
  blue400: '#4fc3f7',
  blue500: '#29b6f6',
  blue600: '#03a9f4',
  blue700: '#039be5',
  blue800: '#0288d1',
  blue900: '#01579b',

  orange25: '#fffef8',
  orange50: '#fffcf0',
  orange100: '#fef8e1',
  orange200: '#fdecb3',
  orange300: '#fddf82',
  orange400: '#fcd450',
  orange500: '#fbc92a',
  orange600: '#fbc00d',
  orange700: '#fbb205',
  orange800: '#fba003',
  orange900: '#fa7000',

  red25: '#fffafb',
  red50: '#fff5f7',
  red100: '#ffebee',
  red200: '#ffcdd2',
  red300: '#ef9a9a',
  red400: '#e57373',
  red500: '#ef5350',
  red600: '#f44336',
  red700: '#e53935',
  red800: '#d32f2f',
  red900: '#b71c1c',

  black25: '#fdfdfd',
  black50: '#fbfbfb',
  black100: '#f6f6f6',
  black200: '#eaeaea',
  black300: '#dcdcdc',
  black400: '#c7c7c7',
  black500: '#a2a2a2',
  black600: '#808080',
  black700: '#424242',
  black800: '#212121',
  black900: '#000000',
}

export const gradients = {
  blueGradient: 'linear-gradient(254.09deg, #624CE0 0%, #03A9F4 100%)',
  orangeGradient: 'linear-gradient(254.09deg, #FBB205 0%, #EF5350 100%)',
  lightBlueGradient: 'linear-gradient(254.09deg, #29B6F6 0%, #0288D1 100%)',
  pinkGradient: 'linear-gradient(254.09deg, #8979E8 0%, #EF5350 100%)',
  greenGradient: 'linear-gradient(254.09deg, #29B6F6 0%, #51D258 100%)',
}

// Default theme colors - semantic tokens
export const primaryColors = {
  primary25: '$purple25',
  primary50: '$purple50',
  primary100: '$purple100',
  primary200: '$purple200',
  primary300: '$purple300',
  primary400: '$purple400',
  primary500: '$purple500',
  primary600: '$purple600',
  primary700: '$purple700',
  primary800: '$purple800',
  primary900: '$purple900',
}

export const secondaryColors = {
  secondary25: '$pink25',
  secondary50: '$pink50',
  secondary100: '$pink100',
  secondary200: '$pink200',
  secondary300: '$pink300',
  secondary400: '$pink400',
}

export const tertiaryColors = {
  tertiary25: '$yellow25',
  tertiary50: '$yellow50',
  tertiary100: '$yellow100',
  tertiary200: '$yellow200',
  tertiary300: '$yellow300',
  tertiary400: '$yellow400',
}

export const successColors = {
  success25: '$green25',
  success50: '$green50',
  success100: '$green100',
  success200: '$green200',
  success300: '$green300',
  success400: '$green400',
  success500: '$green500',
  success600: '$green600',
  success700: '$green700',
  success800: '$green800',
  success900: '$green900',
}

export const infoColors = {
  info25: '$blue25',
  info50: '$blue50',
  info100: '$blue100',
  info200: '$blue200',
  info300: '$blue300',
  info400: '$blue400',
  info500: '$blue500',
  info600: '$blue600',
  info700: '$blue700',
  info800: '$blue800',
  info900: '$blue900',
}

export const warningColors = {
  warning25: '$orange25',
  warning50: '$orange50',
  warning100: '$orange100',
  warning200: '$orange200',
  warning300: '$orange300',
  warning400: '$orange400',
  warning500: '$orange500',
  warning600: '$orange600',
  warning700: '$orange700',
  warning800: '$orange800',
  warning900: '$orange900',
}

export const dangerColors = {
  danger25: '$red25',
  danger50: '$red50',
  danger100: '$red100',
  danger200: '$red200',
  danger300: '$red300',
  danger400: '$red400',
  danger500: '$red500',
  danger600: '$red600',
  danger700: '$red700',
  danger800: '$red800',
  danger900: '$red900',
}

export const surfaceColors = {
  surface25: '$black25',
  surface50: '$black50',
  surface100: '$black100',
  surface200: '$black200',
  surface300: '$black300',
  surface400: '$black400',
  surface500: '$black500',
  surface600: '$black600',
  surface700: '$black700',
  surface800: '$black800',
  surface900: '$black900',
}

export const baseColors = {
  primary: '$purple500',
  secondary: '$pink400',
  tertiary: '$yellow400',
}

export const utilityColors = {
  success: '$green500',
  info: '$blue500',
  warning: '$orange500',
  danger: '$red500',
}

export const neutralColors = {
  white: '$white0',
  surface: '$seashell',
  black: '$black900',
}

export const textColors = {
  textDark: '$gray500',
  textMedium: '$black800',
  textSuccess: '$green500',
  textDanger: '$red500',
  textBrand: '$purple600',
  textLight: '$black600',
  textDisabled: '$black500',
  textInfo: '$blue400',
}

export const colors = {
  // using palette colors directly not recommended, use semantic tokens instead
  ...palette,

  // Semantic Brand Colors
  ...baseColors,
  ...utilityColors,
  ...neutralColors,

  ...primaryColors,
  ...secondaryColors,
  ...tertiaryColors,
  ...successColors,
  ...infoColors,
  ...warningColors,
  ...dangerColors,
  ...surfaceColors,
  ...textColors,

  ...gradients,
}
