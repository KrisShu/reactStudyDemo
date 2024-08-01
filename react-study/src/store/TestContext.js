import React from "react";


/**
 * Context相当于一个公共的存储空间
 *  可以将多个组件中都需要访问的数据统一存储到一个context中，
 * 这样就无需通过props逐层传递，即可使组件访问到这些数据
 *  可以设置默认值 也可以不设置
 * 
 */

const TestContext = React.createContext({ //这个是默认数据，可以设置也可以不设置
    name:'小美',
    age:18
})

export default TestContext