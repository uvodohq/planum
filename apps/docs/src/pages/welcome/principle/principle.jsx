import './principle.scss'

import { InformationBox } from '../../../components/information-box/information-box'

const PRINCIPLE_VISUAL_ELEMENT = `monday-storybook-principle`

export const Principle = ({ imgSrc, title, description }) => {
  const principleVisualElement = (
    <img
      className={`${PRINCIPLE_VISUAL_ELEMENT}_visual-element`}
      src={imgSrc}
      alt=""
    />
  )
  return (
    <InformationBox
      component={principleVisualElement}
      title={title}
      description={description}
    />
  )
}
