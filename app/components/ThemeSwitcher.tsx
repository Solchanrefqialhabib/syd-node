'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Pastikan komponen sudah ter-mount di client sebelum menampilkan UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
    </button>
  )
}