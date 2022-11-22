import type { SVGProps } from 'react'
import * as React from 'react'

type CheckIconProps = SVGProps<SVGSVGElement> & {
  isSelected: boolean
}

// NOTE: animated check icon
export const CheckIcon = ({ isSelected, ...rest }: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 256 256"
    {...rest}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      d="M216 72 104 184l-56-56"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={28}
      strokeDasharray={400}
      strokeDashoffset={isSelected ? 0 : -400}
      style={{
        transition: 'all .2s',
      }}
    />
  </svg>
)

// export const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={14}
//     height={14}
//     viewBox="0 0 256 256"
//     {...props}>
//     <path fill="none" d="M0 0h256v256H0z" />
//     <path
//       fill="none"
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={28}
//       d="M40 128h176"
//     />
//   </svg>
// )
