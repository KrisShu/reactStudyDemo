import { useState } from 'react'
import './addless.css'
const AddLess = ()=>{

    const [num,setNum]  = useState(1)

    const add = ()=>{
        setNum(num +1 )
        console.log('num',num)
    }

    const less =()=>{
        setNum(num- 1)
        console.log('num',num)
    }
    return <div className="addLessBox">
        <p className="num">{num}</p>
        <div>
            <button onClick={add}>＋</button>
            <button onClick={less}>－</button>
        </div>
    </div>
}

export default AddLess