import * as React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const CaretRightIcon = (props: Props) => (
  <svg
    width={props?.size || 16}
    height={props?.size || 16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.47 2.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06L9.94 8 5.47 3.53a.75.75 0 0 1 0-1.06Z"
      fill="#C7C7C7"
    />
  </svg>
)
