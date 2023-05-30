import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef, Fragment } from 'react'

export type IconWeightComponent = React.ComponentType<{ color: string }>

interface WeightComponentMap {
  weights: {
    regular: IconWeightComponent
    duotone?: IconWeightComponent
  }
}

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  alt?: string

  /**
   * @default currentColor
   */
  color?: string

  /**
   * @default 24px
   */
  size?: string | number

  /**
   * not all icons has duotone variant.
   * @default regular
   */
  weight?: 'regular' | 'duotone'

  /**
   * when is true, descriptive title tag added into svg icon
   * default icon is not accessible and not has title when used inside button.
   * @default false
   */
  isAccessible?: boolean
}

const iconAriaProps = {
  focusable: false,
  'aria-hidden': true,
}

export const Icon = forwardRef<SVGSVGElement, IconProps & WeightComponentMap>(
  (props, ref) => {
    const {
      alt,
      color = 'currentColor',
      size = 24,
      isAccessible = false,
      weights,
      weight = 'regular',
      ...restProps
    } = props

    const IconWeightComponent = weights[weight] || Fragment

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 256 256"
        {...restProps}
        {...(isAccessible ? {} : iconAriaProps)}
        //
      >
        {!!alt && isAccessible && <p>{alt}</p>}
        <rect width="256" height="256" fill="none" />
        <IconWeightComponent color={color} />
      </svg>
    )
  },
)

Icon.displayName = 'Icon'
