
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Day18Provider from './providers/Day18Provider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Day18Provider>
<App />
  </Day18Provider>
  
  </BrowserRouter>
)
