import AppRouter from './router';
import {theme} from './theme-ant.d/theme'
import { ConfigProvider } from 'antd'
import { StoreProvider } from './redux/Provider';
import './App.css';

export const App = () => {
  return (
      <ConfigProvider theme={theme}>
         <StoreProvider>
            <AppRouter/>
         </StoreProvider>
      </ConfigProvider>
  )
}

