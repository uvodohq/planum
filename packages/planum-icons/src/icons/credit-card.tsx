import { forwardRef } from 'react'

import type { IconProps, IconWeightComponent } from '../icon'
import { Icon } from '../icon'

const Duotone: IconWeightComponent = ({ color }) => (
  <>
    <path d="M232,96v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V96Z" opacity="0.2" />
    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z" />
  </>
)

const Regular: IconWeightComponent = ({ color }) => (
  <>
    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z" />
  </>
)

const weights = {
  duotone: Duotone,
  regular: Regular,
}

const CreditCardIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon ref={ref} alt="Credit Card icon" {...props} weights={weights} />
))

CreditCardIcon.displayName = 'CreditCardIcon'

export default CreditCardIcon
