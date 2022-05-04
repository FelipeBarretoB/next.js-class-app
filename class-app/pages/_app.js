import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'
import '../styles/header.css'
import '../styles/exam.css'

import Header from './Components/Header'

function MyApp({ Component, pageProps }) {
  return <div>
    <Header />
    <Component {...pageProps} />
  </div>
}

export default MyApp