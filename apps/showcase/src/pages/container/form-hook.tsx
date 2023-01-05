import { Box, Button, Stack } from '@uvodohq/planum'
import { useEffect, useMemo, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  EditorField,
  Form,
  NumberField,
  PasswordField,
  schemas,
  TextField,
  UrlField,
  useFormHandlers,
} from '../../components/form'
import { DEFAULT_NUMBER } from '../../components/form/schemas'

function useInitialValues() {
  const [inc, setState] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setState((prev) => prev + 1)
    }, 5000)
  }, [])

  const initialValues = useMemo(() => {
    return {
      title: '',
      password: '',
      facebook_url: '',
      whatsapp: '',
      amountNumber: 123, //DEFAULT_NUMBER,
      amountNull: '', //DEFAULT_NUMBER,
      price: DEFAULT_NUMBER,
      policy: '',
      inc,
    }
  }, [inc])

  return initialValues
}

const schema = z.object({
  title: z.string(),
  password: z.string(),
  facebook_url: schemas.url(),
  whatsapp: schemas.phone(),
  amountNumber: z.number().nullable(),
  price: schemas.number(),
  policy: z.string().min(20, { message: 'This field required aaaa' }),
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
    onlyDirtyValues: false,
    onSubmit(data, apiHandlers) {
      console.warn('FORM SUBMIT', data)
    },
    async onSuccess() {
      form.reset((prev) => prev)
    },
  })

  return (
    <Form {...handlers}>
      <Stack y={24} css={{ width: 444 }}>
        {/* <Button type="submit" isDisabled={!handlers.isDirty}>
          Submit
        </Button> */}

        <TextField name="title" label="Title" placeholder="Input Placeholder" />

        <PasswordField
          name="password"
          label="New Password"
          placeholder="Enter your password"
        />

        <UrlField
          name="facebook_url"
          prefix="/products/"
          placeholder="slug"
          label="URL"
        />

        <NumberField name="amountNumber" placeholder="12" label="Amount" />
        <NumberField name="price" placeholder="12.22" label="Price" />

        <EditorField name="policy" aria-label="Editor" label="Policy" />

        <Box css={{ mt: 222, d: 'flex', gap: 12 }}>
          <Button variant="secondary" onClick={() => form.reset()}>
            Reset
          </Button>

          <Button type="submit" isDisabled={!handlers.isDirty}>
            Submit
          </Button>
        </Box>
      </Stack>
    </Form>
  )
}
