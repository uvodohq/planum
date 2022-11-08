import { vi } from 'vitest'

import { render, screen, userEvent } from '../../test'

import type { InputProps } from '../input'
import Input from '../input'

function renderInput(props?: InputProps) {
  return render(<Input placeholder="email" aria-label="label" {...props} />)
}

function selectInput() {
  return screen.getByPlaceholderText('email')
}

describe('<Input />', () => {
  it('should render Input with placeholder', () => {
    renderInput()
    const input = selectInput()

    expect(input).toBeInTheDocument()
    expect(input).toBeTruthy()
  })

  it('should console.warn about a11y when label not provied', () => {
    const consoleSpy = vi.spyOn(console, 'warn')
    render(<Input placeholder="email" />)
    expect(consoleSpy).toHaveBeenCalled()
    // vi.restoreAllMocks()
  })

  it('should call onChange callback', async () => {
    const onChangeMock = vi.fn()
    renderInput({ onChange: onChangeMock })

    const input = selectInput()
    const value = 'text'

    await userEvent.type(input, value)
    expect(onChangeMock).toHaveBeenCalledWith(value)
    expect(input).toHaveValue(value)
  })

  it('should not call onChange callback if disabled', async () => {
    const onChangeMock = vi.fn()
    renderInput({ onChange: onChangeMock, isDisabled: true })

    const input = selectInput()
    const value = 'text'

    expect(input).toBeDisabled()
    await userEvent.click(input)
    expect(input).not.toHaveFocus()

    await userEvent.type(input, value)
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should render with label', async () => {
    const labelText = 'Email'
    renderInput({ label: labelText })

    const label = screen.getByText(labelText)
    const input = selectInput()

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()

    await userEvent.click(label)
    expect(input).toHaveFocus()
  })

  it('should show description message', async () => {
    const descText = 'Add your email'
    renderInput({ description: descText })

    const description = screen.getByText(descText)

    expect(description).toBeInTheDocument()
  })

  it('should show error message', async () => {
    const errorText = 'Invalid email'
    renderInput({ errorMessage: errorText, status: 'error' })

    const errorMessage = screen.getByText(errorText)

    expect(errorMessage).toBeInTheDocument()
  })
})
