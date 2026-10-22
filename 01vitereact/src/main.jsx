import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const div = document.getElementById('root');
const root = createRoot(div)
root.render(
    <App  name="Kavya"/>
)
