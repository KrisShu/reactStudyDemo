import './logItem.css'
const LogItem = ()=>{
    return <div className='item'>
        {/* 日期 */}
        <div className='date-box'>
            <p className='month'>七月</p>
            <p className='date'>15</p>
        </div>
        {/*  */}
        <div className='content-box'>
            <p className='title'>学习</p>
            <p className='content'>react</p>
        </div>
    </div>
}

export default LogItem