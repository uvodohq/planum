import { mergeProps } from '@react-aria/utils'
import type { ToasterProps } from 'react-hot-toast'
import { Toaster as HotToaster } from 'react-hot-toast'

export const Toaster = (props: ToasterProps = {}) => {
  const defaultConfig: ToasterProps = {
    position: 'bottom-center',
    gutter: 8,
    toastOptions: {
      duration: 2000,
      style: {
        background: 'transparent',
        padding: 0,
        boxShadow: 'none',
      },
    },
  }
  const config = mergeProps(defaultConfig, props)

  return <HotToaster {...config} />
}
