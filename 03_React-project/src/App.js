import Test from './components/Test'
import Test2 from './components/Test2'
import LogItem from './components/logItem/logItem'
const App = ()=>{
    return <div className='logs'>
    <LogItem/>
    <Test/>
    <Test2/>
    </div>
    
}

export default App