import { MainProvider } from '../context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
