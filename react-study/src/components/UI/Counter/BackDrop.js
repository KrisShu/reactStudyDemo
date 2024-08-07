import classes from './BackDrop.module.css'

import ReactDOM from 'react-dom'

/**
 * portal
 *      -组件默认会作为父组件的后代渲染到页面中
 *      -通过portal可以将组件谊染到页面中的指定位置
 *       使用方法:
 *          1.在index.html添加一个新的元素
 *          2修改组件的渲染方式
 *                  通过ReactD0M.createPortal()作为返回值创建元素
 *                  参数:
 *                      1.jsx(修改ireturn后的代码)
 *                      2、目标位置(DOM元素)
 */

const popBgEle =  document.getElementById('popBg-ele')
const BackDrop = (props)=>{
    return  ReactDOM.createPortal(<div 
    {...props}
    className={`${classes.PopBg} ${props.className}`}>
        {props.children}
    </div>,popBgEle) 
}

export default BackDrop