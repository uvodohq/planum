// import { vi } from 'vitest'

import { render } from '../../test'
import { Radio, RadioGroup } from '..'

// vi.mock('@react-aria/utils', async () => {
//   console.log('1')
//   const actual: any = await vi.importActual('@react-aria/utils')
//   console.log('2')

//   console.log(actual)
//   return {
//     ...actual,
//     useId: () => 'test-ID',
//     useSlotId: () => 'test-slot-ID',
//     useDrag1D: () => 'test-drag-ID',
//   }
// })

describe('Radio', async () => {
  it.todo('should render 3 radios - cant mock ID', () => {
    const { container } = render(
      <RadioGroup aria-label="label">
        <Radio value="Regular">Regular</Radio>
        <Radio value="Selected">Selected</Radio>
      </RadioGroup>,
    )
    const label = container.querySelectorAll('label')
    expect(label.length).toBe(2)
    expect(container).toMatchSnapshot()
  })
})
