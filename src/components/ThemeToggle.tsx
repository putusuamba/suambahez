import { useTheme } from 'next-themes'
import { useCallback, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isProcessing, setIsProcessing] = useState(false)

  const toggleTheme = useCallback(() => {
    if (isProcessing) return
    
    setIsProcessing(true)
    setTheme(theme === 'dark' ? 'light' : 'dark')
    
    // Reset setelah toggle selesai
    setTimeout(() => {
      setIsProcessing(false)
    }, 300)
  }, [theme, setTheme, isProcessing])

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      disabled={isProcessing}
    >
      {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </button>
  )
}
 