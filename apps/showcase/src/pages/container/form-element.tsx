import {
  Box,
  Checkbox,
  H1,
  H3,
  Radio,
  RadioGroup,
  Title,
  Toggle,
} from '@uvodohq/planum'

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
          <Checkbox aria-label="label" label="Regular" />
        </Box>

        <Box>
          <Checkbox aria-label="label" defaultSelected>
            Selected
          </Checkbox>
        </Box>

        <Box>
          <Checkbox aria-label="label" isDisabled>
            Disabled
          </Checkbox>
        </Box>

        <Box>
          <Checkbox aria-label="label" isIndeterminate>
            Indeterminate
          </Checkbox>
        </Box>
      </Box>

      <Title css={{ mb: 12, fw: '$medium' }}>With long labels</Title>
      <Box css={{ display: 'flex', gap: 40, mb: 128 }}>
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

      <Box css={{ display: 'flex', gap: 40, mb: 128 }}>
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
    </>
  )
}
