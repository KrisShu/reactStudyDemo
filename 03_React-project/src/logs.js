import LogItem from './components/logItem/logItem'

const Logs = ()=>{

    const data =[
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
    ]
    /*
        在父组件中可以直接在子组件中设置属性 
        循环组件用map
    */
   
    const LogItemEle = data.map(item => <LogItem key={item.id} date={item.date} title={item.title} content={item.content}/>)

    return <div>
        
          {LogItemEle}
    </div>
}
export default Logs