
import React from "react";
import './addless.css'

class ClassDemo extends React.Component{
    state = {
        num:1,
        text:'文字',
        obj:{
            name:'react',
            age:18
        }
    }

    numhandle = ()=>{
        // this.setState({num:this.state.num+1})
        this.setState(preCount=>{
            return {
                num:preCount.num+1
            }
        })
    }


    // 修改对象类型的数据
    objhandle = ()=>{
        this.setState({obj:{...this.state.obj,name:'react18'}})
    }
    render(){
        return <div className="addLessBox">
            <h5>接受props的传值:{this.props.toSon}</h5>
            <h4>state的值： {this.state.num} --- {this.state.text}</h4>
            <button onClick={this.numhandle}>操作</button>
            <h4> {this.state.obj.name} --- {this.state.obj.age}</h4>
            <button onClick={this.objhandle}>操作</button>
        </div>
    }
}

export default ClassDemo