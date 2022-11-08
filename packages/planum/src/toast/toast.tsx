import hotToast from 'react-hot-toast'

import { Notification } from './notification'

const toast = (message: string) =>
  hotToast((notification) => (
    <Notification
      message={message}
      onCloseClick={() => {
        hotToast.dismiss(notification.id)
      }}
    />
  ))

export default toast
