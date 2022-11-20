import type { SVGProps } from 'react'
import * as React from 'react'

export const FacebookCircleIcon = (
  props: SVGProps<SVGSVGElement> & { size?: number },
) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size ?? 52}
    height={props.size ?? 52}
    viewBox="0 0 48 48"
    {...props}>
    <path
      d="M21 41.8C12.5 40.3 6 32.9 6 24c0-9.9 8.1-18 18-18s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8Z"
      fill="url(#a)"
    />
    <path
      d="m31 29 .8-5H27v-3.5c0-1.4.5-2.5 2.7-2.5H32v-4.6c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H21v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V29h4Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={24}
        y1={40.754}
        x2={24}
        y2={6}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#0062E0" />
        <stop offset={1} stopColor="#19AFFF" />
      </linearGradient>
    </defs>
  </svg>
)
