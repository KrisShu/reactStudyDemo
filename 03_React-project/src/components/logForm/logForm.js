import './logForm.css'
import Card from '../UI/Card'
import { useState } from 'react'
const LogForm = ()=>{

    const [formData,setFormData] = useState({
        date:'',
        title:'',
        content:''
    })

    const inputchange = (e)=>{
        setFormData({
            ...formData,
            date:e.target.value
        })
    }
    const formSubmit = ()=>{
        console.log('formData',formData)
    }
    return  <Card className='logformbox'>
                <form className='logform' onSubmit={formSubmit}>
                    <div className="formitem">
                        <span className="label">日期</span>
                        <input onChange={inputchange} type="date"/>
                    </div>
                    <div className="formitem">
                        <span className="label">标题</span>
                        <input onChange={(e)=>{inputchange(e,'title')}}  value={formData.title} type="text"/>
                    </div>
                    <div className="formitem">
                        <span className="label">内容</span>
                        <input onChange={(e)=>{inputchange(e,'content')}}  value={formData.content} type="text"/>
                    </div>
                    <div className="formitem">
                        <button>提交</button>
                    </div>
                </form>
        </Card> 
}

export default LogForm