import { render, screen, userEvent, waitFor } from '~/test'

import type { MenuProps } from '..'
import { Menu, MenuItem } from '..'

global.ResizeObserver = require('resize-observer-polyfill')

function renderMenu(props?: MenuProps) {
  return render(
    <Menu trigger={<button>menu</button>} {...props}>
      <MenuItem label="Undo" />
      <MenuItem label="Redo" />
      <MenuItem label="Cut" />
      <MenuItem label="Mail" />
      <MenuItem label="Instagram" />
    </Menu>,
  )
}

describe('<Menu />', async () => {
  it('should render the menu', () => {
    renderMenu()
    const button = screen.getByText('menu')

    expect(button).toBeInTheDocument()
  })

  it('should open when clicked', async () => {
    renderMenu()
    const button = screen.getByText('menu')
    await userEvent.click(button)

    waitFor(() => {
      expect(screen.getByText('Undo')).toBeInTheDocument()
    })
  })
})
