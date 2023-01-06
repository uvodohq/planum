import {
  Box,
  Button,
  CheckboxGroup,
  Radio,
  Stack,
  styled,
  TagSelect,
} from '@uvodohq/planum'
import { useEffect, useMemo, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  AutoCompleteTagsField,
  CheckboxField,
  EditorField,
  Form,
  NumberField,
  PasswordField,
  RadioGroupField,
  schemas,
  SelectField,
  TagSelectField,
  TextField,
  ToggleField,
  UrlField,
  useFormHandlers,
} from '../../components/form'
import { DEFAULT_NUMBER } from '../../components/form/schemas'

const StyledTitle = styled('h1', {
  my: '$16',
})

const selectItems = [
  {
    id: 1,
    name: 'first',
  },
  {
    id: 2,
    name: 'second',
  },
]

const schema = z.object({
  title: z.string(),
  password: z.string(),
  facebook_url: schemas.url(),
  whatsapp: schemas.phone(),
  amountNumber: schemas.number(),
  amountNull: schemas.number(),
  price: schemas.number(),
  policy: z.string().min(20, { message: 'This field required' }),
  check_field: z.boolean(),
  toggle_field: z.boolean(),
  radio_field: z.string(),
  select_field: z.number(),
  auto_complete_field: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
  tag_select_field: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
})

type FormValues = z.infer<typeof schema>

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
      amountNull: null, //DEFAULT_NUMBER,
      price: DEFAULT_NUMBER,
      inc,
      policy: '',
      check_field: true,
      toggle_field: false,
      radio_field: 'first',
      select_field: 1,
      auto_complete_field: [{ id: 1, name: 'first' }],
      tag_select_field: [{ id: 1, name: 'tag 1' }],
    }
  }, [inc])

  return initialValues
}

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

        <NumberField
          name="amountNumber"
          placeholder="12"
          label="Amount initial number"
        />
        <NumberField
          name="amountNull"
          placeholder="12"
          label="Amount initial empty string"
        />

        <NumberField name="price" placeholder="12.22" label="Price" />

        <CheckboxField name="check_field">Form check field</CheckboxField>

        <CheckboxGroup></CheckboxGroup>

        <RadioGroupField name="radio_field" type="button">
          <Radio value="first">Radio 1</Radio>
          <Radio value="second">Radio 2</Radio>
          <Radio value="third">Radio 3</Radio>
        </RadioGroupField>

        <SelectField
          placeholder="Select one option"
          label="Select field"
          name="select_field"
          labelKey="name"
          items={selectItems}
        />

        <AutoCompleteTagsField
          label="Autocomplete field"
          labelKey="name"
          options={selectItems}
          name="auto_complete_field"
          placeholder='Type "first" or "second"'
        />

        <TagSelectField
          labelKey="name"
          placeholder="tshirt, oversize, black"
          name="tag_select_field"
          label="Tag field"
        />

        <ToggleField name="toggle_field" />

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

      <StyledTitle>Form dirty fields</StyledTitle>
      <pre>{JSON.stringify(form.formState.dirtyFields, null, 2)}</pre>
      <StyledTitle>Form values</StyledTitle>
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
    </Form>
  )
}
