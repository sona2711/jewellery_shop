import '@ant-design/v5-patch-for-react-19'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'
import {theme} from './theme-ant.d/theme'
import { ConfigProvider } from 'antd'
import "./i18n"
import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <RouterProvider router={router}/>
      {/* <App/> */}
    </ConfigProvider>
  </StrictMode>,
)
