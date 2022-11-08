import { useMediaQuery } from './use-media-query'

export function useDesktopMedia() {
  return useMediaQuery('(min-width: 1024px)')
}

export function useLaptopMedia() {
  return useMediaQuery('(min-width: 768px)')
}

export function useTabletMedia() {
  return useMediaQuery('(min-width: 640px)')
}

export function useLargeMobileMedia() {
  return useMediaQuery('(min-width: 425px)')
}

export function useMobileMedia() {
  return useMediaQuery('(min-width: 0px)')
}
