import './multiple-story-elements-wrapper.scss'
import './reset.css'

import cx from 'classnames'

export const MultipleStoryElementsWrapper = ({ className, children }) => {
  return (
    <div
      className={cx(
        'monday-storybook_multiple-story-elements-wrapper',
        className,
      )}>
      <div data-testid="focusTrap" className="monday-storybook_focus-trap" />
      {children}
    </div>
  )
}
