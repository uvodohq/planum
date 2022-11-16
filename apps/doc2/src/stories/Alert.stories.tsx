import React from 'react'
import { Alert } from '@uvodohq/planum/src'

import { ComponentStory, ComponentMeta } from '@storybook/react'

// import { Alert } from './Alert'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    isIconAlert: { control: 'boolean' },
  },
} as ComponentMeta<typeof Alert>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Alert',
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Alert',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Alert',
// }
