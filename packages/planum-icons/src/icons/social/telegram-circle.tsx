import type { SVGProps } from 'react'

export const TelegramCircleIcon = (
  props: SVGProps<SVGSVGElement> & { size?: number },
) => (
  <svg
    width={props?.size || 52}
    height={props?.size || 52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48">
    <path
      d="M24 41c9.389 0 17-7.611 17-17S33.389 7 24 7 7 14.611 7 24s7.611 17 17 17Z"
      fill="url(#a)"
    />
    <path
      d="M20.883 31.792c-.55 0-.457-.208-.647-.733l-1.62-5.33 12.467-7.396"
      fill="#C8DAEA"
    />
    <path
      d="M20.883 31.792c.425 0 .613-.195.85-.425L24 29.163l-2.827-1.705"
      fill="#A9C9DD"
    />
    <path
      d="m21.172 27.458 6.851 5.062c.782.431 1.346.208 1.541-.726l2.789-13.142c.285-1.144-.437-1.663-1.184-1.324l-16.376 6.314c-1.117.449-1.11 1.072-.203 1.35l4.202 1.312 9.728-6.138c.46-.279.881-.129.535.178"
      fill="url(#b)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={29.668}
        y1={12.668}
        x2={21.168}
        y2={32.5}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#37AEE2" />
        <stop offset={1} stopColor="#1E96C8" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={26.126}
        y1={24}
        x2={28.786}
        y2={30.054}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#EFF7FC" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
)
