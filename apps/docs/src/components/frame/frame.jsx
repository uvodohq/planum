import './frams.scss'

import cx from 'classnames'

export const Frame = ({ children, className, noGutter, noBorder }) => (
  <div
    className={cx('monday-storybook-frame', className, {
      'monday-storybook-frame--no-gutter': noGutter,
      'monday-storybook-frame--no-border': noBorder,
    })}>
    {children}
  </div>
)
