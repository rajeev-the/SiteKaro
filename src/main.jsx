import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ Use the correct lodash path
import debounce from 'lodash.debounce';

// example usage
const handleResize = debounce(() => {
  console.log('Resized!');
}, 300);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
