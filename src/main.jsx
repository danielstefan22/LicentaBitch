import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TransactionProvider } from './context/Transactions context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
)
