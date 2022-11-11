import hotToast from 'react-hot-toast'

import { Notification } from './notification'

export const toast = (message: string) =>
  hotToast((notification) => (
    <Notification
      message={message}
      onCloseClick={() => {
        hotToast.dismiss(notification.id)
      }}
    />
  ))
