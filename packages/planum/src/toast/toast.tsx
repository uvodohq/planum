import hotToast from 'react-hot-toast'

import { Notification } from './notification'

export const toast = (message: string) =>
  hotToast((notification) => (
    <Notification
      message={message}
      onCloseClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        hotToast.dismiss(notification.id)
      }}
    />
  ))
