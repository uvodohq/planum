import './abilities-description.scss'

import { AbilityDescription } from '../ability-description/ability-description'
import { components, foundations, gettingStarted } from '../assets'

export const AbilitiesDescription = () => (
  <div className="monday-storybook-abilities-description">
    <AbilityDescription
      title="Foundations"
      imageSrc={foundations}
      linkHref="/?path=/docs/foundations-colors--page">
      Library of the building elements such as colors, typography, shadows, etc.
    </AbilityDescription>
    <AbilityDescription
      title="Components"
      imageSrc={components}
      linkHref="/?path=/docs/buttons">
      Library and guidelines for the UI components.
    </AbilityDescription>
    <AbilityDescription
      title="Resources"
      imageSrc={gettingStarted}
      linkHref="#resources">
      Uvodo’s Figma and GitHub resources to refer.
    </AbilityDescription>
  </div>
)
