import { Box, H1, Title } from '@uvodohq/planum'

import AutoCompleteExampleControlled from '../../components/auto-complete/auto-complete-controlled-example'
import { AutoCompleteTagsExample } from '../../components/auto-complete/auto-complete-tags-example'

import SelectExample from '../../components/select/select-example'
import SelectExampleAsync from '../../components/select/select-example-async'
import SelectExampleControlled from '../../components/select/select-example-controlled'
import SelectExampleCustomTrigger from '../../components/select/select-example-custom-trigger'
import SelectExampleMinimal from '../../components/select/select-example-minimal'
import SelectExampleSmallWidth from '../../components/select/select-example-small-width'
import { weightUnits } from '../../components/select/select-options'

const Grid = (props: any) => {
  return (
    <Box css={{ flex: 1, mb: 64 }}>
      <Title css={{ my: 16 }}>{props.title}</Title>
      <Box
        css={{
          display: 'flex',
          gap: '$24',
          mb: 55,
          w: '100%',
          overflow: 'hidden',
          p: 8,
          m: -8,
          '& > *': {
            flex: 1,
            overflow: 'hidden',
            p: 8,
            m: -8,
          },
        }}>
        {props.children}
      </Box>
    </Box>
  )
}

const SelectDemos = () => {
  return (
    <Box>
      <Grid title="With many options">
        <SelectExample />
        <SelectExample defaultValue={14} />
        <SelectExampleAsync />
        <Box />
      </Grid>

      <Grid title="With a few options">
        <SelectExampleMinimal />
        <SelectExampleMinimal defaultValue={1} />
        <Box />
        <Box />
      </Grid>

      <Grid title="With empty options">
        <SelectExample items={[]} />
        <Box />
        <Box />
        <Box />
      </Grid>

      <Grid title="With label and description">
        <SelectExampleMinimal label="Product status" />
        <SelectExampleMinimal
          label="Product status"
          description="This is a select description"
          defaultValue={14}
        />
        <Box />
        <Box />
      </Grid>

      <Grid title="Disabled">
        <SelectExample isDisabled />
        <SelectExample isDisabled defaultValue={14} />
        <Box />
        <Box />
      </Grid>

      <Grid title="With status">
        <SelectExample
          label="Country"
          errorMessage="Error message"
          status="error"
        />
        <SelectExample
          label="Country"
          successMessage="Success message"
          status="success"
        />
        <SelectExample
          label="Country"
          errorMessage="Error message with filled value"
          status="error"
          defaultValue={14}
        />
        <SelectExample
          label="Country"
          successMessage="Success message with filled value"
          status="success"
          defaultValue={14}
        />
      </Grid>

      <Grid title="Controlled">
        <SelectExample description="Uncontrolled" />
        <SelectExample
          value={14}
          description="Only value set, Can not be changed"
        />
        <SelectExampleControlled description="Full controlled select" />
        <Box />
      </Grid>

      <Grid title="Extra">
        <Box>
          <Box css={{ maxWidth: 100 }}>
            <SelectExampleSmallWidth label="Small width" />
          </Box>
        </Box>
        <SelectExample label="With loading" isLoading />
        <SelectExample
          label="With fallback label"
          fallbackLabel="Azerbaijan"
          value={14}
          items={[]}
          isLoading
          description="Show selected label while other options loading"
        />

        <SelectExampleCustomTrigger
          aria-label="label"
          placeholder="kg"
          items={weightUnits}
          label="Custom rendered trigger"
        />
      </Grid>

      <Grid>
        <SelectExample label="No match width" matchWidth={false} />
        <Box />
        <Box />
        <Box />
      </Grid>

      {/* Autocomplete */}
      <H1 css={{ mb: 66, fw: 700 }}>Autocomplete</H1>

      {/* <Grid>
        <AutoCompleteExampleControlled
          label="Country"
          errorMessage="Error message"
          status="error"
        />

        <AutoCompleteExampleControlled
          label="Country"
          errorMessage="Error message with filled value"
          status="error"
          defaultValue={'Azerbaijan'}
        />

        <AutoCompleteExampleControlled isDisabled label="Disabled" />
        <AutoCompleteExampleControlled isLoading label="Loading" />
      </Grid> */}

      {/* <Grid>
        <AutoCompleteExampleControlled />
        <AutoCompleteTagsExample />
        <AutoCompleteTagsExample
          errorMessage="Error message with filled value"
          status="error"
        />
      </Grid> */}
    </Box>
  )
}

export default SelectDemos
