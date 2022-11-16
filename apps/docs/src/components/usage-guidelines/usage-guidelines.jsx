import './usage-guideline.scss'

import { useMemo } from 'react'

import { BEMClass } from '../../../helpers/bem-helper'

const CSS_BASE_CLASS = 'monday-storybook-usage-guidelines'
const bemHelper = BEMClass(CSS_BASE_CLASS)

export const UsageGuidelines = ({ guidelines }) => {
  const guidelinesElements = useMemo(
    () =>
      guidelines.map((guideline, index) => (
        <span
          id={index}
          key={index}
          className={bemHelper({ element: 'guideline' })}>
          <span className={bemHelper({ element: 'icon' })}>➡️</span>
          {guideline}
        </span>
      )),
    [guidelines],
  )

  return <article className={CSS_BASE_CLASS}>{guidelinesElements}</article>
}
