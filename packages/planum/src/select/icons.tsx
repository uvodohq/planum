import type * as Stitches from '@stitches/react'
import type { SVGProps } from 'react'

import { styled } from '../theme'

export const IconContainer = styled('span', {
  dflex: 'center',
  display: 'inline-flex',
  color: '$surface600',
  transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',

  variants: {
    isOpen: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
})

type IconProps = Stitches.VariantProps<typeof IconContainer> &
  SVGProps<SVGSVGElement>

export const SelectDownIcon = (props: IconProps) => {
  const { isOpen, ...rest } = props

  return (
    <IconContainer isOpen={isOpen}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 256 256"
        {...rest}>
        <path fill="none" d="M0 0h256v256H0z" />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={16}
          d="m208 96-80 80-80-80"
        />
      </svg>
    </IconContainer>
  )
}

export const CheckSvgPath = styled('path', {
  strokeDasharray: 400,
  strokeDashoffset: 0,
})

type CheckIconProps = SVGProps<SVGSVGElement> & {}

export const CheckIcon = (props: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 256 256"
    {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <CheckSvgPath
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={28}
      d="M216 72 104 184l-56-56"
    />
  </svg>
)
