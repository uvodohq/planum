import type { IconProps } from './icon.type'

export function QuestionIcon(props: IconProps) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.375 16.875a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 13.5v-.75a2.625 2.625 0 1 0-2.625-2.625"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
