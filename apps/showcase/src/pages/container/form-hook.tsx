import {
  Badge,
  Box,
  Button,
  CheckboxGroupItem,
  Flex,
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
  TextareaField,
  TextField,
  ToggleField,
  UrlField,
  useFormHandlers,
  PriceField,
  QuantityField,
  PercentField,
  PhoneInputField,
} from '../../components/form'
import { DEFAULT_NUMBER } from '../../components/form/schemas'
import { Subheader } from '@uvodohq/planum/src'

const StyledTitle = styled(Subheader, {
  my: '$16',
  borderBottom: '1px solid',
  '& + &': {
    mt: 50,
  },
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
  text_field: requiredSchema,
  password_field: requiredSchema,
  facebook_url: schemas.url(),
  amountNumber: schemas.number(),
  amountNull: schemas.number(),
  price_field: schemas.number(),
  quantity_field: schemas.number(),
  percent_field: schemas.number(),
  editor_field: z.union([z.string(), z.null()]),
  checkbox_item_field: z.boolean(),
  toggle_field: z.boolean(),
  radio_field: requiredSchema,
  textarea_field: requiredSchema,
  select_field: z.number(),
  phone_field: z.string(),
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

const filledValues = {
  text_field: 'Uvodo',
  password_field: 'admin123',
  facebook_url: 'https://uvodo.com/',
  amountNumber: 123,
  amountNull: null, //DEFAULT_NUMBER,
  price_field: DEFAULT_NUMBER,
  quantity_field: DEFAULT_NUMBER,
  percent_field: DEFAULT_NUMBER,
  inc: 2,
  editor_field: null,
  checkbox_item_field: true,
  toggle_field: false,
  radio_field: 'first',
  textarea_field: '',
  select_field: null,
  phone_field: null,
  auto_complete_field: [{ id: 1, name: 'first' }],
  tag_select_field: [{ id: 1, name: 'tag 1' }],
  checkbox_group_field: [],
}

function useInitialValues() {
  const [inc, setState] = useState(0)

  // useEffect(() => {
  //   setInterval(() => {
  //     setState((prev) => prev + 1)
  //   }, 5000)
  // }, [])

  const initialValues = useMemo(() => {
    return {
      text_field: '',
      password_field: '',
      facebook_url: '',
      amountNumber: 123, //DEFAULT_NUMBER,
      amountNull: null, //DEFAULT_NUMBER,
      price_field: DEFAULT_NUMBER,
      quantity_field: DEFAULT_NUMBER,
      percent_field: DEFAULT_NUMBER,
      inc,
      editor_field: null,
      checkbox_item_field: true,
      toggle_field: false,
      radio_field: 'first',
      textarea_field: '',
      select_field: null,
      phone_field: null,
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
    onSubmit(data) {
      form.reset()
      console.warn('FORM SUBMIT', data)
    },
    async onSuccess() {
      form.reset((prev) => prev)
    },
  })

  const FormButtons = () => (
    <Box css={{ d: 'flex', gap: 12, py: 24 }}>
      <Button variant="danger" onClick={() => form.reset()}>
        Reset
      </Button>

      <Button
        onClick={() => {
          form.reset(filledValues)
        }}>
        Fill
      </Button>

      <Button
        onClick={async () => {
          await form.trigger()

          const firstErrorField = Object.keys(form.formState.errors)[0]

          if (firstErrorField) {
            await form.trigger(firstErrorField as any, {
              shouldFocus: true,
            })
          }
        }}>
        Validate
      </Button>

      <Button type="submit" isDisabled={!handlers.isDirty}>
        Submit
      </Button>
    </Box>
  )

  return (
    <Form {...handlers}>
      <FormButtons />
      <Flex css={{ gap: 64, justifyContent: 'space-between' }}>
        <Stack y={24} css={{ flex: 1 }}>
          <Badge>render {initialValues.inc}</Badge>

          <TextField
            name="text_field"
            label="Title"
            placeholder="Input Placeholder"
          />

          <PasswordField
            name="password_field"
            label="New Password"
            placeholder="Enter your password_field"
          />

          <UrlField
            name="facebook_url"
            prefix="/products/"
            placeholder="slug"
            label="URL"
          />

          <TextareaField
            name="textarea_field"
            label="Textarea field"
            placeholder="Type something..."
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

          <PriceField
            name="price_field"
            placeholder="12.22"
            label="Price"
            aria-label="Price"
          />
          <QuantityField
            name="quantity_field"
            label="Quantity"
            aria-label="Quantity"
          />

          <PercentField
            name="percent_field"
            label="Percent"
            aria-label="Percent"
          />

          <ToggleField
            name="toggle_field"
            aria-label="Toggle"
            labelTextOff="activate"
            labelTextOn="deactivate"
          />
        </Stack>
        <Stack y={32} css={{ flex: 1 }}>
          <Box>
            <Paragraph>Checkbox item</Paragraph>
            <CheckboxField
              name="checkbox_item_field"
              aria-label="Checkbox"
              css={{ mt: 0 }}>
              add
            </CheckboxField>
          </Box>

          <CheckboxGroupField
            name="checkbox_group_field"
            label="Checkbox group field"
            aria-label="Checkbox group">
            <Paragraph>Checkbox group field</Paragraph>
            <StyledChecksContainer css={{ mt: 0 }}>
              {selectItems.map(({ id, name }) => {
                return (
                  <CheckboxGroupItem
                    value={String(id)}
                    label={name}
                    aria-label="Checkbox item"
                    key={id}
                  />
                )
              })}
            </StyledChecksContainer>
          </CheckboxGroupField>

          <Paragraph>Radio group field</Paragraph>
          <RadioGroupField
            name="radio_field"
            type="button"
            aria-label="Radio group">
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

          <PhoneInputField
            name="phone_field"
            label="Phone field"
            placeholder="Enter number"
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

          <EditorField name="editor_field" aria-label="Editor" label="Policy" />
        </Stack>
      </Flex>

      <FormButtons />

      <Box
        css={{
          display: 'flex',
          gap: '$24',
          justifyContent: 'space-between',
          p: '$24',
          bg: '$surface800',
          color: '$surface50',
          font: 'Consolas',
          fontSize: 13,
          lineHeight: 1.4,

          '&>div': {
            flex: 1,
            whiteSpace: 'pre-wrap',
          },
        }}>
        <Box>
          <StyledTitle>Form values:</StyledTitle>
          <pre>
            <code>{JSON.stringify(form.watch(), null, 4)}</code>
          </pre>
        </Box>
        <Box>
          <StyledTitle>Form errors:</StyledTitle>
          <pre>
            <code>{JSON.stringify(form.formState.errors, null, 4)}</code>
          </pre>
        </Box>
        <Box>
          <StyledTitle>Form dirty fields:</StyledTitle>
          <pre>
            <code>{JSON.stringify(form.formState.dirtyFields, null, 4)}</code>
          </pre>
        </Box>
      </Box>
    </Form>
  )
}
