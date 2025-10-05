import React, { useState } from 'react'
import FunctionContextComponent from './functional-component'
import ThemeProvider from './themecontext'

export default function ThemeToggle() {
  return (
    <ThemeProvider>
        <FunctionContextComponent />
    </ThemeProvider>
  )
}
