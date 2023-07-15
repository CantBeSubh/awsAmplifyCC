// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import "@aws-amplify/ui-react/styles.css"
// @ts-ignore
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>,
)
