import { useRef, useState } from 'react'
import './addless.css'
const AddLess = ()=>{
    /**
     * 当state的值是一个对象时，修改时是使用新的对象去替换已有对象
     * -setState()会触发组件的重新消染，它是异步的
            所以当调用setstate()需要用旧state的值时，一定要注总有可能出现计算错误的情况
            为了避免这种情况，可以通过为setState()传递回调雨数的形式来修改S
     */

    const [num,setNum]  = useState(1)
    const [userinfo,setuser] = useState({name:'react',age:18})

    const add = ()=>{
        setNum((pre)=>{
            return pre+1
        } )
        console.log('num',num)
    }

    const less =()=>{
        /**
         * setstate()中回调函数的返回值将会成为新的state值冷回调函数执行时，
         * React会将最新的state值作为参数传递
         */
        setNum((pre)=>pre-1)
        console.log('num',num)
    }

    const handleInfo = ()=>{
        /**
         *  setuser(userinfo.age = 19)
            console.log("userinfo",userinfo)
            虽然打印是改变了userinfo的值 可是页面渲染没有更新
         */
        
        setuser({...userinfo,name:'react18'})
    }


    /**
     * 获取原生的D0M对象

        1.可以使用传统的document来对DOM进行操作
        2.直接从React处获取DOM对象
            步骤:
            1.创建一个存储DOM对象的容器
                -使用 useRef()钩子函数
                    钩子函数的注意事项:
                        ①React中的构子两数只能用于函数组件或自定义钩子函数
                        (2)钩子函数只能直接在函数组件中调用
     */
    const refele = useRef()
   
    const handleRef = ()=>{
        console.log("获取dom对象节点",refele.current)
        refele.current.innerHTML = '修改ref'
    }

    return <div className="addLessBox">
        <p className="num">{num}</p>
        <div>
            <button onClick={add}>＋</button>
            <button onClick={less}>－</button>
        </div>

        <div>
            {/* 不允许直接渲染 对象 直接写写{userinfo}会报错 */}
            <p ref={refele} className='user'>{userinfo.name} --- {userinfo.age}</p>
            <button onClick={handleInfo}>修改</button>
            <button onClick={handleRef}>ref修改</button>
        </div>
    </div>
}

export default AddLess