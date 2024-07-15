
import ReactDom from 'react-dom/client'

const App = <div>
    <h1>这是我的第一个react项目</h1>
    <p>终于有了一个react项目</p>
</div>

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(App)