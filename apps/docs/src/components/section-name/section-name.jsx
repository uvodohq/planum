import './section-name.scss'

import cx from 'classnames'
import { useMemo } from 'react'

export const SectionName = ({ className, children, ...props }) => {
  const id = useMemo(
    () => children.toLowerCase().split(' ').join('-'),
    [children],
  )
  return (
    <h2
      id={id}
      className={cx('monday-storybook-section-name', className)}
      {...props}>
      {children}
    </h2>
  )
}
