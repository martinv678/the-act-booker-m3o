import { UserProvider } from '@m3o/auth'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { user } = pageProps

  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
