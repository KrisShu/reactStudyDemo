import './logItem.css'
const LogItem = (props)=>{
    /**
     * props
     * 接收父组件传来的值
     * 是只读的不能修改
     */
    console.log('props',props)

    const clickHandler = (event)=>{
        event.stopPropagation();//取消事件冒泡
        console.log("event",event)
        alert(456)
    }
    

    /**
     * 
     * 事件传参且需要拿到事件处理
     */
    const clickHandler2 = (params)=>(event)=>{
        event.stopPropagation();//取消事件冒泡
        console.log("params",params)
        console.log("event",event)
    }

    const clickHandler3 = (e,params)=>{
        e.stopPropagation();//取消事件冒泡
        console.log("params",params)
        console.log("event",e)
    }

    // 删除
    const delHandle = (e)=>{
        e.stopPropagation();
        props.onhandleDel(props.index)
    }
    return <div className='item'>
        {/* 日期 */}
        <div onClick={()=>{alert(123)}} className='date-box'>
            <p onClick={clickHandler} className='month'>{props.date}月</p>
            <p onClick={clickHandler2({name:'jst'})} className='date'>15</p>
        </div>
        {/*  */}
        <div onClick={clickHandler} className='content-box'>
            {/* 事件传参 */}
            <p onClick={(e)=>{clickHandler3(e,{name:'jst'})}} className='title'>{props.title}</p>
            <p className='content'>{props.content}</p>

            <span onClick={delHandle} className='del'>×</span>
        </div>
    </div>
}

export default LogItem