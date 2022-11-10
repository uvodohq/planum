import * as React from 'react'
import { vi } from 'vitest'

import { render, screen, userEvent } from '../../test'
import type { ButtonProps } from '../'
import { Button } from '../'

function renderButton(props?: ButtonProps) {
  return render(<Button {...props}>Button</Button>)
}

function getButton() {
  return screen.getByRole('button')
}

// useProgressBar generates a random id for the progress bar, breaks snapshots. so we mock it
vi.mock('@react-aria/progress', async () => {
  return {
    useProgressBar: vi.fn(() => ({
      progressBarProps: {
        role: 'progressbar',
      },
    })),
  }
})

describe('<Button />', async () => {
  it('should render the button', () => {
    renderButton()
    const button = getButton()

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Button')

    expect(button).toMatchSnapshot()
  })

  it("should navigate '/test' when given as props and clicked", () => {
    renderButton({ as: 'a', href: '/test' })
    const button = screen.getByRole('link')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Button')

    userEvent.click(button)

    expect(button).toHaveAttribute('href', '/test')
  })

  it('should call onClick handler', async () => {
    const onClickMock = vi.fn()
    renderButton({
      onClick: onClickMock,
    })
    const button = getButton()

    expect(onClickMock).not.toHaveBeenCalled()
    await userEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('should not call onClick callback if disabled', async () => {
    const onClickMock = vi.fn()
    renderButton({
      onClick: onClickMock,
      isDisabled: true,
    })
    const button = getButton()

    expect(button).toBeDisabled()
    await userEvent.click(button)
    expect(onClickMock).not.toHaveBeenCalled()

    expect(button).toMatchSnapshot()
  })

  it.only('should show loading and not accept onClick', async () => {
    const onClickMock = vi.fn()
    renderButton({
      onClick: onClickMock,
      isLoading: true,
    })
    const button = getButton()
    const loading = screen.getByRole('progressbar')

    expect(button).toBeDisabled()
    expect(loading).toBeInTheDocument()

    await userEvent.click(button)
    expect(onClickMock).not.toHaveBeenCalled()

    expect(button).toMatchSnapshot()
  })

  it('should call click callback when focused with tab and enter key press', async () => {
    const onClickMock = vi.fn()
    renderButton({
      onClick: onClickMock,
    })
    const button = getButton()

    expect(onClickMock).not.toHaveBeenCalled()
    await userEvent.tab()

    expect(button).toHaveFocus()

    await userEvent.keyboard('{enter}')
    expect(onClickMock).toHaveBeenCalledTimes(1)

    expect(button).toMatchSnapshot()
  })

  it('should call click callback when focused with tab and spacebar key press', async () => {
    const onClickMock = vi.fn()
    renderButton({
      onClick: onClickMock,
    })
    const button = getButton()

    expect(onClickMock).not.toHaveBeenCalled()
    await userEvent.tab()

    expect(button).toHaveFocus()

    await userEvent.keyboard('{ }')
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('should focus when tab key press', async () => {
    renderButton()
    const button = getButton()

    expect(button).not.toHaveFocus()
    await userEvent.tab()
    expect(button).toHaveFocus()
  })
})
