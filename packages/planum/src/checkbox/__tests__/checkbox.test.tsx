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
    const label = screen.getByText(labelText)
    screen.debug()
    expect(label).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('isSelected', () => {
    const { container } = render(<Checkbox label={labelText} isSelected />)
    const label = screen.getByText(labelText)
    // screen.debug()
    expect(label).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('isIndeterminate', () => {
    const { container } = render(<Checkbox label={labelText} isSelected />)
    const label = screen.getByText(labelText)
    // screen.debug()
    expect(label).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should should not call when isDisabled', async () => {
    // const onClickMock = vi.fn()
    // render(<Checkbox />)
    // const checkbox = getCheckbox()
    // expect(onClickMock).not.toHaveBeenCalled()
    // await userEvent.click(checkbox)
    // expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  // it('should not call onClick callback if disabled', async () => {
  //   const onClickMock = vi.fn()
  //   renderCheckbox({
  //     onClick: onClickMock,
  //     isDisabled: true,
  //   })
  //   const checkbox = getCheckbox()

  //   expect(checkbox).toBeDisabled()
  //   await userEvent.click(checkbox)
  //   expect(onClickMock).not.toHaveBeenCalled()

  //   expect(checkbox).toMatchSnapshot()
  // })

  // it.only('should show loading and not accept onClick', async () => {
  //   const onClickMock = vi.fn()
  //   renderCheckbox({
  //     onClick: onClickMock,
  //     isLoading: true,
  //   })
  //   const checkbox = getCheckbox()
  //   const loading = screen.getByRole('progressbar')

  //   expect(checkbox).toBeDisabled()
  //   expect(loading).toBeInTheDocument()

  //   await userEvent.click(checkbox)
  //   expect(onClickMock).not.toHaveBeenCalled()

  //   expect(checkbox).toMatchSnapshot()
  // })

  // it('should call click callback when focused with tab and enter key press', async () => {
  //   const onClickMock = vi.fn()
  //   renderCheckbox({
  //     onClick: onClickMock,
  //   })
  //   const checkbox = getCheckbox()

  //   expect(onClickMock).not.toHaveBeenCalled()
  //   await userEvent.tab()

  //   expect(checkbox).toHaveFocus()

  //   await userEvent.keyboard('{enter}')
  //   expect(onClickMock).toHaveBeenCalledTimes(1)

  //   expect(checkbox).toMatchSnapshot()
  // })

  // it('should call click callback when focused with tab and spacebar key press', async () => {
  //   const onClickMock = vi.fn()
  //   renderCheckbox({
  //     onClick: onClickMock,
  //   })
  //   const checkbox = getCheckbox()

  //   expect(onClickMock).not.toHaveBeenCalled()
  //   await userEvent.tab()

  //   expect(checkbox).toHaveFocus()

  //   await userEvent.keyboard('{ }')
  //   expect(onClickMock).toHaveBeenCalledTimes(1)
  // })

  // it('should focus when tab key press', async () => {
  //   renderCheckbox()
  //   const checkbox = getCheckbox()

  //   expect(checkbox).not.toHaveFocus()
  //   await userEvent.tab()
  //   expect(checkbox).toHaveFocus()
  // })
})
