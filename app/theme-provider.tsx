'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
// --- BAGIAN YANG DIPERBAIKI ---
// Impor tipe 'ThemeProviderProps' langsung dari 'next-themes'.
// Penggunaan 'type' di dalam kurung kurawal adalah sintaks modern.
import { type ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}