import { useState } from 'react'
import { Box, Textarea } from '@uvodohq/planum'

const RowBox = (props: any) => (
  <Box
    css={{ display: 'flex', mb: 30, gap: 40, '&>*': { flex: 1 } }}
    {...props}
  />
)

const TextareaExample = () => {
  const [value, setValue] = useState('')
  const [state, setState] = useState<any>()

  return (
    <Textarea
      label="Textarea Example"
      description="This is a textarea real example"
      successMessage="Success message, You did it!"
      errorMessage="Error message, at least 5 caracters needed"
      placeholder="Try to write to check states"
      status={state}
      value={value}
      onChange={(value) => {
        if (value.length < 5) {
          setState('error')
        } else {
          setState('success')
        }
        if (!value) setState('normal')
        setValue(value)
      }}
    />
  )
}

export default function TextareaContainer() {
  return (
    <>
      {/* With Description Message */}
      <RowBox>
        <Box>
          <Textarea placeholder="Textarea Placeholder" aria-label="textarea" />
        </Box>

        <Box>
          <Textarea
            placeholder="Textarea Placeholder"
            aria-label="textarea"
            disabled
          />
        </Box>
      </RowBox>

      <RowBox>
        <Box>
          <Textarea
            label="Label"
            placeholder="Textarea Placeholder"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut pharetra sit posuere"
          />
        </Box>

        <Box>
          <Textarea label="Label" placeholder="Textarea Placeholder" disabled />
        </Box>
      </RowBox>

      {/* With Error Message */}
      <RowBox>
        <Box>
          <Textarea
            label="Label"
            description="Description message"
            placeholder="Textarea Placeholder"
          />
        </Box>

        <Box>
          <Textarea
            label="Label"
            errorMessage="Error message"
            placeholder="Textarea Placeholder"
            status="error"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut pharetra sit posuere"
          />
        </Box>
      </RowBox>

      <RowBox>
        <Box>
          <Textarea
            label="Label"
            successMessage="Success message"
            placeholder="Textarea Placeholder"
            status="success"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut pharetra sit posuere"
          />
        </Box>

        <Box>
          <TextareaExample />
        </Box>
      </RowBox>
    </>
  )
}
