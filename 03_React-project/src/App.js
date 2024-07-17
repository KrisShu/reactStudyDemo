import Test from './components/Test'
import Test2 from './components/Test2'
import Logs from './logs'
import AddLess from './addless'
import ClassDemo from './demo-classComponents'
// ***组件要大写开头命名

const App = ()=>{
    return <div className='logs'>
    
    <Logs/>
    <Test/>
    <Test2/>
    <AddLess/>
    <ClassDemo toSon="props传值"/>
    </div>
    
}

export default App