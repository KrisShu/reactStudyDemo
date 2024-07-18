import LogItem from './components/logItem/logItem'

const Logs = (props)=>{

    
    /*
        在父组件中可以直接在子组件中设置属性 
        循环组件用map
    */
   
    let LogItemEle = props.data.map((item,index) => <LogItem 
                index={index}
                onhandleDel={props.onhandleDel}
                key={item.id} 
                date={item.date} 
                title={item.title} 
                content={item.content}/>)

    if(LogItemEle.length === 0){
        LogItemEle = <p>暂无数据</p>
    }

    return <div>
        
          {LogItemEle}
    </div>
}
export default Logs