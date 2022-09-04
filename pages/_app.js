import DataProvider from '../lib/state_manager/contextApi'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <DataProvider>
    <Component {...pageProps} />
  </DataProvider>
}

export default MyApp
