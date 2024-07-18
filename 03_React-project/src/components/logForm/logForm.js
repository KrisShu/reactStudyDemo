import './logForm.css'
import Card from '../UI/Card'
import { useState } from 'react'
const LogForm = (props)=>{

    const [formData,setFormData] = useState({
        date:'',
        title:'',
        content:''
    })

    const inputchange = (e,key)=>{
        console.log("e,key",e,key)
        setFormData({
            ...formData,
            [key]:e.target.value
        })
    }
    const formSubmit = (e)=>{
        e.preventDefault();
        const newItem = {
            date:formData.date,
            title:formData.title,
            content:formData.content
        }
        props.onhandleData(newItem) //子传父  把子组件的数据传给父组件

        setFormData({
            date:'',
            title:'',
            content:''
        })
        console.log('formData',formData)
    }
    return  <Card className='logformbox'>
                <form className='logform' onSubmit={formSubmit}>
                    <div className="formitem">
                        <span className="label">日期</span>
                        <input onChange={(e)=>{inputchange(e,'date')}} value={formData.date} type="date"/>
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