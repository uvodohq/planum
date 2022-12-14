import {
  Box,
  Button,
  CheckboxGroupItem,
  Paragraph,
  Radio,
  Stack,
  styled,
} from '@uvodohq/planum'
import { useEffect, useMemo, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  AutoCompleteTagsField,
  CheckboxField,
  CheckboxGroupField,
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

const StyledChecksContainer = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',
  gap: '$16',
  mt: '$24',
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

const requiredSchema = z.string().min(1, { message: 'This field required' })

const schema = z.object({
  title: requiredSchema,
  password: requiredSchema,
  facebook_url: schemas.url(),
  whatsapp: schemas.phone(),
  amountNumber: schemas.number(),
  amountNull: schemas.number(),
  price: schemas.number(),
  policy: requiredSchema,
  checkbox_item_field: z.boolean(),
  toggle_field: z.boolean(),
  radio_field: requiredSchema,
  select_field: z.number(),
  auto_complete_field: z.array(
    z.object({
      id: z.number(),
      name: requiredSchema,
    }),
  ),
  tag_select_field: z.array(
    z.object({
      id: z.number(),
      name: requiredSchema,
    }),
  ),
  checkbox_group_field: z.array(requiredSchema),
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
      checkbox_item_field: true,
      toggle_field: false,
      radio_field: 'first',
      select_field: 1,
      auto_complete_field: [{ id: 1, name: 'first' }],
      tag_select_field: [{ id: 1, name: 'tag 1' }],
      checkbox_group_field: [],
    }
  }, [inc])

  return initialValues
}

export default function FormHookContainer() {
  return <Container />
}

function Container() {
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
        <Button type="submit" isDisabled={!handlers.isDirty}>
          Submit {initialValues.inc}
        </Button>

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

        <CheckboxField name="checkbox_item_field">
          Form check field
        </CheckboxField>

        <CheckboxGroupField
          name="checkbox_group_field"
          label="Checkbox group field">
          <Paragraph>Checkbox group field</Paragraph>
          <StyledChecksContainer>
            {selectItems.map(({ id, name }) => {
              return (
                <CheckboxGroupItem
                  value={String(id)}
                  label={name}
                  aria-label={name}
                  key={id}
                />
              )
            })}
          </StyledChecksContainer>
        </CheckboxGroupField>

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

      <StyledTitle>Form errors</StyledTitle>
      <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
      <StyledTitle>Form dirty fields</StyledTitle>
      <pre>{JSON.stringify(form.formState.dirtyFields, null, 2)}</pre>
      <StyledTitle>Form values</StyledTitle>
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
    </Form>
  )
}
