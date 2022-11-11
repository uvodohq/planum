import { useEffect, useState } from 'react'

import { Loader } from '../loader'

export const ProgressLoader = (props: any) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev > 99) {
          return 0
        }

        return prev + 4
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return <Loader {...props} value={value} isIndeterminate={false} />
}
