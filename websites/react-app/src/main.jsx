import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'



export async function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}



// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  renderApp()
}
//暴露主应用生命周期钩子
export async function bootstrap() {
  console.log("subapp bootstraped");
}

export async function mount(props) {
  console.log("mount subapp");
  renderApp(props);
}

export async function unmount() {
  console.log("unmount college app");
  ReactDOM.unmount()
}
