import {
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
} from '../../components/form'
import { DEFAULT_NUMBER } from '../../components/form/schemas'
import { Subheader } from '@uvodohq/planum/src'

const StyledTitle = styled(Subheader, {
  my: '$16',

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

const items = [
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
  url_field: schemas.url(),
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
  select_field: z.number().nullable(),
  auto_complete_tags_field: z.array(
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
      text_field: '',
      password_field: '',
      url_field: '',
      amountNumber: 123, //DEFAULT_NUMBER,
      amountNull: null, //DEFAULT_NUMBER,
      price_field: DEFAULT_NUMBER,
      quantity_field: DEFAULT_NUMBER,
      percent_field: DEFAULT_NUMBER,
      inc,
      editor_field: null,
      checkbox_item_field: false,
      toggle_field: false,
      radio_field: '',
      textarea_field: '',
      select_field: null,
      auto_complete_tags_field: [],
      tag_select_field: [],
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
  const [isDisabled, setIsDisabled] = useState(false)

  const handlers = useFormHandlers({
    form,
    initialValues,
    onlyDirtyValues: false,
    onSubmit(data) {
      form.reset()
      setIsDisabled(false)
      console.warn('FORM SUBMIT', data)
    },
    async onSuccess() {
      form.reset((prev) => prev)
    },
  })

  function onFillForm() {
    form.reset(
      {
        text_field: 'John',
        password_field: '123',
        url_field: 'https://www.google.com/',
        amountNumber: 613,
        amountNull: 956,
        price_field: 39717,
        quantity_field: 444,
        percent_field: 25,
        editor_field: '<b>text is bold</b>',
        checkbox_item_field: true,
        toggle_field: true,
        radio_field: 'second',
        textarea_field: 'Have fun coding!',
        select_field: 2,
        auto_complete_tags_field: [
          { id: 1, name: 'first' },
          { id: 2, name: 'second' },
        ],
        tag_select_field: [
          { id: 1, name: 'tag 1' },
          { id: 2, name: 'tag 2' },
        ],
        checkbox_group_field: ['1', '2'],
      },
      {
        keepDefaultValues: true,
        keepDirty: true,
      },
    )
    setIsDisabled(true)
  }

  return (
    <Form {...handlers}>
      <Flex css={{ gap: 64, justifyContent: 'space-between' }}>
        <Stack y={24} css={{ flex: 1 }}>
          <Button type="submit" isDisabled={!isDisabled && !handlers.isDirty}>
            Submit {initialValues.inc}
          </Button>

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

          <UrlField name="url_field" placeholder="Enter url" label="URL" />

          <NumberField
            name="amountNumber"
            placeholder="Enter a number"
            label="Amount initial number"
          />
          <NumberField
            name="amountNull"
            placeholder="Enter a number"
            label="Amount initial null"
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
              {items.map(({ id, name }) => {
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

          <TextareaField
            name="textarea_field"
            label="Textarea field"
            placeholder="Type something..."
          />

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
            items={items}
          />

          <AutoCompleteTagsField
            label="Autocomplete field"
            labelKey="name"
            options={items}
            name="auto_complete_tags_field"
            placeholder='Type "first" or "second"'
          />

          <TagSelectField
            labelKey="name"
            placeholder="tshirt, oversize, black"
            name="tag_select_field"
            label="Tag field"
          />

          <ToggleField
            name="toggle_field"
            aria-label="Toggle"
            labelTextOff="activate"
            labelTextOn="deactivate"
          />

          <EditorField name="editor_field" aria-label="Editor" label="Policy" />
        </Stack>
      </Flex>

      <Flex css={{ alignItems: 'center', mt: 64, gap: 12 }}>
        <Button
          variant="secondary"
          onClick={() => {
            form.reset()
            setIsDisabled(false)
          }}>
          Reset
        </Button>

        <Button type="submit" isDisabled={!isDisabled && !handlers.isDirty}>
          Submit
        </Button>

        <Button type="button" variant="flat" compact onClick={onFillForm}>
          Fill form
        </Button>
      </Flex>

      <Flex css={{ gap: '$24', justifyContent: 'space-between', mt: '$24' }}>
        <Box>
          <StyledTitle>Form values:</StyledTitle>
          <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
        </Box>
        <Box>
          <StyledTitle>Form errors:</StyledTitle>
          <pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
        </Box>
        <Box>
          <StyledTitle>Form dirty fields:</StyledTitle>
          <pre>{JSON.stringify(form.formState.dirtyFields, null, 2)}</pre>
        </Box>
      </Flex>
    </Form>
  )
}
