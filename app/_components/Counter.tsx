'use client'

import { useState } from 'react'
import NiceText from './NiceText'

type Props = {
  defaultCount?: number
}

export default function Counter({ defaultCount }: Props) {
  const [count, setCount] = useState(defaultCount || 0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <button
      className="border p-2 rounded flex items-center gap-1"
      onClick={handleClick}
    >
      Count: <NiceText text={count} />
    </button>
  )
}
