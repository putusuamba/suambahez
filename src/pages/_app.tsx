import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove('dark')
    document.body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }, [])

  return <Component {...pageProps} />
}

export default MyApp 