import './title.scss'

import cx from 'classnames'

export const Title = ({ className, ...props }) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3 className={cx('monday-storybook-title', className)} {...props} />
)
