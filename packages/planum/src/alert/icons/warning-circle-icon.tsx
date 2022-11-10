import type { IconProps } from './icon.type'

export function WarningCircleIcon(props: IconProps) {
  return (
    <svg
      width={props?.size || 24}
      height={props?.size || 24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M12 7.5v5.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.25A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0 2.25Z"
        fill="currentColor"
      />
    </svg>
  )
}
