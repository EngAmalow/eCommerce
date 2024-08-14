import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
 import persistStore from 'redux-persist/es/persistStore'
import { Provider } from 'react-redux'
import store from './redux/store/store.js'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

const StorePersistore = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
<PersistGate  persistor={StorePersistore}>
<Provider store={store}>
<BrowserRouter>
  <App/>
 </BrowserRouter> 
</Provider>

</PersistGate>
)
