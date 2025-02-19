import React, { useState, useCallback } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const toggleTheme = useCallback(async () => {
    if (isProcessing) return // Prevent double clicks
    
    setIsProcessing(true)
    setTheme(theme === 'dark' ? 'light' : 'dark')
    
    // Reset processing after short delay
    setTimeout(() => {
      setIsProcessing(false)
    }, 300)
  }, [theme, isProcessing])

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3h7.5a5.5 5.5 0 015.5 5.5v1.007a1.125 1.125 0 01-.664 1.194l-3.076 1.766c-.22.128-.26.436-.134.682l1.01 1.76a2.162 2.162 0 01.165.698V8.75a4.5 4.5 0 00-4.5-4.5h-1.427c.169 0 .326.024.483.067z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 018.5.75V1.5h.75a3 3 0 003-3v15.75a3 3 0 00-3 3h-15a3 3 0 00-3-3V5.25a3 3 0 003-3h.75z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
 