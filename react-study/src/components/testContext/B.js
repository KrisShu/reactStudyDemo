/**
 * context使用方式二
 * 1.导入定义的context
 * 2.使用useContext()需要一个context作为参数
 *      它会将context中数据获取并返回值
 * 
 * xxxx.Provider  例如：TestContext.Provider
 * -表示数据的生成者，可以使用它来指定context中的数据
 * -通过value 来指定context中存储的数据
 * 
 * 当我们通过context访问数据时，他会读取离他最近的provider的数据
 *  如果没有provider，则读取context中的默认数据
 * 
 */
import { useContext } from "react"
import TestContext from "../../store/TestContext"

const B = ()=>{
    const ctx = useContext(TestContext)

    console.log("ctxctx",ctx)
    return (
        <div style={{fontSize:'24rem'}}>
            {ctx.name} - {ctx.age}
        </div>
    )
}

export default B 