import { useState } from 'react'
import {
  Box,
  H3,
  InputNumber,
  InputPassword,
  InputSearch,
  InputUrl,
  Input,
} from '@uvodohq/planum'

import { CopyIcon, UserIcon } from '../../assets/icons'

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

const InputExample = () => {
  const [value, setValue] = useState('')
  const [state, setState] = useState<any>()

  return (
    <Input
      label="Input Real Example"
      description="This is a input real example"
      successMessage="Success message, You did it!"
      errorMessage="at least 5 caracters needed"
      placeholder="Try to validate status"
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
const InputSearchExample = () => {
  const [value, setValue] = useState('')
  const [state, setState] = useState<any>()

  return (
    <InputSearch
      label="Try to search"
      description="Write to test"
      successMessage="Success message, You did it!"
      errorMessage="At least 3 characters need to search"
      placeholder="Search products"
      status={state}
      value={value}
      isLoading={state === 'success'}
      onChange={(value) => {
        if (value.length < 3) {
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

export default function InputContainer() {
  const [number, setNumber] = useState()

  return (
    <>
      <H3 css={{ mb: 20 }}>Default</H3>

      {/* Empty Idle */}
      <RowBox>
        <Input aria-label="label" placeholder="Input Placeholder" autoFocus />
        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          rightIcon={<UserIcon />}
        />
        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
        />
        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          rightIcon={<CopyIcon />}
        />
      </RowBox>

      {/* Filled default value */}
      <RowBox>
        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          defaultValue="Input Text"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          rightIcon={<UserIcon />}
          defaultValue="Input Text"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          defaultValue="Input Text"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          rightIcon={<CopyIcon />}
          defaultValue="Input Text"
        />
      </RowBox>

      {/* Disabled */}
      <RowBox>
        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          defaultValue="Input Text"
          isDisabled
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          rightIcon={<UserIcon />}
          defaultValue="Input Text"
          isDisabled
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          isDisabled
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          rightIcon={<CopyIcon />}
          isDisabled
        />
      </RowBox>

      {/* Error */}
      <RowBox>
        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          defaultValue="Input Text"
          status="error"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          rightIcon={<UserIcon />}
          defaultValue="Input Text"
          status="error"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          defaultValue="Input Text"
          status="error"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          rightIcon={<CopyIcon />}
          defaultValue="Input Text"
          status="error"
        />
      </RowBox>

      {/* Success */}
      <RowBox>
        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          defaultValue="Input Text"
          status="success"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          rightIcon={<UserIcon />}
          defaultValue="Input Text"
          status="success"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          defaultValue="Input Text"
          status="success"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          rightIcon={<CopyIcon />}
          defaultValue="Input Text"
          status="success"
        />
      </RowBox>

      {/* With Normal Description */}
      <H3 css={{ mt: 100, mb: 20 }}>With Label</H3>
      <RowBox>
        <InputExample aria-label="label" />

        <Input
          aria-label="label"
          label="Label"
          description="Description goes here"
          placeholder="Input Placeholder"
          rightIcon={<UserIcon />}
        />

        <Input
          aria-label="label"
          label="Label"
          description="Description goes here"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
        />

        <Input
          aria-label="label"
          leftIcon={<UserIcon />}
          rightIcon={<CopyIcon />}
          label="Label"
          description="This is a textarea real example"
          successMessage="Success message, You did it!"
          errorMessage="Error message, at least 5 caracters needed"
          placeholder="input placeholder"
        />
      </RowBox>

      {/* With Error Message */}
      <RowBox>
        <Input
          aria-label="label"
          label="Label"
          errorMessage="Error message"
          status="error"
          placeholder="Input Placeholder"
        />

        <Input
          aria-label="label"
          label="Label"
          errorMessage="Error message"
          placeholder="Input Placeholder"
          rightIcon={<UserIcon />}
          status="error"
        />

        <Input
          aria-label="label"
          label="Label"
          errorMessage="Error message"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          status="error"
        />

        <Input
          aria-label="label"
          label="Label"
          errorMessage="Error message"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          rightIcon={<CopyIcon />}
          status="error"
        />
      </RowBox>

      {/* With Success Message */}
      <RowBox>
        <Input
          aria-label="label"
          label="Label"
          successMessage="Success message"
          placeholder="Input Placeholder"
          status="success"
        />

        <Input
          aria-label="label"
          label="Label"
          successMessage="Success message"
          placeholder="Input Placeholder"
          rightIcon={<UserIcon />}
          status="success"
        />

        <Input
          aria-label="label"
          label="Label"
          successMessage="Success message"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          status="success"
        />

        <Input
          aria-label="label"
          label="Label"
          successMessage="Success message"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          rightIcon={<CopyIcon />}
          status="success"
        />
      </RowBox>

      {/* With Prefix Suffix */}
      <H3 css={{ mt: 100, mb: 20 }}>With Prefix and Suffix</H3>

      <RowBox>
        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          status="normal"
          suffix="TXT"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          status="normal"
          suffix="TXT"
          defaultValue="Some long text can be entered here"
        />

        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          suffix="TXT"
          defaultValue="Some long text can be entered here"
        />
        <Input
          aria-label="label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          suffix="TXT"
          defaultValue="Some long text can be entered here"
          isDisabled
        />
      </RowBox>

      <RowBox>
        <Input
          aria-label="label"
          label="Label"
          placeholder="Input Placeholder"
          status="normal"
          suffix="TXT"
        />

        <Input
          aria-label="label"
          label="Label"
          placeholder="Input Placeholder"
          status="normal"
          suffix="TXT"
        />

        <Input
          aria-label="label"
          label="Label"
          placeholder="Input Placeholder"
          suffix="TXT"
          status="normal"
          description="Description goes here"
        />

        <Input
          aria-label="label"
          label="Label"
          placeholder="Input Placeholder"
          leftIcon={<UserIcon />}
          suffix="TXT"
          status="error"
          errorMessage="Error message"
        />
      </RowBox>

      <H3 css={{ mt: 100, mb: 20 }}>Password Input</H3>

      {/* Password Input */}
      <RowBox>
        <InputPassword label="New Password" placeholder="Enter your password" />
        <InputPassword
          leftIcon={<UserIcon />}
          label="New Password"
          placeholder="Enter your password"
          description="At least 5 characters needed"
        />
        <InputPassword
          leftIcon={<UserIcon />}
          label="New Password"
          placeholder="Enter your password"
          errorMessage="Error message"
          status="error"
        />
        <InputPassword
          label="New Password"
          placeholder="Enter your password"
          isDisabled
        />
      </RowBox>

      {/* URL Input */}
      <H3 css={{ mt: 100, mb: 20 }}>URL input</H3>
      <RowBox>
        <InputUrl
          aria-label="label"
          prefix="/products/"
          placeholder="slug"
          label="&nbsp;"
        />

        <InputUrl
          aria-label="label"
          prefix="/products/"
          placeholder="slug"
          defaultValue="shoes-medium"
          label="Label"
          leftIcon={<UserIcon />}
          description="Description goes here"
          rightIcon={<CopyIcon />}
        />

        <InputUrl
          aria-label="label"
          prefix="/products/"
          placeholder="slug"
          label="Label"
          errorMessage="Error message"
          status="error"
        />

        <InputUrl
          aria-label="label"
          prefix="/products/"
          placeholder="slug"
          label="Label"
          isDisabled
        />
      </RowBox>

      {/* Number */}
      <H3 css={{ mt: 100, mb: 20 }}>Number Input</H3>
      <RowBox>
        <InputNumber
          aria-label="label"
          placeholder="23.99"
          label="Price"
          value={number}
          onChange={(value) => {
            console.log({
              value,
            })

            setNumber(value)
          }}
        />
        <InputNumber
          aria-label="label"
          placeholder="23.99"
          label="Price"
          leftIcon={<UserIcon />}
        />
        <InputNumber
          aria-label="label"
          placeholder="23.99"
          label="Price"
          suffix="USD"
        />
        <InputNumber
          aria-label="label"
          placeholder="23.99"
          label="Price"
          suffix="USD"
          isDisabled
        />
      </RowBox>

      {/* Search */}
      <H3 css={{ mt: 100, mb: 20 }}>Search Input</H3>
      <RowBox>
        <InputSearch aria-label="label" label="&nbsp;" placeholder="Search" />
        <InputSearch
          aria-label="label"
          label="Loading"
          placeholder="Search"
          isLoading
        />
        <InputSearchExample aria-label="label" />
        <InputSearch
          aria-label="label"
          label="Disabled"
          placeholder="Search"
          isDisabled
        />
      </RowBox>
    </>
  )
}
