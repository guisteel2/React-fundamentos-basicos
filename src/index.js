import ReactDom from 'react-dom'
import React from 'react'
import './index.css'
import App from './js/App'

ReactDom.render(
    <App max='10' min ='0'></App>,
        document.getElementById('root')

)