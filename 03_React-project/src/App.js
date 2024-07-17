import Test from './components/Test'
import Test2 from './components/Test2'
import Logs from './logs'
import AddLess from './addless'
import ClassDemo from './demo-classComponents'
import Card from './components/UI/Card'
import LogForm from './components/logForm/logForm'
// ***组件要大写开头命名

const App = ()=>{
    return <div>
        <LogForm/>
         
        <Card className='logs'>
            
            <Logs/>
        
        </Card>

        <Test/>
        <Test2/>
        <AddLess/>
        <ClassDemo toSon="props传值"/>
    </div>
    
   
    
}

export default App