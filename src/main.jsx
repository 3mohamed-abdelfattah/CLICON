import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/store/store'
import App from '@/App.jsx'
import '@/styles/global.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)