
import { useState } from 'react'
import classes from './Filter.module.css'
const Filter = (props)=>{
    const [keyword,setKeyword] = useState('')
    const handelChange = (e)=>{
        // console.log("e",e.target.value)
        // const keyword = e.target.value.trim();
        // props.onFilter(keyword)
        setKeyword(e.target.value.trim())
    }

    return (
        <div className={classes.filter}>
            <input 
            value={keyword}
            onChange={handelChange} 
            placeholder='请输入关键字'></input>
        </div>
    )
}

export default Filter