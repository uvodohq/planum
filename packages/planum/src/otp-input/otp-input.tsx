import type { AriaTextFieldOptions } from '@react-aria/textfield'
import type { CSSProperties } from 'react'
import React, { Fragment } from 'react'

import type { CSS } from '../theme'
import {
  StyledContainer,
  styledInput,
  StyledSeparator,
} from './otp-input.styles'

type AllowedInputTypes = 'password' | 'text' | 'number' | 'tel'

export type OTPInputProps = AriaTextFieldOptions<'input'> & {
  /** Value of the OTP input */
  value?: string
  /** Number of OTP inputs to be rendered */
  numInputs?: number
  /** Whether the first input should be auto focused */
  shouldAutoFocus?: boolean
  /** Placeholder for the inputs */
  placeholder?: string
  /** Separator between the inputs */
  separator?: string
  /** The type that will be passed to the input being rendered */
  inputType?: AllowedInputTypes
  /** Style for the container */
  containerCss?: CSS
  /** Style for the input */
  inputCss?: CSSProperties
  /** Style for the separator */
  separatorCss?: CSS
}

export const OTPInput = ({
  value = '',
  numInputs = 4,
  onChange,
  // renderInput,
  shouldAutoFocus = false,
  inputType = 'text',
  placeholder,
  containerCss,
  inputCss,
  separatorCss,
  separator = '',
  isDisabled,
  isReadOnly,
  ...rest
}: OTPInputProps) => {
  const [activeInput, setActiveInput] = React.useState(0)
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([])

  const getOTPValue = () => (value ? [...value.toString()] : [])

  const isInputNum = inputType === 'number' || inputType === 'tel'

  React.useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, numInputs)
  }, [numInputs])

  React.useEffect(() => {
    if (shouldAutoFocus) {
      inputRefs.current[0]?.focus()
    }
  }, [shouldAutoFocus])

  const getPlaceholderValue = () => {
    if (typeof placeholder === 'string' && placeholder.length === numInputs) {
      return placeholder
    }

    return undefined
  }

  const handleOTPChange = (otp: Array<string>) => {
    const otpValue = otp.join('')
    onChange?.(otpValue)
  }

  const focusInput = (index: number) => {
    const activeInput = Math.max(Math.min(numInputs - 1, index), 0)

    if (inputRefs.current[activeInput]) {
      inputRefs.current[activeInput]?.focus()
      inputRefs.current[activeInput]?.select()
      setActiveInput(activeInput)
    }
  }

  const changeCodeAtFocus = (value: string) => {
    const otp = getOTPValue()
    otp[activeInput] = value[0]
    handleOTPChange(otp)
  }

  const isInputValueValid = (value: string) => {
    const isTypeValid = isInputNum
      ? !Number.isNaN(Number(value))
      : typeof value === 'string'
    return isTypeValid && value.trim().length === 1
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (isInputValueValid(value)) {
      changeCodeAtFocus(value)
      focusInput(activeInput + 1)
    } else {
      // const { nativeEvent } = event
      // // @ts-expect-error - This was added previosly to handle and edge case
      // // for dealing with keyCode "229 Unidentified" on Android. Check if this is
      // // still needed.
      // if (
      //   nativeEvent.data === null &&
      //   nativeEvent.inputType === 'deleteContentBackward'
      // ) {
      //   event.preventDefault()
      //   changeCodeAtFocus('')
      //   focusInput(activeInput - 1)
      // }
    }
  }

  const handleFocus =
    (event: React.FocusEvent<HTMLInputElement>) => (index: number) => {
      setActiveInput(index)
      event.target.select()
    }

  const handleBlur = () => {
    setActiveInput(activeInput - 1)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const otp = getOTPValue()
    if ([event.code, event.key].includes('Backspace')) {
      event.preventDefault()
      changeCodeAtFocus('')
      focusInput(activeInput - 1)
    } else
      switch (event.code) {
        case 'Delete': {
          event.preventDefault()
          changeCodeAtFocus('')

          break
        }
        case 'ArrowLeft': {
          event.preventDefault()
          focusInput(activeInput - 1)

          break
        }
        case 'ArrowRight': {
          event.preventDefault()
          focusInput(activeInput + 1)

          break
        }
        default:
          if (event.key === otp[activeInput]) {
            event.preventDefault()
            focusInput(activeInput + 1)
          } else if (
            event.code === 'Spacebar' ||
            event.code === 'Space' ||
            event.code === 'ArrowUp' ||
            event.code === 'ArrowDown'
          ) {
            event.preventDefault()
          } else if (isInputNum && !isInputValueValid(event.key)) {
            event.preventDefault()
          }
      }
  }

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()

    const otp = getOTPValue()

    let nextActiveInput = activeInput

    // Get pastedData in an array of max size (num of inputs - current position)
    const pastedData = [
      ...event.clipboardData
        .getData('text/plain')
        .slice(0, numInputs - activeInput),
    ]

    // Prevent pasting if the clipboard data contains non-numeric values for number inputs
    if (isInputNum && pastedData.some((value) => Number.isNaN(Number(value)))) {
      return
    }

    // Paste data from focused input onwards
    for (let pos = 0; pos < numInputs; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        otp[pos] = pastedData.shift() ?? ''
        nextActiveInput++
      }
    }

    focusInput(nextActiveInput)
    handleOTPChange(otp)
  }

  return (
    <StyledContainer css={containerCss}>
      {Array.from({ length: numInputs }, (_, index) => index).map((index) => (
        <Fragment key={index}>
          <input
            value={getOTPValue()[index] ?? ''}
            placeholder={getPlaceholderValue()?.[index] ?? undefined}
            ref={(element) => (inputRefs.current[index] = element)}
            onChange={handleChange}
            onFocus={(event) => handleFocus(event)(index)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            autoComplete="off"
            maxLength={1}
            aria-label={`Please enter OTP character ${index + 1}`}
            type={inputType}
            className={styledInput()}
            disabled={isDisabled || isReadOnly}
            style={inputCss}
            {...rest}
          />

          {index < numInputs - 1 && (
            <StyledSeparator css={separatorCss}>{separator}</StyledSeparator>
          )}
        </Fragment>
      ))}
    </StyledContainer>
  )
}
