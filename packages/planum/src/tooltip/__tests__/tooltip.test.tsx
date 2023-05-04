import { Box } from '../../layout'
import { render, screen, userEvent, waitFor } from '../../test'
import { Tooltip, TooltipPopup, TooltipTrigger } from '..'

global.ResizeObserver = require('resize-observer-polyfill')

function renderTooltip() {
  return render(
    <Tooltip>
      <TooltipTrigger>
        <Box css={{ bg: 'red' }} data-testid="trigger">
          trigger
        </Box>
      </TooltipTrigger>
      <TooltipPopup>text</TooltipPopup>
    </Tooltip>,
  )
}

describe('<Tooltip />', async () => {
  it('should render the tooltip trigger without popup content', async () => {
    renderTooltip()

    const tooltipTrigger = screen.getByTestId('trigger')

    expect(tooltipTrigger).toBeInTheDocument()
    // get snapshot of the tooltip trigger
    expect(tooltipTrigger).toMatchSnapshot()
  })

  it('should show tooltip when hover over trigger', async () => {
    renderTooltip()

    const tooltipTrigger = screen.getByTestId('trigger')

    await userEvent.hover(tooltipTrigger)

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })
})
