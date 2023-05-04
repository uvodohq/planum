import './welcome-header.scss'

import { ComponentName } from '../../../components'

const BASE_CLASS = 'monday-storybook-welcome-header'
export const WelcomeHeader = () => (
  <ComponentName className={BASE_CLASS}>
    <span className={`${BASE_CLASS}_text`}>Planum Design</span>
  </ComponentName>
)
