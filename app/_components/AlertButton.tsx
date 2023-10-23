'use client'

export default function AlertButton() {
  return (
    <button
      className="border p-2 rounded flex items-center gap-1"
      onClick={() => alert('🥺')}
    >
      ただの onClick alert なボタンも use client が必要だった
    </button>
  )
}
