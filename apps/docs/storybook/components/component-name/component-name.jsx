import './component-name.scss'

import cx from 'classnames'

export const ComponentName = ({
  children,
  className,
  withFoundationBackground = false,
}) => {
  return (
    <h1
      className={cx('monday-storybook-component-name', className, {
        'monday-storybook-component-name--foundation': withFoundationBackground,
      })}>
      {children}
    </h1>
  )
}
