import { useState } from 'react';
import classes from './App.module.css'
function App() {

    // 内联样式

    // 外部样式表
    
    // css module

    const [showBorder,setShowBorder] = useState(false) 

    const handelevent = ()=>{
        setShowBorder(true)
    }

    return (
        <div>
            <p  className={`${classes.title}  ${showBorder ? classes.border :''}`}>标题</p>
            <button onClick={handelevent}>按钮</button>
        </div>
    );
}

export default App;
