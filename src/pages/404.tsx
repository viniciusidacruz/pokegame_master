import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react'

import { Main } from '@styles/pages/Home'

export default function NotFound() {
  const { push } = useRouter()

  useLayoutEffect(() => {
    push('/')
  }, [])

  return <Main />
}
