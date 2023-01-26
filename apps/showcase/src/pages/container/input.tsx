import {
  Box,
  H3,
  Input,
  InputNumber,
  InputNumberProps,
  InputPassword,
  InputSearch,
  InputUrl,
} from '@uvodohq/planum'
import { CopySimpleIcon, UserIcon } from '@uvodohq/planum-icons'
import { useState } from 'react'
import { useFormatCurrency } from '../../components'
import { Currency } from '../../components/form'

interface PriceProps extends InputNumberProps {
  customCurrency?: Currency
}

function PriceInput(props: PriceProps) {
  const { customCurrency, ...rest } = props
  const [priceVal, setPriceVal] = useState<number | string | null>(null)

  const { currency, format } = useFormatCurrency(customCurrency)
  const precision = currency?.fraction_digits
  const placeholder = (0).toFixed(precision)

  return (
    <InputNumber
      placeholder={placeholder}
      aria-label="Price"
      label="label"
      suffix={currency.code}
      min={0}
      max={999_999_999}
      precision={precision}
      format={format}
      value={priceVal}
      onChange={(value) => setPriceVal(value)}
      {...rest}
    />
  )
}

function QuantityInput(props?: PriceProps) {
  const [quantityVal, setQuantityVal] = useState<number | string | null>(null)

  return (
    <InputNumber
      placeholder="0"
      aria-label="Quantity"
      label="label"
      min={0}
      precision={0}
      value={quantityVal}
      onChange={(value) => setQuantityVal(value)}
      {...props}
    />
  )
}

function PercentInput(props?: PriceProps) {
  const [percentVal, setPercentVal] = useState<number | string | null>(null)

  return (
    <InputNumber
      placeholder="0"
      aria-label="Percent"
      label="label"
      suffix="%"
      min={0}
      max={100}
      precision={0}
      value={percentVal}
      onChange={(value) => setPercentVal(value)}
      {...props}
    />
  )
}

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
          rightIcon={<CopySimpleIcon />}
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
          rightIcon={<CopySimpleIcon />}
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
          rightIcon={<CopySimpleIcon />}
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
          rightIcon={<CopySimpleIcon />}
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
          rightIcon={<CopySimpleIcon />}
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
          rightIcon={<CopySimpleIcon />}
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
          rightIcon={<CopySimpleIcon />}
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
          rightIcon={<CopySimpleIcon />}
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
      <RowBox>
        <InputPassword
          label="Check password strength"
          placeholder="Enter your password"
          checkStrength
        />
        <Box />
        <Box />
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
          rightIcon={<CopySimpleIcon />}
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

      {/* Number */}
      <H3 css={{ mt: 100, mb: 20 }}>Number Input</H3>
      <RowBox>
        <InputNumber
          aria-label="label"
          placeholder="23.99"
          label="label"
          value={number}
          onChange={(value) => {
            console.log({
              value,
            })

            setNumber(value as any)
          }}
        />
        <InputNumber
          aria-label="label"
          placeholder="23.99"
          label="label"
          leftIcon={<UserIcon />}
          suffix={<UserIcon />}
        />
        <InputNumber
          aria-label="label"
          placeholder="23.99"
          label="label"
          errorMessage="Error message"
          status="error"
        />
        <InputNumber
          aria-label="label"
          placeholder="23.99"
          label="label"
          isDisabled
        />
      </RowBox>

      {/* Price */}
      <H3 css={{ mt: 100, mb: 20 }}>Price Input</H3>
      <RowBox>
        <PriceInput />
        <PriceInput leftIcon={<UserIcon />} />
        <PriceInput errorMessage="Error message" status="error" />
        <PriceInput isDisabled />
      </RowBox>

      {/* Quantity */}
      <H3 css={{ mt: 100, mb: 20 }}>Quantity Input</H3>
      <RowBox>
        <QuantityInput />
        <QuantityInput leftIcon={<UserIcon />} />
        <QuantityInput errorMessage="Error message" status="error" />
        <QuantityInput isDisabled />
      </RowBox>

      {/* Percent */}
      <H3 css={{ mt: 100, mb: 20 }}>Percent Input</H3>
      <RowBox>
        <PercentInput />
        <PercentInput leftIcon={<UserIcon />} />
        <PercentInput errorMessage="Error message" status="error" />
        <PercentInput isDisabled />
      </RowBox>
    </>
  )
}
