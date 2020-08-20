// 入口
import React from 'react'
import ReactDom from 'react-dom'


import Routers from './Router'
import Main from './page/main/index'

// ReactDom.render(<Main/>,document.getElementById('root'))// 渲染
ReactDom.render(<Routers/>,document.getElementById('root'))// 渲染
