// https://github.com/phosphor-icons/phosphor-react/tree/master/src

import type { CSS } from '@uvodohq/planum'
import { styled } from '@uvodohq/planum'
import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

// import { error } from '@/libs/logger'

export type IconWeight = 'regular' | 'duotone'

export type PaintFunction = (color: string) => React.ReactNode | null

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  alt?: string
  color?: string
  size?: string | number
  weight?: IconWeight
  mirrored?: boolean
  css?: CSS
}

type IconComponentProps = IconProps & React.RefAttributes<SVGSVGElement>

export type Icon = React.ForwardRefExoticComponent<IconComponentProps>

export const renderPathForWeight = (
  weight: IconWeight,
  color: string,
  pathsByWeight: Map<IconWeight, PaintFunction>,
): React.ReactNode | null => {
  const path = pathsByWeight.get(weight)
  if (path) return path(color)

  // error('Unsupported icon weight. Choose from "regular", "duotone".')

  return null
}

export type RenderFunction = (
  weight: IconWeight,
  color: string,
) => React.ReactNode | null

interface IconBaseProps extends IconProps {
  renderPath: RenderFunction
  /**
   * @default false
   * @description default icon is not accessible and not has title when used inside button
   */
  isAccessible?: boolean
}

const iconAriaProps = {
  focusable: false,
  'aria-hidden': true,
}

const StyledSvg = styled('svg', {})

export const IconBase = forwardRef<SVGSVGElement, IconBaseProps>(
  (props, ref) => {
    const {
      alt,
      color = 'currentColor',
      size = '24px',
      weight = 'regular',
      mirrored = false,
      children,
      renderPath,
      isAccessible = false,
      ...restProps
    } = props

    return (
      <StyledSvg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 256 256"
        transform={mirrored ? 'scale(-1, 1)' : undefined}
        {...restProps}
        {...(isAccessible ? {} : iconAriaProps)}
        //
      >
        {!!alt && isAccessible && <title>{alt}</title>}
        {children}
        <rect width="256" height="256" fill="none" />
        {renderPath(weight, color)}
      </StyledSvg>
    )
  },
)

IconBase.displayName = 'IconBase'
