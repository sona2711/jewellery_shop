import '@ant-design/v5-patch-for-react-19'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {theme} from './theme-ant.d/theme'
import { ConfigProvider } from 'antd'
import "./i18n"
import './index.css'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <App/>
    </ConfigProvider>
  </StrictMode>,
)
