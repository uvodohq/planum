import * as z from 'zod'

export const genericRequiredMessage = 'This field is required.'

export const name = () =>
  z
    .string()
    .transform((value) => value.trim())
    .refine((value) => value.length > 0, {
      message: genericRequiredMessage,
    })

export const phone = () =>
  z.string().transform((value) => (value ? `+${value}` : undefined))

export const description = () =>
  z
    .string()
    .max(1000)
    .transform((value) => value.trim())

export const email = () =>
  z
    .string()
    .min(1, {
      message: genericRequiredMessage,
    })
    .email({ message: `This field must be a valid email` })
    .transform((value) => value.trim().toLowerCase())
    .refine((value) => value.length > 0, {
      message: genericRequiredMessage,
    })

export const image = () =>
  z
    .object({
      id: z.any(),
      src: z.string(),
    })
    .transform(({ id }) => id ?? null)
    .optional()
    .nullable()

/**
 *  user can submit empty urls. but api accepts empty string as invalid url. needs to be null
 */
export const url = () =>
  z
    .string()
    .trim()
    .url()
    .or(z.literal(''))
    .transform((value) => (value === '' ? null : value))

/**
 * Planum NumberInput - sets value to NaN if input is empty.
 * Needs to use string as default value to avoid NaN. which is HookForm cannot handle isDirty.
 */
export const DEFAULT_NUMBER = 'Not a number' as unknown as number

export const number = () => {
  const num = z.number().max(999999).nullish()

  const schema = z
    .preprocess((value) => (value === DEFAULT_NUMBER ? null : value), num)
    .transform((value) => (value === DEFAULT_NUMBER ? null : value))

  return schema
}
