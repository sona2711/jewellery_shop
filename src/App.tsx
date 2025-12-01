import { Header } from './components/layout/Header'
import { Catalog } from './pages/Catalog'
import { AppFooter } from './components/layout/Footer'

import './App.css'


function App() {
 

  return (
    <>
      <Header image="./src/assets/images/logo/logo_dark.png"/>
      <Catalog/>
      <AppFooter/>
    </>
  )
}

export default App
