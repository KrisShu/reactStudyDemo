import React from "react";
function App() {



    return (
       <>
            <h1>React.Fragment</h1>
            <p>-是一个专门用来作为父容器的组件</p>
            <p>它只会将它里边的子元素直接返回，不会创建任何多余的元素</p>
            <p>-当我们希望有一个父容器</p>
            <p>但同时又不希望父容器在网页产生多余的结构时</p>
            <p>就可以使用Fragment  简写 '<></>' </p>
       </>
    );
}

export default App;
