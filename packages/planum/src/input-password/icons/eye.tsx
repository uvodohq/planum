import type { SVGProps } from 'react'

const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill={'currentColor'}
    viewBox="0 0 256 256"
    {...props}>
    <rect width="256" height="256" fill="none" />
    <path
      d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
)

export default EyeIcon
