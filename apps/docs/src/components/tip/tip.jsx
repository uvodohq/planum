// import CoreAttentionBox from "../../../components/AttentionBox/AttentionBox";
import './tip.scss'

import cx from 'classnames'
import PropTypes from 'prop-types'

export const Tip = ({ className, title, children }) => {
  const titleComposition = (
    <span>
      <span style={{ marginRight: 4 }}>🤓</span> {title}
    </span>
  )

  return titleComposition
  // return (
  //   <CoreAttentionBox
  //     icon={null}
  //     type={CoreAttentionBox.types.DARK}
  //     componentClassName={cx("monday-storybook-tip", className)}
  //     title={titleComposition}
  //     text={children}
  //   />
  // )
}

Tip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
}

Tip.defaultProps = {
  title: 'Tip',
  // The content of the tip
  children: undefined,
  className: '',
}
