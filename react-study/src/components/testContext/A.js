/**
 * 第一种使用context的方法
 *  注意 这里会把TestContext当作一个组件使用 所以命名的时候 首字母需要大写
 *  Consumer的标签体需要一个回调函数
 *  她会将context设置为回调函数的参数，通过参数就可以访问到context
 * 
 */

import TestContext from "../../store/TestContext"



const A = ()=>{
return (
    <TestContext.Consumer>
        {(ctx)=>{
            return <div>
                {ctx.name} - {ctx.age}
            </div>
        }}
    </TestContext.Consumer>
)
}

export default A