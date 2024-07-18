import Test from './components/Test'
import Test2 from './components/Test2'
import Logs from './logs'
import AddLess from './addless'
import ClassDemo from './demo-classComponents'
import Card from './components/UI/Card'
import LogForm from './components/logForm/logForm'
import { useState } from 'react'
// ***组件要大写开头命名

const App = ()=>{

    const [data,setData] = useState([
        {
            id:'001',
            date:'七',
            title:'学习',
            content:'react'
        },
        {
            id:'002',
            date:'七',
            title:'学习',
            content:'nuxt'
        },
    ])

    //接收子组件传来的值
    const handleData = (sondata)=>{
        console.log("data",sondata)
        sondata.id = Date.now() + ''
        setData([sondata,...data])
    }

    const delEvent = (index)=>{
        setData(pre=>{
            const newData = [...pre]
            newData.splice(index,1)
            return newData
        })
    }
    return <div>
        <LogForm onhandleData={handleData}/>
         
        <Card className='logs'>
            
            <Logs  onhandleDel={delEvent} data={data}/>
        
        </Card>

        <Test/>
        <Test2/>
        <AddLess/>
        <ClassDemo toSon="props传值"/>
    </div>
    
   
    
}

export default App