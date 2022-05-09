import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'
import '../styles/header.css'
import '../styles/exam.css'

import Header from './Components/Header'

import AppProvider from '../contexts/appContext';
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [teacher, setTeacher] = useState(false)
  return <AppProvider.Provider value={{state : {teacher: teacher}, setTeacher: setTeacher}}>
    <Header />
    <Component {...pageProps}/>
  </AppProvider.Provider>
}

export default MyApp