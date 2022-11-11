import * as React from 'react'
import { vi } from 'vitest'

import { render, screen, userEvent } from '../../test'
import { Checkbox } from '..'

const labelText = 'check me'

describe('Checkbox', async () => {
  it('should render simple checkbox', () => {
    const { container } = render(<Checkbox />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('with label', () => {
    const { container } = render(<Checkbox label={labelText} />)
    const label = screen.getByText(labelText)
    expect(label).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('isDisabled', () => {
    const { container } = render(<Checkbox label={labelText} isDisabled />)
    expect(container).toMatchSnapshot()
  })

  it('isSelected', () => {
    const { container } = render(<Checkbox label={labelText} isSelected />)
    expect(container).toMatchSnapshot()
  })

  it('isIndeterminate', () => {
    const { container } = render(<Checkbox label={labelText} isSelected />)
    expect(container).toMatchSnapshot()
  })

  it('should call onChange', async () => {
    const onChangeMock = vi.fn()
    const { container } = render(<Checkbox onChange={onChangeMock} />)
    const label = container.querySelector('label')!
    await userEvent.click(label)
    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith(true)

    await userEvent.click(label)
    expect(onChangeMock).toHaveBeenCalledWith(false)
  })

  it.skip('should not call onChange when isDisabled', async () => {
    const onChangeMock = vi.fn()
    const { container } = render(
      <Checkbox isDisabled onChange={onChangeMock} />,
    )
    const label = container.querySelector('label')!
    await userEvent.click(label)
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('onChange should work with when focused with tab and space key press', async () => {
    const onChangeMock = vi.fn()
    render(<Checkbox onChange={onChangeMock} />)
    const checkbox = screen.getByRole('checkbox')

    await userEvent.tab()
    expect(checkbox).toHaveFocus()
    await userEvent.type(checkbox, '{space}')

    expect(onChangeMock).toHaveBeenCalledWith(true)
  })
})
