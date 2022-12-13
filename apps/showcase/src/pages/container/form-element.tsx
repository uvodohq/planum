import {
  Box,
  Checkbox,
  CheckboxGroup,
  CheckboxGroupItem,
  H1,
  H3,
  Radio,
  RadioGroup,
  Title,
  Toggle,
} from '@uvodohq/planum'
import { useState } from 'react'

const list = [
  {
    label: 'Dog',
    value: 'dog',
  },
  {
    label: 'Panda',
    value: 'panda',
  },
  {
    label: 'Cat',
    value: 'cat',
    isDisabled: true,
  },
  {
    label: 'Snake',
    value: 'snake',
    isDisabled: true,
  },
]

const CheckGroup = () => {
  const [value, setValue] = useState<string[]>(['snake'])

  return (
    <div>
      <CheckboxGroup
        value={value}
        onChange={setValue}
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
        {list.map((item) => (
          <CheckboxGroupItem key={item.label} {...item} />
        ))}
      </CheckboxGroup>

      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  )
}

export default function FormElementsContainer() {
  return (
    <>
      {/* Checkbox */}
      <H1 css={{ mb: 66, fontWeight: 700 }} id="checkbox">
        Checkbox
      </H1>

      <Box css={{ display: 'flex', alignItems: 'center', gap: 40, mb: 28 }}>
        <Box>
          <Checkbox aria-label="label" />
        </Box>

        <Box>
          <Checkbox aria-label="label" label="Label" />
        </Box>

        <Box>
          <Checkbox defaultSelected>Selected</Checkbox>
        </Box>

        <Box>
          <Checkbox isIndeterminate>Indeterminate</Checkbox>
        </Box>

        <Box>
          <Checkbox isDisabled>Disabled</Checkbox>
        </Box>

        <Box>
          <Checkbox isDisabled isSelected>
            Disabled selected
          </Checkbox>
        </Box>

        <Box>
          <Checkbox isDisabled isIndeterminate>
            Disabled Indeterminate
          </Checkbox>
        </Box>
      </Box>

      <Title css={{ mb: 12, fw: '$medium' }}>With long labels</Title>
      <Box css={{ display: 'flex', gap: 40, mb: 22 }}>
        <Box>
          <Checkbox aria-label="label">
            Add a title and description to see how this product might appear in
            a search engine listing
          </Checkbox>
        </Box>

        <Box>
          <Checkbox aria-label="label" defaultSelected>
            Selected - Add a title and description to see how this product might
            appear in a search engine listing
          </Checkbox>
        </Box>

        <Box>
          <Checkbox aria-label="label" isDisabled>
            Disabled - Add a title and description to see how this product might
            appear in a search engine listing
          </Checkbox>
        </Box>

        <Box>
          <Checkbox aria-label="label" isIndeterminate>
            Indeterminate - Add a title and description to see how this product
            might appear in a search engine listing
          </Checkbox>
        </Box>
      </Box>

      {/* Checkbox group*/}
      <Title css={{ mb: 12, fw: '$medium' }}>Checkbox group</Title>

      <Box css={{ display: 'flex', alignItems: 'center', gap: 40, mb: 28 }}>
        <CheckGroup />
      </Box>

      {/* Switch/Toggles */}
      <H1 css={{ mb: 66, fontWeight: 700 }} id="switch">
        Switch
      </H1>

      <Box css={{ display: 'flex', gap: 200, mb: 128 }}>
        <Box css={{ minWidth: 100 }}>
          <H3 css={{ mb: 20 }}>Active</H3>
          <Box css={{ mb: 32 }}>
            <Toggle aria-label="label" />
          </Box>

          <Box>
            <Toggle aria-label="label" defaultSelected />
          </Box>
        </Box>

        <Box css={{}}>
          <H3 css={{ mb: 20 }}>Disabled</H3>
          <Box css={{ mb: 32 }}>
            <Toggle aria-label="label" isDisabled />
          </Box>

          <Box>
            <Toggle aria-label="label" defaultSelected isDisabled />
          </Box>
        </Box>
      </Box>

      {/* Radios */}
      <H1 css={{ mb: 66, fontWeight: 700 }} id="radio">
        Radio
      </H1>

      <Box css={{ display: 'flex', gap: 40, mb: 80 }}>
        <RadioGroup defaultValue="Selected" aria-label="label">
          <Box css={{ display: 'flex', gap: 40, mb: 80 }}>
            <Radio value="Regular">Regular</Radio>
            <Radio value="Selected">Selected</Radio>
            <Radio value="disabled" isDisabled>
              Disabled
            </Radio>
          </Box>
        </RadioGroup>
      </Box>

      {/* Radio Button Group */}
      <H1 css={{ mb: 66, fontWeight: 700 }}>Radio Button Group</H1>

      <Box css={{ display: 'flex', gap: 40, mb: 64 }}>
        <RadioGroup defaultValue="Selected" aria-label="label" type="button">
          <Radio value="Regular">Regular</Radio>
          <Radio value="Selected">Selected</Radio>
          <Radio value="disabled" isDisabled>
            Disabled
          </Radio>
          <Radio value="Focus">Focus</Radio>
        </RadioGroup>
      </Box>

      {/* Radio Button Group */}
      <Title>Full width</Title>
      <Box css={{ display: 'flex', gap: 40, mb: 128 }}>
        <RadioGroup
          defaultValue="Selected"
          aria-label="label"
          type="button"
          full>
          <Radio value="Regular">Regular</Radio>
          <Radio value="Selected">Selected</Radio>
          <Radio value="disabled" isDisabled>
            Disabled
          </Radio>
          <Radio value="Focus">Focus</Radio>
        </RadioGroup>
      </Box>
    </>
  )
}
