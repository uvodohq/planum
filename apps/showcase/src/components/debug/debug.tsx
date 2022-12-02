import './debug.css'

import { Toggle } from '@uvodohq/planum'
import { useEffect, useState } from 'react'

export const Debug = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')

    if (state) {
      body?.classList.add('debug')
    } else {
      body?.classList.remove('debug')
    }
  }, [state])

  return <Toggle value={state} onChange={setState} />
}
