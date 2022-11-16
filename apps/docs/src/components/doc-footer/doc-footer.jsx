import './doc-footer.scss'

import { BEMClass } from '../../../helpers/bem-helper'
import { SectionName } from '../section-name/section-name'

const CSS_BASE_CLASS = 'monday-storybook-footer'
const bemHelper = BEMClass(CSS_BASE_CLASS)

export const DocFooter = () => (
  <div className={CSS_BASE_CLASS}>
    <SectionName>Feedback</SectionName>
    <div className={bemHelper({ element: 'text' })}>
      Help us improve this pattern by providing feedback, asking questions, and
      leaving any other comments on
      <a
        href="https://support.uvodo.com/login"
        className={bemHelper({ element: 'link' })}>
        this form
      </a>
    </div>
  </div>
)
