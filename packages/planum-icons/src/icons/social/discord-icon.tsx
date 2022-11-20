import type { SVGProps } from 'react'

export const DiscordIcon = (
  props: SVGProps<SVGSVGElement> & { size?: number },
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.size || 56}
    height={props?.size || 56}
    viewBox="0 0 56 56"
    fill="none">
    <path
      fill="#5865F2"
      d="M45.712 11.561a42.583 42.583 0 0 0-10.51-3.26.16.16 0 0 0-.169.08c-.454.808-.957 1.86-1.309 2.689a39.316 39.316 0 0 0-11.805 0A27.187 27.187 0 0 0 20.59 8.38a.166.166 0 0 0-.169-.08 42.465 42.465 0 0 0-10.51 3.26.15.15 0 0 0-.07.06c-6.693 10-8.527 19.756-7.628 29.39.004.047.03.092.068.121 4.416 3.244 8.694 5.213 12.893 6.518a.167.167 0 0 0 .181-.06 30.606 30.606 0 0 0 2.638-4.29.164.164 0 0 0-.09-.227 28.191 28.191 0 0 1-4.027-1.92.166.166 0 0 1-.016-.275c.27-.203.54-.414.8-.627a.16.16 0 0 1 .166-.023c8.45 3.859 17.6 3.859 25.95 0a.159.159 0 0 1 .17.021c.258.213.529.426.802.63a.165.165 0 0 1-.015.274 26.463 26.463 0 0 1-4.03 1.918.165.165 0 0 0-.087.229 34.373 34.373 0 0 0 2.636 4.289c.04.057.113.081.18.06 4.22-1.304 8.498-3.273 12.915-6.517a.166.166 0 0 0 .067-.119c1.077-11.138-1.803-20.813-7.635-29.39a.131.131 0 0 0-.067-.062ZM19.255 35.145c-2.544 0-4.64-2.336-4.64-5.204 0-2.869 2.055-5.205 4.64-5.205 2.605 0 4.681 2.357 4.64 5.205 0 2.868-2.055 5.204-4.64 5.204Zm17.158 0c-2.544 0-4.64-2.336-4.64-5.204 0-2.869 2.055-5.205 4.64-5.205 2.605 0 4.681 2.357 4.64 5.205 0 2.868-2.035 5.204-4.64 5.204Z"
    />
  </svg>
)
