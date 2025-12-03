import { ConfigProvider } from 'antd'
import { MainLayout } from './components/layout/MainLayout'
import {theme} from './theme-ant.d/theme'

import './App.css'


const App = () => {
 

  return (
    <ConfigProvider theme={theme}>
      <MainLayout/>
    </ConfigProvider>    
  )
}

export default App
