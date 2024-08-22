import { useEffect, useState } from "react";
function App() {
    /**
     * 
     * 当我们直接在函数体中调用setState时，就会触发上述误 -- too many re-renders
不是说过，当新的state值和旧值相同时，它是不会触发组件的重新追染的
setState()的执行流程(因数组件)
setCount(-->dispatchSetDate()
-->会先判断，组件当前处于什么阶段
如果是渲染阶段-->不会检查state值是否相同
如果不是洁染阶段-->会检查state的值是否相同
如果值不相同，则对组件进行重新渲染
如果值相同、则不对组件进行重新渲染
如果值相同，React在一些情况下会继续执行当前组件的消染
但是这个渲染不会触发其子组件的渲染，这次渲染不会产生实际的效果
     */
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)

    const changeCount = ()=>{
        setCount(1)
    }
    /**
     * useEffect()是一个钩子函数，需要一个函数作为参数
     *      这个作为参数的函数，将会在组件渲染完毕后
     * 在开发中，可以将那些会产生副作用的代码编写到useEffext
     *    这样就可以避免这些代码影响到组件的渲染
     * 
     * 默认情况下，useEffect()中的函数，会在组件渲染完成后调用，并且是每次渲染完成后都会调用
     *   
     *  在 useEffect()可以传递第二个参数
     *  第二个参数是一个数组，在数组中可以指定effect的依赖项
     *  指定后，只有当依赖发生变化时，effect才会被触发
     *  如果依赖项设置一个空数组，则意味Effect只会在组件初始化触发一次，后面都不会触发了；不设置第二个参数，那么每次组件渲染effect也跟着渲染
     * 
     */
    useEffect(()=>{
        console.log("effect执行")
        setCount2(pre=>++pre)
    },[count])
    
    return (
        <div>
            <p>count:{count}</p>
            <p>count2:{count2}</p>
            <button onClick={changeCount}>修改count</button>
         </div>
       
       
    );
}

export default App;
