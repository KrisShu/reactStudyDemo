
import classes from './Filter.module.css'
const Filter = (props)=>{
    const handelChange = (e)=>{
        console.log("e",e.target.value)
        const keyword = e.target.value.trim();
        props.onFilter(keyword)
    }

    return (
        <div className={classes.filter}>
            <input onChange={handelChange} placeholder='请输入关键字'></input>
        </div>
    )
}

export default Filter