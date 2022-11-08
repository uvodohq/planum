import { styled } from '../theme'

const Svg = styled('svg', {
  width: '60%',
  height: 'auto',
  maxWidth: 64,
})

export default function FallbackImg(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}>
      <rect width="256" height="256" fill="none"></rect>
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"></rect>
      <path
        d="M216,160l-42.3-42.3a8,8,0,0,0-11.4,0l-44.6,44.6a8,8,0,0,1-11.4,0L85.7,141.7a8,8,0,0,0-11.4,0L40,176"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"></path>
      <circle cx="100" cy="92" r="12"></circle>
    </Svg>
  )
}
