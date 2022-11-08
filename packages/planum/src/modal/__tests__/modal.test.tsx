import { render, screen, userEvent, waitFor } from '~/test'

import type { ModalProps } from '..'
import { Dialog, Modal } from '..'

function renderModal(props?: ModalProps) {
  return render(
    <Modal trigger={<button>Simple modal</button>} {...props}>
      <div data-testid="content">content</div>
    </Modal>,
  )
}

describe('<Modal />', async () => {
  it('should render the modal trigger with aria attributes attached to trigger ', () => {
    renderModal()
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    // check has proper aria attributes
    expect(button).toHaveAttribute('aria-haspopup', 'dialog')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('should open the modal when trigger is clicked', async () => {
    renderModal()
    const button = screen.getByRole('button')
    await userEvent.click(button)

    // wait modal open animation end
    await waitFor(() => {
      screen.findByRole('dialog')
      // check modal content is visible
      expect(screen.getByTestId('content')).toBeVisible()
    })
  })

  it('should close when outside click', async () => {
    renderModal()
    const button = screen.getByRole('button')
    await userEvent.click(button)

    // wait modal open animation end
    await waitFor(() => {
      screen.findByRole('dialog')
      // check modal content is visible
      expect(screen.getByTestId('content')).toBeVisible()
    })

    // click outside
    await userEvent.click(document.body)

    // wait modal close animation end
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('should close when escape key is pressed', async () => {
    renderModal()
    const button = screen.getByRole('button')
    await userEvent.click(button)

    // wait modal open animation end
    await waitFor(() => {
      screen.findByRole('dialog')
      // check modal content is visible
      expect(screen.getByTestId('content')).toBeVisible()
    })

    // press escape key
    await userEvent.type(document.body, '{esc}')

    // wait modal close animation end
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('should close when close button is clicked', async () => {
    render(
      <Modal trigger={<button>Simple modal</button>}>
        <Dialog title="This is an unclosable dialog">content</Dialog>
      </Modal>,
    )

    const button = screen.getByRole('button')
    await userEvent.click(button)

    // wait modal open animation end
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeVisible()
    })

    // click close button by label
    await userEvent.click(screen.getByLabelText('close modal'))

    // wait modal close animation end
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })
})
