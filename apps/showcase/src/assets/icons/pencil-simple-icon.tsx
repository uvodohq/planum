import type { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  size?: number
}

export function PenCilSimpleIcon(props: Props) {
  const { size = 24 } = props
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.75 4.593 4.875 15.468v3.659h3.659L19.409 8.252l-3.659-3.66ZM4.766 15.577l-.266-.264.265.265Zm9.658-12.84a1.875 1.875 0 0 1 2.652 0l4.19 4.189-.796.796.795-.796a1.875 1.875 0 0 1 0 2.652l-11.47 11.47c-.21.21-.497.329-.795.329H4.5a1.875 1.875 0 0 1-1.875-1.875v-4.19a1.875 1.875 0 0 1 .55-1.325l11.25-11.25.795.795-.796-.795Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.954 5.205c.44-.44 1.152-.44 1.591 0l5.25 5.25a1.125 1.125 0 0 1-1.59 1.59l-5.25-5.25a1.125 1.125 0 0 1 0-1.59Z"
        fill="currentColor"
      />
    </svg>
  )
}
