import { vi } from 'vitest'

import { render, screen, userEvent } from '../../test'
import { Textarea } from '../textarea'

function renderTextarea(props?: any) {
  return render(<Textarea placeholder="email" aria-label="label" {...props} />)
}

function selectTextarea() {
  return screen.getByPlaceholderText('email')
}

describe('<Textarea />', () => {
  it('should render Textarea with placeholder', () => {
    renderTextarea()
    const input = selectTextarea()

    expect(input).toBeInTheDocument()
    expect(input).toBeTruthy()
  })

  it('should console.warn about a11y when label not provied', () => {
    const consoleSpy = vi.spyOn(console, 'warn')
    render(<Textarea placeholder="email" />)
    expect(consoleSpy).toHaveBeenCalled()
    // vi.restoreAllMocks()
  })

  it('should call onChange callback', async () => {
    const onChangeMock = vi.fn()
    renderTextarea({ onChange: onChangeMock })

    const input = selectTextarea()
    const value = 'text'

    await userEvent.type(input, value)
    expect(onChangeMock).toHaveBeenCalledWith(value)
    expect(input).toHaveValue(value)
  })

  it('should not call onChange callback if disabled', async () => {
    const onChangeMock = vi.fn()
    renderTextarea({ onChange: onChangeMock, disabled: true })

    const input = selectTextarea()
    const value = 'text'

    expect(input).toBeDisabled()
    await userEvent.click(input)
    expect(input).not.toHaveFocus()

    await userEvent.type(input, value)
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should render with label', async () => {
    const labelText = 'Email'
    renderTextarea({ label: labelText })

    const label = screen.getByText(labelText)
    const input = selectTextarea()

    expect(input).toBeInTheDocument()
    expect(label).toBeInTheDocument()

    await userEvent.click(label)
    expect(input).toHaveFocus()
  })

  it('should show description message', async () => {
    const descText = 'Add your email'
    renderTextarea({ description: descText })

    const description = screen.getByText(descText)

    expect(description).toBeInTheDocument()
  })

  it('should show error message', async () => {
    const errorText = 'Invalid email'
    renderTextarea({ errorMessage: errorText, status: 'error' })

    const errorMessage = screen.getByText(errorText)

    expect(errorMessage).toBeInTheDocument()
  })
})
