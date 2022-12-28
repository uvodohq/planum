import { Box, Button } from '@uvodohq/planum'
import { useMemo } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  NumberField,
  PasswordField,
  schemas,
  TextField,
  UrlField,
  useFormHandlers,
} from '../../components/form'
import { DEFAULT_NUMBER } from '../../components/form/schemas'

const RowBox = (props: any) => (
  <Box
    css={{
      display: 'flex',
      mb: 30,
      gap: 40,
      '& > *': { flex: 1 },
    }}
    {...props}
  />
)

function useInitialValues() {
  const initialValues = useMemo(() => {
    return {
      title: '',
      password: '',
      facebook_url: '',
      whatsapp: '',
      amount: DEFAULT_NUMBER,
    }
  }, [])

  return initialValues
}

const schema = z.object({
  title: z.string(),
  password: z.string(),
  amount: schemas.number(),
  facebook_url: schemas.url(),
  whatsapp: schemas.phone(),
})

type FormValues = z.infer<typeof schema>

export default function FormHookContainer() {
  const initialValues = useInitialValues()
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  })

  const handlers = useFormHandlers({
    form,
    initialValues,
    onlyDirtyValues: true,
    onSubmit(data, apiHandlers) {},
    async onSuccess() {
      form.reset((prev) => prev)
    },
  })

  return (
    <Form {...handlers}>
      <RowBox>
        <TextField name="title" label="Title" placeholder="Input Placeholder" />

        <PasswordField
          name="password"
          label="New Password"
          placeholder="Enter your password"
        />
      </RowBox>

      <RowBox>
        <UrlField
          name="facebook_url"
          prefix="/products/"
          placeholder="slug"
          label="URL"
        />

        <NumberField name="amount" placeholder="12" label="Amount" />
      </RowBox>

      <Button type="submit" isDisabled={!handlers.isDirty}>
        Submit
      </Button>
    </Form>
  )
}
