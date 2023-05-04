import { vi } from 'vitest'

import { Button } from '../../button'
import { render, screen, userEvent, waitFor } from '../../test'
import type { AlertProps } from '..'
import { Alert } from '..'

const message = 'message'
const title = 'title'

function renderAlert(props?: AlertProps) {
  return render(<Alert {...props} />)
}

function getAlert() {
  return screen.getByRole('alert')
}

describe('<Alert />', async () => {
  it('should render the alert', () => {
    renderAlert({ message, title })
    const alert = getAlert()

    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent(message)
    expect(alert).toHaveTextContent(title)
  })

  it('should close alert when close button click', async () => {
    renderAlert()
    const alert = getAlert()

    await userEvent.click(screen.getByRole('button'))

    // wait for animation ends
    await waitFor(
      () => {
        expect(alert).not.toBeInTheDocument()
      },
      { timeout: 500 },
    )
  })

  it('should not render close button when closable is false', () => {
    renderAlert({ closable: false })
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should rerender alert when isOpen prop change', () => {
    const { rerender } = renderAlert({ isOpen: false })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    rerender(<Alert isOpen={true} />)
    expect(screen.queryByRole('alert')).toBeInTheDocument()
  })

  it('should render action button', async () => {
    const onClick = vi.fn()
    const actionButton = <Button onClick={onClick}>action</Button>

    renderAlert({ message, title, actions: actionButton })
    const button = screen.getByText('action')

    await userEvent.click(button)

    expect(onClick).toBeCalled()
  })

  it('should navigate to the link when action button is a link', async () => {
    const onClick = vi.fn()
    const actionButton = (
      <Button
        onClick={onClick}
        as="a"
        href="/uvodo"
        data-testid="action-button">
        action
      </Button>
    )

    renderAlert({ message, title, actions: actionButton })

    const button = screen.getByTestId('action-button')

    await userEvent.click(button)

    expect(window.location.pathname).toBe('/')
  })
})
