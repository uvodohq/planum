import type { UseFormReturn } from 'react-hook-form'

/**
 * api form field error path comes like below format:
 * [variants][0][cost_per_item]
 *
 * we need replace array brackets with dots, hook form uses dots to access objects props or array index
 * variants.0.cost_per_item
 *
 */
function parseFieldPath(field = '') {
  return field[0] === '[' ? field?.replace(/[.[\]]+/g, '.').slice(1, -1) : field
}

// TODO: fix api error type
export function useApiFormErrorResolver(form: UseFormReturn<any, any>) {
  return (apiError: any) => {
    const apiData = apiError?.response?.data
    const isFormValidationError = apiData?.errors?.length > 0

    if (!isFormValidationError) return

    const errors = apiData.errors?.map((error) => ({
      type: 'server',
      message: error.title,
      name: parseFieldPath(error.field),
    }))

    errors.forEach(({ name, type, message }) =>
      form.setError(
        name,
        { type, message },
        {
          shouldFocus: true,
        },
      ),
    )
  }
}
